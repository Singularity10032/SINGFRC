import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { StickerPhoto } from "@/components/sticker-photo"

export const metadata: Metadata = {
  title: "About — Singularity Robotics",
  description: "FRC Team 10032, a student-led FIRST Robotics Competition team in Frisco, Texas.",
}

// Layout ported from variant G's /about at dad's request (2026-09-15), in
// this variant's arcade idiom and in sentence case. Both photos are used
// nowhere else on this site (dad: "make sure none of the photos repeat").
// Sources: PHOTO-MANIFEST.md — IMG_4602 "five students arm-in-arm in black
// Singularity shirts, arena hall"; image_4 "students working on the robot in
// the pit / at a field station".
const teamPhoto = { src: "/images/photos/IMG_4602.webp", width: 2200, height: 1467 }
const buildPhoto = { src: "/images/photos/image_4.webp", width: 1600, height: 1067 }

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

const buildSteps = [
  "Kickoff",
  "Strategy week (game manual, Ri3D reviews, Chief Delphi)",
  "Subsystem prototypes",
  "CAD in Onshape",
  "Fabrication",
  "Integration and drive practice",
]

const fills = ["bg-arcade-sky", "bg-arcade-mint", "bg-arcade-fuel"]

export default function AboutPage() {
  return (
    <div>
      {/* Headline */}
      <section className="mx-auto max-w-6xl px-4 pb-8 pt-16 sm:px-6 sm:pt-20">
        <Reveal>
          <p className="text-sm font-semibold text-arcade-fuel">About</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl leading-[1.02] sm:text-6xl">
            Started by students who got told no.
          </h1>
        </Reveal>
      </section>

      {/* Photo + bio, two columns */}
      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 sm:grid-cols-[1fr_1.1fr] sm:items-center sm:px-6 sm:pb-24">
        <Reveal>
          <StickerPhoto
            src={teamPhoto.src}
            width={teamPhoto.width}
            height={teamPhoto.height}
            alt="Five students arm-in-arm in black Singularity shirts in an arena hall"
            index={1}
            className="w-full"
            sizes="(max-width: 640px) 90vw, 520px"
            priority
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="prose-arcade max-w-xl text-paper/85">
            <p>
              Singularity was started in 2024 by Frisco students who had been turned away from other robotics
              programs. Instead of waiting for a spot, they built a team of their own: entirely student-led and
              open to anyone who wants to learn.
            </p>
            <p>
              Two seasons in, students still make every decision, from the robot design to the outreach calendar
              to the graphic design in our magazine. Recent alumni help with the legal side and with rides.
            </p>
            <p>
              We are not attached to a school district. We recruit, fund, design, build and program the robot
              ourselves, and the team is its own 501(c)(3) nonprofit, Singularity Robotics, Inc.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The garage: full-bleed mint band */}
      <section className="border-y-2 border-ink bg-arcade-mint text-ink">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:grid-cols-[1.1fr_1fr] sm:px-6 sm:py-20">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">The garage</h2>
            <p className="prose-arcade mt-4 max-w-md text-ink/85">
              There is no robotics lab. We build out of a student&apos;s two-car garage in Prosper, Texas, and use
              the driveway when 36 people can&apos;t fit inside. The shooter gets assembled in one corner, the
              MAXTubes get cut outside, the intake gets fastened in another. Working this way keeps costs down, and
              the money goes back into the robot and the people on the team.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <StickerPhoto
              src={buildPhoto.src}
              width={buildPhoto.width}
              height={buildPhoto.height}
              alt="Students working on the robot at a field station"
              index={2}
              className="w-full"
              sizes="(max-width: 640px) 90vw, 520px"
            />
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">What we&apos;re after</h2>
          <ul className="prose-arcade mt-6 space-y-3 text-paper/85">
            {missionLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">Values</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className={`h-full rounded-xl border-2 border-ink p-5 text-ink shadow-hard ${fills[i]}`}>
                <h3 className="font-display text-xl">{v.title}</h3>
                <p className="mt-2 text-sm text-ink/80">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How we build: numbered steps on a raised panel */}
      <section className="border-y-2 border-paper/20 bg-deep text-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">How we build</h2>
            <p className="mt-3 max-w-lg text-paper/70">
              Every subsystem has a named owner and its own sub-assembly. The master assembly is the single source
              of truth for packaging and weight.
            </p>
          </Reveal>
          <ol className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {buildSteps.map((step, i) => (
              <Reveal key={step} delay={i * 60}>
                <li className="flex items-baseline gap-4">
                  <span className="font-display text-2xl font-extrabold text-arcade-fuel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-paper/90">{step}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
