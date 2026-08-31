import type { Project } from "./types"

export const projects: Project[] = [
  {
    id: "algae-abyss",
    title: "Algae Abyss",
    excerpt:
      "An 8-bit game our programming team built in two weeks, then turned into a teaching tool, a fundraiser tournament, and a recruiting pipeline.",
    coverImage: "/images/projects/algae-abyss-title.png",
    images: [
      {
        src: "/images/projects/algae-abyss-title.png",
        alt: "Algae Abyss title screen",
      },
      {
        src: "/images/projects/algae-abyss-instructions.png",
        alt: "Algae Abyss game instructions",
      },
      {
        src: "/images/projects/algae-abyss-red-wins.png",
        alt: "Algae Abyss red wins screen",
      },
      {
        src: "/images/projects/algae-abyss-gameplay.png",
        alt: "Algae Abyss gameplay",
      },
    ],
    content: `
    <p class="mb-4">Our programming team spent two weeks building Algae Abyss, an 8-bit game meant to bring some competitive fun outside of district events. It started as a way to practice programming and grew into a lot more.</p>

    <p class="mb-4">The game became a teaching tool in our programming seminars, where students got hands-on with game development instead of just reading about it.</p>

    <p class="mb-4">Then we hosted a March Madness-style tournament using Algae Abyss. It raised $500 for local charities and gave people in our community a reason to come see what FIRST Robotics Competition is about.</p>

    <p class="mb-4">The best outcome: 25 new members joined the team for the 2026 FRC season, 10 of them freshmen.</p>

    <p class="mb-4">We're proud of how it turned out, and we plan to keep building on it.</p>
  `,
    tournamentImages: [
      {
        src: "/images/projects/algae-abyss-tournament-1.jpeg",
        alt: "Students playing Algae Abyss during a tournament with Blue Wins screen",
      },
      {
        src: "/images/projects/algae-abyss-tournament-3.jpeg",
        alt: "Students engaged in Algae Abyss gameplay during a tournament",
      },
    ],
  },
]
