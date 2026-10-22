import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { CabinetCard } from "@/components/cabinet-card"
import { stories } from "@/lib/community"
import { GalleryTile } from "@/components/gallery-tile"

export const metadata: Metadata = {
  title: "Community | Singularity Robotics, Frisco FRC Team 10032",
  description:
    "STEM outreach by Singularity Robotics, a Frisco, Texas FRC robotics team: workshops, FLL and FTC mentoring, and more.",
}

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="font-display text-4xl sm:text-5xl">What we do when we&apos;re not building.</h1>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Gallery moved here as one 3-wide tile at the top of the grid (7 stories leave a short last row either way); Gallery left the nav (dad, 2026-10-21). */}
        <Reveal className="sm:col-span-2 lg:col-span-3">
          <GalleryTile />
        </Reveal>
        {stories.map((story, i) => (
          <Reveal key={story.slug} delay={i * 60}>
            <CabinetCard story={story} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
