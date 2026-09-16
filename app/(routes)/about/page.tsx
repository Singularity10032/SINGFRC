import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { StickerPhoto } from "@/components/sticker-photo"
import { photos } from "@/lib/photos"

export const metadata: Metadata = {
  title: "About — Singularity Robotics",
  description: "FRC Team 10032, a student-led FIRST Robotics Competition team in Frisco, Texas.",
}

const values = [
  { title: "Student-led", body: "Every part of the team, from robot design to the budget, is run by students." },
  { title: "Inclusive", body: "Open to any student, whatever their background or experience level." },
  { title: "Determined", body: "We work through problems together instead of giving up on them." },
]

const missionLines = [
  "Give students real, hands-on STEM experience and a team where they can figure out what they're good at.",
  "We want the girls on our team to have the support to lead, and we run outreach so more young women see robotics and engineering as places they belong.",
  "We keep looking for better ways to build, program and run the team.",
]

const fills = ["bg-arcade-sky", "bg-arcade-mint", "bg-arcade-fuel"]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="font-display text-4xl sm:text-5xl">Started by students who got told no.</h1>
      </Reveal>

      <Reveal delay={80}>
        <div className="prose-arcade mt-6">
          <p>
            Singularity was started in 2024 by Frisco students who had been turned away from other robotics
            programs. Instead of waiting for a spot, they built a team of their own: entirely student-led and open
            to anyone who wants to learn.
          </p>
          <p>
            Two seasons in, students still make every decision, from the robot design to the outreach calendar to
            the graphic design in our magazine. Recent alumni help with the legal side and with rides.
          </p>
          <p>
            We are not attached to a school district. We recruit, fund, design, build and program the robot
            ourselves, and the team is its own 501(c)(3) nonprofit, Singularity Robotics, Inc.
          </p>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-12 grid gap-6 rounded-xl border-2 border-ink bg-ink p-6 text-paper shadow-hard sm:grid-cols-[1fr_auto] sm:items-center sm:p-10">
          <div>
            <p className="font-display text-2xl sm:text-3xl">The garage</p>
            <p className="prose-arcade mt-4 max-w-2xl text-paper/85">
              There is no robotics lab. We build out of a student&apos;s two-car garage in Prosper, Texas, and use
              the driveway when 36 people can&apos;t fit inside. The shooter gets assembled in one corner, the
              MAXTubes get cut outside, the intake gets fastened in another. Working this way keeps costs down, and
              the money goes back into the robot and the people on the team.
            </p>
          </div>
          <StickerPhoto
            src={photos.sticker3.src}
            width={photos.sticker3.width}
            height={photos.sticker3.height}
            alt="A student hugging the bare robot chassis in the gym"
            index={2}
            className="mx-auto w-48 sm:w-56"
          />
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-12">
          <h2 className="font-display text-3xl">Mission</h2>
          <ul className="prose-arcade mt-4 space-y-3">
            {missionLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 80}>
            <div className={`h-full rounded-xl border-2 border-ink p-5 shadow-hard ${fills[i]}`}>
              <h3 className="font-display text-xl">{v.title}</h3>
              <p className="mt-2 text-sm text-ink/80">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-12">
          <h2 className="font-display text-3xl">How we build</h2>
          <p className="prose-arcade mt-4">
            Kickoff, then a strategy week (game manual, Ri3D reviews, Chief Delphi), then subsystem prototypes, then
            CAD in Onshape, then fabrication, then integration and drive practice. Every subsystem has a named
            owner and its own sub-assembly. The master assembly is the single source of truth for packaging and
            weight.
          </p>
        </div>
      </Reveal>
    </div>
  )
}
