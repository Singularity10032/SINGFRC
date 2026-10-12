import { NextResponse } from "next/server"

// Receives CADathon waitlist and registration submissions and forwards them
// to a Google Apps Script web app that appends a row to the team's sheet.
// Set CADATHON_WEBHOOK_URL (the Apps Script /exec URL) and
// CADATHON_WEBHOOK_SECRET in Vercel. Until both are set, nothing is stored
// and the form tells people sign-ups aren't open yet.

const MAX = 200

function clean(v: unknown) {
  return typeof v === "string" ? v.trim().slice(0, MAX) : ""
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export async function POST(req: Request) {
  const url = process.env.CADATHON_WEBHOOK_URL
  const secret = process.env.CADATHON_WEBHOOK_SECRET
  if (!url || !secret) {
    return NextResponse.json({ ok: false, error: "closed" }, { status: 503 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 })
  }

  // Honeypot: real people never fill this hidden field.
  if (clean(body.website)) return NextResponse.json({ ok: true })

  const kind = body.kind === "registration" ? "registration" : "waitlist"
  const row: Record<string, string | boolean> = {
    kind,
    name: clean(body.name),
    email: clean(body.email),
    division: clean(body.division),
  }

  if (!row.name || !isEmail(row.email as string)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 })
  }

  if (kind === "registration") {
    Object.assign(row, {
      teamName: clean(body.teamName),
      team: clean(body.team),
      age: clean(body.age),
      location: clean(body.location),
      firstTimeCad: clean(body.firstTimeCad),
      under18: body.under18 === true,
      parentEmail: clean(body.parentEmail),
      parentConsent: body.parentConsent === true,
      photoConsent: body.photoConsent === true,
      conductAgreed: body.conductAgreed === true,
    })
    if (!row.division || !row.age || !row.teamName || !row.conductAgreed) {
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 })
    }
    // Play up, never down: each division has an age cap.
    const caps: Record<string, number> = { Beginner: 13, Intermediate: 18, Advanced: 200 }
    const age = Number(row.age)
    if (!(row.division in caps) || !Number.isInteger(age) || age < 5 || age > 99 || age > caps[row.division as string]) {
      return NextResponse.json({ ok: false, error: "division" }, { status: 400 })
    }
    if (row.under18 && (!isEmail(row.parentEmail as string) || !row.parentConsent)) {
      return NextResponse.json({ ok: false, error: "consent" }, { status: 400 })
    }
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, ...row }),
      redirect: "follow",
    })
    const out = await res.json().catch(() => null)
    if (!res.ok || !out?.ok) throw new Error("webhook")
  } catch {
    return NextResponse.json({ ok: false, error: "store" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
