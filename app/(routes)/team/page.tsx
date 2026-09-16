import type { Metadata } from "next"
import Team from "./team"

export const metadata: Metadata = {
  title: "Team — Singularity Robotics",
  description: "FRC Team 10032, a student-led FIRST Robotics Competition team in Frisco, Texas.",
}

export default function TeamPage() {
  return <Team />
}
