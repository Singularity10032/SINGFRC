"use client"

import { useId, useRef, useState, type KeyboardEvent } from "react"

export type Place = { place: string; prize: string; sub?: string; details: string[] }
export type Division = { key: string; name: string; age: string; fill: string; places: Place[] }

// Junior / Senior tabs over the 1st-3rd prize cards. Each card is a button that
// expands to show the full details. Tabs follow the WAI-ARIA tabs pattern
// (arrow keys, Home/End); cards use aria-expanded. Motion is CSS-only and is
// switched off under prefers-reduced-motion.
export function CadathonAwards({ divisions }: { divisions: Division[] }) {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState<string | null>(null)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const base = useId()

  function select(i: number) {
    setActive(i)
    setOpen(null)
    tabs.current[i]?.focus()
  }

  function onKey(e: KeyboardEvent<HTMLButtonElement>) {
    const n = divisions.length
    if (e.key === "ArrowRight") select((active + 1) % n)
    else if (e.key === "ArrowLeft") select((active - 1 + n) % n)
    else if (e.key === "Home") select(0)
    else if (e.key === "End") select(n - 1)
    else return
    e.preventDefault()
  }

  const d = divisions[active]

  return (
    <div className="mx-auto max-w-3xl">
      <div
        role="tablist"
        aria-label="Award division"
        className="mx-auto grid max-w-sm grid-cols-2 gap-1 rounded-full border-2 border-ink bg-paper p-1"
      >
        {divisions.map((div, i) => (
          <button
            key={div.key}
            ref={(el) => {
              tabs.current[i] = el
            }}
            id={`${base}-tab-${div.key}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`${base}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => select(i)}
            onKeyDown={onKey}
            className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors motion-reduce:transition-none ${
              i === active ? "bg-arcade-purple text-paper" : "text-ink hover:bg-ink/5"
            }`}
          >
            {div.name}
            <span className="block text-[11px] font-normal opacity-80">{div.age}</span>
          </button>
        ))}
      </div>

      <div
        id={`${base}-panel`}
        role="tabpanel"
        aria-labelledby={`${base}-tab-${d.key}`}
        className={`mt-6 rounded-xl border-2 border-ink p-4 shadow-hard sm:p-6 ${d.fill}`}
      >
        <p className="text-center font-display text-2xl sm:text-3xl">{d.name} Division</p>
        <p className="text-center text-xs font-extrabold uppercase tracking-wide text-ink/70">{d.age}</p>
        <ol className="mt-5 space-y-3">
          {d.places.map((p) => {
            const id = `${d.key}-${p.place}`
            const isOpen = open === id
            return (
              <li key={id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${base}-${id}`}
                  onClick={() => setOpen(isOpen ? null : id)}
                  className="w-full rounded-lg border-2 border-ink bg-paper p-4 text-center transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="flex flex-wrap items-baseline justify-center gap-x-3">
                    <span className="font-display text-2xl font-extrabold text-arcade-purple">{p.place}</span>
                    <span className="font-display text-xl">{p.prize}</span>
                  </span>
                  {p.sub && <span className="mt-0.5 block text-xs text-ink/70">{p.sub}</span>}
                  <span className="mt-1 block text-xs font-semibold text-ink/60">
                    {isOpen ? "Hide details" : "Tap for details"}
                  </span>
                </button>
                <div
                  id={`${base}-${id}`}
                  hidden={!isOpen}
                  className="mx-2 rounded-b-lg border-2 border-t-0 border-ink bg-paper/90 px-4 py-3"
                >
                  <ul className="space-y-1 text-center text-sm">
                    {p.details.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
