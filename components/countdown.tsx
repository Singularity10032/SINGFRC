"use client"

import { useEffect, useState } from "react"

// Counts down to a fixed instant. Renders dashes on the server and first
// paint, then ticks in the browser, so there is no hydration mismatch. At zero
// the clock stops and shows "Live now".
export function Countdown({ to, compact = false }: { to: string; compact?: boolean }) {
  const target = new Date(to).getTime()
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => {
      const t = Date.now()
      setNow(t)
      if (t >= target) clearInterval(id)
    }, 1000)
    return () => clearInterval(id)
  }, [target])

  const left = now === null ? null : Math.max(0, target - now)
  const parts = [
    { label: "days", v: left === null ? null : Math.floor(left / 86400000) },
    { label: "hrs", v: left === null ? null : Math.floor(left / 3600000) % 24 },
    { label: "min", v: left === null ? null : Math.floor(left / 60000) % 60 },
    { label: "sec", v: left === null ? null : Math.floor(left / 1000) % 60 },
  ]

  if (compact) {
    if (left === 0) {
      return (
        <span className="inline-flex items-center gap-1.5 font-display font-extrabold">
          <span className="h-2 w-2 rounded-full bg-arcade-bumper motion-safe:animate-pulse" aria-hidden />
          Live now
        </span>
      )
    }
    return (
      <span className="font-display font-extrabold tabular-nums" aria-label="Time until the CADathon starts">
        {parts.map((p) => `${p.v === null ? "--" : String(p.v).padStart(2, "0")}${p.label[0]}`).join(" ")}
      </span>
    )
  }

  if (left === 0) {
    return (
      <p className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-arcade-bumper px-5 py-2 font-display text-xl text-paper shadow-hard-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-paper motion-safe:animate-pulse" aria-hidden />
        Live now
      </p>
    )
  }

  return (
    <div className="mx-auto mt-8 grid max-w-md grid-cols-4 gap-2 sm:gap-3" aria-label="Time until the CADathon starts">
      {parts.map((p) => (
        <div key={p.label} className="rounded-xl border-2 border-ink bg-paper px-2 py-3 text-ink shadow-hard-sm">
          <p className="font-display text-2xl font-extrabold tabular-nums sm:text-3xl">
            {p.v === null ? "--" : String(p.v).padStart(2, "0")}
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/60">{p.label}</p>
        </div>
      ))}
    </div>
  )
}
