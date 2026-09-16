"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Robot } from "@/lib/robots"

const fillByIndex = ["bg-arcade-sky", "bg-arcade-mint"]
const photoByIndex = [
  { src: "/images/photos/image_3.webp", width: 1280, height: 960, alt: "ORION nameplate close-up on the field, clean product shot" },
  { src: "/images/photos/20250417_142332.webp", width: 1016, height: 2200, alt: "The 2025 Reefscape robot on the field" },
]

export function RobotPanel({ robot, index }: { robot: Robot; index: number }) {
  const [open, setOpen] = useState(false)
  const photo = photoByIndex[index]

  return (
    <div className={`rounded-xl border-2 border-ink ${fillByIndex[index]} p-5 sm:p-6`}>
      <div className="overflow-hidden rounded-lg border-2 border-ink">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(max-width: 640px) 90vw, 480px"
          className="h-56 w-full object-cover sm:h-64"
        />
      </div>

      <h3 className="mt-4 font-display text-2xl">{robot.name}</h3>
      <p className="text-sm font-semibold text-ink/70">{robot.season}</p>
      <p className="mt-1 text-sm text-ink/70">{robot.tag}</p>

      <dl className="mt-4 grid grid-cols-1 gap-2 border-y-2 border-ink py-4 text-sm">
        {robot.stats.map((stat) => (
          <div key={stat} className="font-semibold tabular-nums">
            {stat}
          </div>
        ))}
      </dl>

      <p className="mt-4 text-sm leading-relaxed text-ink/80">{robot.summary}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="btn-pill mt-5 w-full bg-paper text-ink"
      >
        {open ? "Hide subsystems" : "Show subsystems"}
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <ol className="mt-5 space-y-4">
          {robot.subsystems.map((s) => (
            <li key={s.number} className="rounded-lg border-2 border-ink bg-paper p-4">
              <p className="font-display text-sm text-arcade-purple">{s.number}</p>
              <p className="font-display text-lg">{s.name}</p>
              <p className="mt-1 text-sm text-ink/80">{s.body}</p>
            </li>
          ))}
        </ol>
        {robot.note && <p className="mt-4 text-sm italic text-ink/70">{robot.note}</p>}
      </motion.div>
    </div>
  )
}
