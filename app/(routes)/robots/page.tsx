import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { RobotPanel } from "@/components/robot-panel"
import { PhotoWall } from "@/components/photo-wall"
import { robots } from "@/lib/robots"
import { orionPhotos, reefPhotos } from "@/lib/gallery"

export const metadata: Metadata = {
  title: "Robots — Singularity Robotics",
  description: "FRC Team 10032, a student-led FIRST Robotics Competition team in Frisco, Texas.",
}

// The ORION set past index 13 is on /gallery. Nothing here appears anywhere else.
const wallByIndex = [
  { title: "ORION on the field", photos: orionPhotos.slice(0, 13) },
  { title: "The 2025 robot", photos: reefPhotos },
]

export default function RobotsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="font-display text-4xl sm:text-5xl">Two seasons, two robots.</h1>
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {robots.map((robot, i) => (
          <div key={robot.id}>
            <Reveal delay={i * 100}>
              <RobotPanel robot={robot} index={i} />
            </Reveal>
            <Reveal>
              <h2 className="mt-10 font-display text-2xl">{wallByIndex[i].title}</h2>
            </Reveal>
            <PhotoWall photos={wallByIndex[i].photos} cols={2} startIndex={i * 3} className="mt-5" />
          </div>
        ))}
      </div>
    </div>
  )
}
