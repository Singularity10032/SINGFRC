import type { Metadata } from "next"
import Team from "./team"

export const metadata: Metadata = {
  title: "Team | Singularity Robotics, Frisco FRC Team 10032",
  description:
    "Meet the students of Singularity Robotics, FRC Team 10032, a student-led robotics team in Frisco, Texas.",
}

export default function TeamPage() {
  return <Team />
}
