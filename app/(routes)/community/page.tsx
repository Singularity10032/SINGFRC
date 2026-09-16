import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { CabinetCard } from "@/components/cabinet-card"
import { stories } from "@/lib/community"

export const metadata: Metadata = {
  title: "Community — Singularity Robotics",
  description: "FRC Team 10032, a student-led FIRST Robotics Competition team in Frisco, Texas.",
}

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="font-display text-4xl sm:text-5xl">What we do when we&apos;re not building.</h1>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story, i) => (
          <Reveal key={story.slug} delay={i * 60}>
            <CabinetCard story={story} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
