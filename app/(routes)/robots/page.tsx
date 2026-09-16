import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { RobotPanel } from "@/components/robot-panel"
import { robots } from "@/lib/robots"

export const metadata: Metadata = {
  title: "Robots — Singularity Robotics",
  description: "FRC Team 10032, a student-led FIRST Robotics Competition team in Frisco, Texas.",
}

export default function RobotsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="font-display text-4xl sm:text-5xl">Two seasons, two robots.</h1>
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {robots.map((robot, i) => (
          <Reveal key={robot.id} delay={i * 100}>
            <RobotPanel robot={robot} index={i} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
