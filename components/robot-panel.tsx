"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Robot } from "@/lib/robots"
import { RobotViewer } from "@/components/robot-viewer"

const fillByIndex = ["bg-arcade-sky", "bg-arcade-mint"]

// Real CAD from the team's Onshape (assets/cad/web, see CAD-INTEGRATION.md).
// Dad, 2026-09-15: the 2026 file is the ORIGINAL PROTOTYPE, not the robot as
// built, and must be labelled that way; the 2025 file is the robot's CAD.
const cadByIndex = [
  {
    src: "/cad/orion-2026.glb",
    label: "Original prototype",
    caption: "3D CAD · original prototype, not the robot as built. Drag to rotate, scroll to zoom.",
    alt: "ORION 2026 original prototype CAD, drag to rotate",
  },
  {
    src: "/cad/robot-2025.glb",
    label: "Robot CAD",
    caption: "3D CAD of the 2025 robot. Drag to rotate, scroll to zoom.",
    alt: "2025 REEFSCAPE robot CAD, drag to rotate",
  },
]
const photoByIndex = [
  { src: "/images/photos/image_3.webp", width: 1280, height: 960, alt: "ORION nameplate close-up on the field, clean product shot" },
  { src: "/images/photos/20250417_142332.webp", width: 1016, height: 2200, alt: "The 2025 Reefscape robot on the field" },
]

export function RobotPanel({ robot, index }: { robot: Robot; index: number }) {
  const [open, setOpen] = useState(false)
  const photo = photoByIndex[index]
  const cad = cadByIndex[index]

  return (
    <div className={`rounded-xl border-2 border-ink shadow-hard text-ink ${fillByIndex[index]} p-5 sm:p-6`}>
      {/* Whole photo, nothing cropped (dad: "the photo is cut off"), and the
          frame hugs the image instead of pillarboxing a portrait shot in a
          wide black box (dad's screenshot, 2026-09-15). */}
      <div className="mx-auto w-fit max-w-full overflow-hidden rounded-xl border-2 border-ink">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(max-width: 640px) 90vw, 560px"
          className="h-auto max-h-[28rem] w-auto max-w-full"
        />
      </div>

      <h3 className="mt-4 font-display text-2xl">{robot.name}</h3>
      <p className="text-sm font-semibold text-ink/70">{robot.season}</p>
      <p className="mt-1 text-sm text-ink/70">{robot.tag}</p>

      {/* The movable CAD, with the prototype/as-built label front and centre. */}
      <div className="mt-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full border-2 border-ink px-3 py-1 text-xs font-extrabold ${
              index === 0 ? "bg-arcade-bumper text-paper" : "bg-paper text-ink"
            }`}
          >
            {cad.label}
          </span>
          <span className="text-xs text-ink/70">{cad.caption}</span>
        </div>
        <RobotViewer
          src={cad.src}
          poster={photo.src}
          alt={cad.alt}
          subsystems={robot.subsystems.map((s) => s.name)}
          className="h-[52vh] min-h-[320px] rounded-xl border-2 border-ink bg-space"
        />
      </div>

      <p className="mt-5 border-t-2 border-ink pt-4 text-sm leading-relaxed text-ink/80">{robot.summary}</p>

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
            <li key={s.number} className="rounded-xl border-2 border-ink bg-paper p-4">
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
