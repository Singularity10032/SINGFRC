// Community stories, verbatim from COPY-DECK.md "Community" section.
// Photos only from PHOTO-MANIFEST.md / public/images — never invented.
// 2026-09-15: galleries extended from lib/gallery.ts (the Slack + local pull).

import { fuelfrenzyPhotos, algaePhotos, interviewsPhotos, bookPhotos } from "@/lib/gallery"

// `fit: "cover"` lets a portrait screen fill the cabinet instead of letterboxing (dad, 2026-09-15, interviews).
export type CommunityPhoto = { src: string; width: number; height: number; alt: string; fit?: "cover" | "contain" }

export type Story = {
  slug: string
  title: string
  year: string
  fill: "sky" | "mint" | "fuel"
  excerpt: string
  body: string
  screen?: CommunityPhoto
  gallery: CommunityPhoto[]
}

export const stories: Story[] = [
  {
    slug: "fuel-frenzy",
    title: "Fuel Frenzy",
    year: "2026",
    fill: "fuel",
    excerpt: "Our 8-bit arcade game for the REBUILT season, and the cabinet students built to house it.",
    body: "Fuel Frenzy is our 8-bit arcade game for the REBUILT season, built by the programming team. Then we built the cabinet: woodworking, panels, wiring, joysticks and the painted desert and wild-west artwork, all by students. It travels to competitions and workshops, and the plan is to install it at the local library.",
    // Title card drawn in the same pixel idiom as the Algae Abyss title screen
    // (dad, 2026-09-15); FIRST in Texas + S1NGULARITY marks are cropped from that screen.
    screen: { src: "/images/projects/fuel-frenzy-title.png", width: 2848, height: 1572, alt: "Fuel Frenzy title screen" },
    gallery: [
      { src: "/images/photos/IMG_3270.webp", width: 1650, height: 2200, alt: "The Fuel Frenzy cabinet at night" },
      { src: "/images/photos/IMG_3280.webp", width: 1650, height: 2200, alt: "Kids playing the Fuel Frenzy cabinet" },
      { src: "/images/photos/IMG_3284.webp", width: 1650, height: 2200, alt: "Students playing the Fuel Frenzy cabinet" },
      { src: "/images/photos/IMG_3287.webp", width: 1650, height: 2200, alt: "A student at the arcade cabinet" },
      { src: "/images/photos/IMG_3492.webp", width: 1650, height: 2200, alt: "A student holding the arcade leaderboard whiteboard" },
      ...fuelfrenzyPhotos,
    ],
  },
  {
    slug: "algae-abyss",
    title: "Algae Abyss",
    year: "2025",
    fill: "sky",
    excerpt: "An 8-bit game built in two weeks that became a teaching tool, a fundraiser, and a recruiting pipeline.",
    body: "An 8-bit game our programming team built in two weeks for the REEFSCAPE season. It became a teaching tool in our programming seminars, then a March Madness-style tournament that raised $500 for local charities, then a recruiting pipeline: 25 new members joined for the 2026 season, including 10 freshmen.",
    screen: { src: "/images/projects/algae-abyss-title.png", width: 2848, height: 1572, alt: "Algae Abyss title screen" },
    gallery: [
      { src: "/images/photos/20250417_091753.webp", width: 2200, height: 1016, alt: "Students playing the Algae Abyss arcade cabinet at a competition" },
      { src: "/images/projects/algae-abyss-gameplay.png", width: 2848, height: 1592, alt: "Algae Abyss gameplay" },
      { src: "/images/projects/algae-abyss-instructions.png", width: 2824, height: 1568, alt: "Algae Abyss game instructions" },
      { src: "/images/projects/algae-abyss-red-wins.png", width: 2840, height: 1560, alt: "Algae Abyss red wins screen" },
      ...algaePhotos,
    ],
  },
  {
    slug: "frisco-ignite",
    title: "Frisco Ignite",
    year: "2025-2026",
    fill: "mint",
    excerpt: "Bi-monthly STEAM workshops for local elementary students, now in a second year.",
    body: "For the second year we've partnered with Frisco Ignite to run hands-on STEAM workshops for local elementary students. In our first season we reached over 600 K-5 students through bi-monthly workshops: science concepts, mini engineering challenges, and a lot of marble runs.",
    screen: { src: "/images/photos/IMG_1796.webp", width: 2200, height: 1467, alt: "Young kids doing a water and bottle STEM activity" },
    gallery: [
      { src: "/images/photos/IMG_1908.webp", width: 2200, height: 1467, alt: "Two students holding a certificate from Frisco Ignite" },
      // PHOTO-2025-12-13 (Brick Blazers sign) is the FLL/FTC story's screen; not repeated here.
    ],
  },
  {
    slug: "fll-ftc-mentorship",
    title: "FLL and FTC mentorship",
    year: "2025-2026",
    fill: "sky",
    excerpt: "Mentoring FIRST LEGO League teams and a first-year FTC team through their rookie season.",
    body: "We mentor local FIRST LEGO League teams, including the Brick Blazers (#68951) and the Science Builders (#28780): chassis builds, Spike Prime programming, and presenting their innovation projects. We also helped Wakeland Wolverine Robotics, a first-year FTC team at Wakeland High School, get through its rookie season.",
    screen: { src: "/images/photos/PHOTO-2025-12-13-16-02-01.webp", width: 1600, height: 1200, alt: "Outreach group with a Go Brick Blazers sign" },
    gallery: [],
  },
  {
    slug: "thats-not-peanut-butter",
    title: "That's Not Peanut Butter!",
    year: "2025-2026",
    fill: "fuel",
    excerpt: "A children's book about machine learning that the team is associated with.",
    body: "A children's book about machine learning: Bob loves peanut butter and pickle sandwiches, and his robot friend Rob keeps getting it wrong. Written by Adiv Padgilwar and illustrated by Ananya Ramanan. Profits go to the Gifted Minds Prosper booster club.",
    // Cover from dad in chat (2026-09-15); the booth shot with the book (IMG_3264) sits in the gallery.
    screen: { src: "/images/projects/thats-not-peanut-butter-cover.webp", width: 1000, height: 799, alt: "That's Not Peanut Butter! book cover, created by Adiv Padgilwar, illustrated by Ananya Ramanan" },
    gallery: [...bookPhotos],
  },
  {
    // Added 2026-09-15 at dad's request. Facts: stemseeds.net (fetched
    // 2026-09-15) for what STEMSeeds is; the team's own Mayoral Recognition
    // application (2026-09-07, per the vault) for "hundreds of STEM kits"
    // through the partnership. STEMSeeds' own totals (720 kits, 36 chapters,
    // 6 countries) are the organisation's, not this team's, so they are not
    // claimed here. Photo below from dad, 2026-09-15.
    slug: "stemseeds",
    title: "STEMSeeds",
    year: "Ongoing",
    fill: "sky",
    excerpt: "A partnership with a student-led nonprofit that puts hands-on STEM kits in kids' hands.",
    body: "STEMSeeds is a student-led nonprofit started by Frisco high schoolers. It designs and delivers hands-on STEM activity kits to children, including pediatric patients and kids in underserved communities. Singularity partners with STEMSeeds, and through that partnership we've helped get hundreds of STEM kits to kids.",
    // Photo from dad in chat (2026-09-15): boxed STEM Seeds kits (Paper Rocket, Pom-Pom Catapult, Paper Robotic Hand) with info cards.
    screen: { src: "/images/projects/stemseeds-kits.webp", width: 702, height: 464, alt: "STEM Seeds activity kits boxed up: Paper Rocket, Pom-Pom Catapult and Paper Robotic Hand, with info cards" },
    gallery: [],
  },
  {
    slug: "interviews-from-the-pit",
    title: "Interviews from the pit",
    year: "2025-2026",
    fill: "mint",
    excerpt: "Walking the pits with a camera and a mic at both district events this season.",
    body: "At both district events this season we walked the pits with a camera and a mic and interviewed drivers, captains and mentors from teams across Texas. The interviews are on our Instagram and TikTok.",
    screen: { src: "/images/photos/IMG_6710.webp", width: 1650, height: 2200, alt: "A student being interviewed on camera at competition", fit: "cover" },
    gallery: [
      { src: "/images/photos/IMG_0802.webp", width: 1650, height: 2200, alt: "A student talking with a visitor at an outreach table" },
      ...interviewsPhotos,
    ],
  },
]

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug)
}
