// Robot facts, verbatim from COPY-DECK.md "Robots" section (sourced from the
// engineering portfolio and season magazine). Do not add facts not listed here.

export type Subsystem = { number: string; name: string; body: string }

export type Robot = {
  id: string
  name: string
  season: string
  tag: string
  summary: string
  stats: [string, string, string]
  subsystems: Subsystem[]
  facts: string[]
  note?: string
}

export const robots: Robot[] = [
  {
    id: "orion",
    name: "ORION",
    season: "2026 · REBUILT",
    tag: "District event winner, Fort Worth",
    summary:
      "Our second-season robot. A four-module swerve drivebase carries a superstructure with the team name cut straight through the side panels. A roller intake at the back feeds a two-stage indexer, driven by HTD 5 mm belts and miter gears, that moves Fuel up through the robot.",
    stats: ["120 part instances", "38-instance drivebase", "Limelight 3 / 3A vision"],
    subsystems: [
      {
        number: "01",
        name: "Swerve drivebase",
        body: "Four swerve modules on a lightened belly pan with MAXTube perimeter framing. 38 instances, 30 mates. The electronics layout (PDH, roboRIO, breaker mount) was resolved in CAD before parts were cut.",
      },
      {
        number: "02",
        name: "Roller intake",
        body: "Belt-driven roller intake on MAXTube framing with plate side rails.",
      },
      {
        number: "03",
        name: "Indexer",
        body: "Two stages, each its own sub-assembly with its own belt and chain part studio.",
      },
      {
        number: "04",
        name: "Superstructure",
        body: "22 instances, bolts to the drivebase, houses the indexer.",
      },
    ],
    facts: [
      "120 part instances on a 38-instance drivebase",
      "Java on WPILib, command-based, public on GitHub",
      "Limelight 3 / 3A vision",
      "One Onshape document, \"Singularity 2026\"",
    ],
    note: "The lesson from year one was to finish mechanical earlier so programming gets more time. We made that the priority, and it helped us win our first competition. For the second event we focused on an autonomous mode.",
  },
  {
    id: "reefscape-2025",
    name: "2025 robot",
    season: "2025 · REEFSCAPE",
    tag: "Rookie year, Worlds qualifier",
    summary:
      "Our rookie-season robot. A vertical elevator carries a pivoting coral end-effector to the reef's scoring levels, a dedicated climber handles the endgame, and a Limelight 3 on a right-side mount feeds the drive team. Aluminum tube and plate frame with a belly pan for the battery, PDH, roboRIO and radio.",
    stats: ["1,091 part instances", "76 mates", "574-instance drivebase"],
    subsystems: [
      {
        number: "01",
        name: "Elevator",
        body: "Multi-stage vertical lift. Stage count, gear ratio (7.75:1) and tube wall thickness are configuration options in Onshape, so one model covers every variant we tested.",
      },
      {
        number: "02",
        name: "Coral end-effector",
        body: "Pivoting manipulator on the elevator carriage, with flywheels and coral wheels.",
      },
      {
        number: "03",
        name: "Climber",
        body: "REV MAXPlanetary gearbox through #25 chain on REV hub sprockets, on MAXTube framing.",
      },
    ],
    facts: ["1,091 part instances, 76 mates", "Drivebase alone is 574 instances"],
  },
]
