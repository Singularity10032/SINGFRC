"use client"

import { useState, type FormEvent, type ReactNode } from "react"

type Kind = "waitlist" | "registration"
type State = "idle" | "sending" | "done" | "closed" | "error"

const divisions = ["FLL", "FTC", "FRC", "Not sure yet"]
const grades = ["Grades 4 to 6", "Grades 7 to 8", "Grades 9 to 12", "Other"]

const input =
  "mt-1 w-full rounded-lg border-2 border-ink bg-white px-3 py-2 text-sm text-ink outline-none focus:ring-2 focus:ring-arcade-purple"

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-left text-sm font-semibold">
      {label}
      {children}
    </label>
  )
}

function Check({ name, children, required }: { name: string; children: ReactNode; required?: boolean }) {
  return (
    <label className="flex items-start gap-3 text-left text-sm">
      <input type="checkbox" name={name} required={required} className="mt-1 h-4 w-4 shrink-0 accent-[#6B2FD6]" />
      <span>{children}</span>
    </label>
  )
}

export function CadathonSignup() {
  const kind = "registration" as Kind
  const [state, setState] = useState<State>("idle")
  const [under18, setUnder18] = useState(true)

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const data: Record<string, unknown> = { kind }
    f.forEach((v, k) => (data[k] = v))
    for (const k of ["parentConsent", "photoConsent", "conductAgreed"]) data[k] = f.get(k) === "on"
    data.under18 = under18
    setState("sending")
    try {
      const res = await fetch("/api/cadathon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.status === 503) return setState("closed")
      setState(res.ok ? "done" : "error")
    } catch {
      setState("error")
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-xl border-2 border-ink bg-arcade-mint p-6 text-ink shadow-hard">
        <p className="font-display text-2xl">You&apos;re in.</p>
        <p className="mt-2 text-sm">
          We&apos;ll email you the details before the event.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-xl border-2 border-ink bg-paper p-5 text-ink shadow-hard sm:p-7">
      <p className="font-display text-2xl">Register a student</p>
      <p className="mt-1 text-sm text-ink/70">One form per student. Teammates each register.</p>

      <form onSubmit={submit} className="mt-6 space-y-4">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
        <Field label={kind === "registration" ? "Student name" : "Name"}>
          <input name="name" required className={input} />
        </Field>
        <Field label="Email">
          <input name="email" type="email" required className={input} />
        </Field>
        <Field label="Division">
          <select name="division" required={kind === "registration"} defaultValue="" className={input}>
            <option value="" disabled>
              Pick one
            </option>
            {divisions.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </Field>

        {kind === "registration" && (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="FIRST team number (or &quot;none&quot;)">
                <input name="team" className={input} />
              </Field>
              <Field label="Grade">
                <select name="grade" required defaultValue="" className={input}>
                  <option value="" disabled>
                    Pick one
                  </option>
                  {grades.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="City, state and country">
              <input name="location" className={input} />
            </Field>
            <Field label="Is this your first time using CAD?">
              <select name="firstTimeCad" defaultValue="" className={input}>
                <option value="" disabled>
                  Pick one
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </Field>
            <label className="flex items-center gap-3 text-left text-sm font-semibold">
              <input
                type="checkbox"
                checked={under18}
                onChange={(e) => setUnder18(e.target.checked)}
                className="h-4 w-4 accent-[#6B2FD6]"
              />
              The student is under 18
            </label>
            {under18 && (
              <div className="space-y-3 rounded-lg border-2 border-dashed border-ink/40 p-4">
                <Field label="Parent or guardian email">
                  <input name="parentEmail" type="email" required className={input} />
                </Field>
                <Check name="parentConsent" required>
                  I&apos;m the parent or guardian, and I agree to my student taking part in this online event.
                </Check>
              </div>
            )}
            <Check name="photoConsent">Photos or screenshots of the student&apos;s work may be shared by the team.</Check>
            <Check name="conductAgreed" required>
              I agree to the{" "}
              <a href="/cadathon/code-of-conduct" target="_blank" className="font-semibold underline">
                event code of conduct
              </a>
              .
            </Check>
          </>
        )}

        <button
          type="submit"
          disabled={state === "sending"}
          className="btn-pill w-full bg-arcade-bumper text-paper disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Register"}
        </button>

        {state === "closed" && (
          <p className="text-sm font-semibold text-arcade-bumper">
            Sign-ups aren&apos;t open yet. Email admin@singularityfrc.com and we&apos;ll add you.
          </p>
        )}
        {state === "error" && (
          <p className="text-sm font-semibold text-arcade-bumper">
            Something went wrong. Check the fields and try again, or email admin@singularityfrc.com.
          </p>
        )}
        <p className="text-xs text-ink/60">
          We only use this to contact you about the CADathon. We never share it.
        </p>
      </form>
    </div>
  )
}
