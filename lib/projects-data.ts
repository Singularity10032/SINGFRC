import type { Project } from "./types"

export const projects: Project[] = [
  {
    id: "algae-abyss",
    title: "Algae Abyss",
    excerpt:
      "An immersive 8-bit game that brings competitive gaming fun outside of traditional district events, serving as both an educational tool and community builder.",
    coverImage: "/images/projects/algae-abyss-title.png",
    images: [
      {
        src: "/images/projects/algae-abyss-title.png",
        alt: "Algae Abyss Title Screen",
      },
      {
        src: "/images/projects/algae-abyss-instructions.png",
        alt: "Algae Abyss Game Instructions",
      },
      {
        src: "/images/projects/algae-abyss-red-wins.png",
        alt: "Algae Abyss Red Wins Screen",
      },
      {
        src: "/images/projects/algae-abyss-gameplay.png",
        alt: "Algae Abyss Gameplay",
      },
    ],
    content: `
    <p class="mb-4">Over the past two weeks, our programming team poured their energy into creating Algae Abyss—an immersive 8-bit game that brings competitive gaming fun outside of the traditional district events. The project was born out of a desire to offer a fresh, engaging way to learn programming, and it turned into something much bigger than we ever anticipated.</p>
    
    <p class="mb-4">We didn't just build the game; we used it as a dynamic teaching tool during our programming seminars. Participants got hands-on experience while diving into the exciting world of game development, sparking curiosity and creativity at every turn.</p>
    
    <p class="mb-4">The excitement reached a new level when we hosted a March Madness–style tournament using Algae Abyss. The tournament not only raised $500 for local charities, but it also played a pivotal role in bringing our community closer to FIRST Robotics Competition (FRC). By merging fun gameplay with meaningful engagement, we introduced many new enthusiasts to the world of robotics, igniting interest and forming lasting connections.</p>
    
    <p class="mb-4">Perhaps the most rewarding outcome was the addition of 25 new members to our team for the 2026 FRC season, including 10 freshmen who promise to ensure our longevity and future success. This initiative not only showcased the creativity of our programming team but also served as a unique, exciting avenue to spread the passion for robotics throughout our community.</p>
    
    <p class="mb-4">In the end, Algae Abyss wasn't just a game—it was a bridge connecting competitive gaming, community involvement, and the inspiring world of robotics. We're proud to have made a positive impact, and we're excited to see where these new relationships and fresh talent will take us next.</p>
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

