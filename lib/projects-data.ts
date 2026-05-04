import type { Project } from "./types"

export const projects: Project[] = [
  {
    id: "algae-abyss",
    title: "Algae Abyss",
    excerpt:
      "An immersive 8-bit game and tournament that helped our programming team teach game development, raise funds, and bring more students into FRC.",
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
    <p class="mb-4">Over two weeks, our programming team poured its energy into creating Algae Abyss, an immersive 8-bit game that brought competitive gaming fun outside of traditional district events. The project started as a fresh, engaging way to learn programming and grew into something much bigger.</p>

    <p class="mb-4">We did not just build the game; we used it as a dynamic teaching tool during our programming seminars. Participants got hands-on experience while diving into game development, sparking curiosity and creativity at every turn.</p>

    <p class="mb-4">The excitement reached a new level when we hosted a March Madness-style tournament using Algae Abyss. The tournament raised $500 for local charities and helped bring our community closer to FIRST Robotics Competition. By merging fun gameplay with meaningful engagement, we introduced new students and supporters to robotics.</p>

    <p class="mb-4">Perhaps the most rewarding outcome was the addition of 25 new members to our team for the 2026 FRC season, including 10 freshmen who help strengthen our future. This initiative showcased the creativity of our programming team and gave us a unique way to spread a passion for robotics throughout our community.</p>

    <p class="mb-4">In the end, Algae Abyss was more than a game. It became a bridge between competitive gaming, community involvement, and the inspiring world of robotics. We are proud of the impact it made and excited to keep building from it.</p>
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
