import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { StickerPhoto } from "@/components/sticker-photo"
import { PhotoWall } from "@/components/photo-wall"
import { BlobEdge, band } from "@/components/blob-edge"
import { results } from "@/lib/results"
import { buildPhotos } from "@/lib/gallery"

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

const fills = ["bg-arcade-sky", "bg-arcade-mint", "bg-arcade-fuel"]

// Achievements by year (dad, 2026-09-15: "list our achievements by year in a
// colorful way but easy to differentiate"). Rows come straight from
// lib/results.ts (The Blue Alliance); one colour per season, nothing added.
const seasonsByYear = [
  { year: "2026", fill: "bg-arcade-fuel", ink: "text-arcade-fuel", rows: results.filter((r) => r.season === "2026") },
  { year: "2025", fill: "bg-arcade-sky", ink: "text-arcade-sky", rows: results.filter((r) => r.season === "2025") },
]

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

      {/* The garage: full-bleed mint band with blob edges top and bottom */}
      <BlobEdge fill={band.mint} />
      <section className="bg-arcade-mint text-ink">
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

      {/* Achievements by year: a big colour-coded year tab, receipts beside it. */}
      <BlobEdge fill={band.mint} flip />
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">What we&apos;ve won</h2>
        </Reveal>
        <div className="mt-8 space-y-10">
          {seasonsByYear.map((s, si) => (
            <Reveal key={s.year} delay={si * 80}>
              <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-6">
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-xl border-2 border-ink font-display text-3xl font-extrabold text-ink shadow-hard sm:h-28 sm:w-28 sm:text-4xl ${s.fill}`}
                  style={{ rotate: `${si % 2 === 0 ? -2 : 2}deg` }}
                >
                  {s.year}
                </div>
                <ol className="space-y-3">
                  {s.rows.map((r, i) => (
                    <li
                      key={r.event}
                      className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl border-2 border-ink bg-paper px-4 py-3 text-ink shadow-hard-sm"
                      style={{ marginLeft: `${(i % 3) * 12}px` }}
                    >
                      <span className={`h-3 w-3 shrink-0 self-center rounded-full border border-ink ${s.fill}`} aria-hidden />
                      <span className="font-display text-lg">{r.result}</span>
                      <span className="text-sm text-ink/70">{r.event}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* In the garage: build-season photos, all from the garage/pit set */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">Build season, in pictures</h2>
        </Reveal>
        <PhotoWall photos={buildPhotos} cols={3} className="mt-8" />
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
    </div>
  )
}
