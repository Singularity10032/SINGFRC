import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { PhotoWall } from "@/components/photo-wall"
import { winPhotos, houston2025Photos, orionPhotos, pitPhotos, buildPhotos, teamPhotos } from "@/lib/gallery"

export const metadata: Metadata = {
  title: "Gallery — Singularity Robotics",
  description: "FRC Team 10032, a student-led FIRST Robotics Competition team in Frisco, Texas.",
}

// Everything that doesn't already live on another page. The first ORION
// frames are on /robots and the first team frame is on the home hero, so the
// slices here start after those (no photo appears twice on the site).
const sections = [
  { title: "Fort Worth 2026: district winners", fill: "bg-arcade-fuel", photos: winPhotos },
  // Moved here from /team (dad, 2026-09-15).
  { title: "Together", fill: "bg-paper", photos: teamPhotos },
  { title: "Houston 2025: FIRST Championship", fill: "bg-arcade-sky", photos: houston2025Photos },
  { title: "More of ORION", fill: "bg-arcade-bumper text-paper", photos: orionPhotos.slice(13) },
  { title: "Pits, practice, stands", fill: "bg-arcade-sky", photos: pitPhotos },
  // Moved here from /about (dad, 2026-09-15).
  { title: "Build season, in pictures", fill: "bg-paper", photos: buildPhotos },
]

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="font-display text-4xl sm:text-5xl">Pictures.</h1>
        <p className="mt-2 max-w-xl text-paper/70">Two seasons of the team, from the garage to the arena.</p>
      </Reveal>

      {sections.map((s, i) => (
        <section key={s.title} className="mt-16">
          <Reveal>
            <h2
              className={`inline-block rounded-xl border-2 border-ink px-4 py-2 font-display text-2xl text-ink shadow-hard sm:text-3xl ${s.fill}`}
              style={{ rotate: `${i % 2 === 0 ? -1 : 1}deg` }}
            >
              {s.title}
            </h2>
          </Reveal>
          <PhotoWall photos={s.photos} cols={3} startIndex={i} className="mt-8" />
        </section>
      ))}
    </div>
  )
}
