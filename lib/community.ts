// Community stories, verbatim from COPY-DECK.md "Community" section.
// Photos only from PHOTO-MANIFEST.md / public/images — never invented.
// 2026-09-15: galleries extended from lib/gallery.ts (the Slack + local pull).

import { fuelfrenzyPhotos, algaePhotos, interviewsPhotos, bookPhotos } from "@/lib/gallery"

// `fit: "cover"` lets a portrait screen fill the cabinet instead of letterboxing (dad, 2026-09-15, interviews).
// `focus` is the CSS object-position for a cover fit, so the crop lands on the subject.
export type CommunityPhoto = { src: string; width: number; height: number; alt: string; fit?: "cover" | "contain"; focus?: string }

export type Story = {
  slug: string
  title: string
  year: string
  fill: "sky" | "mint" | "fuel"
  excerpt: string
  body: string
  screen?: CommunityPhoto
  gallery: CommunityPhoto[]
  /** Receipt-style figures shown under the body (2026-09-16). */
  stats?: { value: string; label: string }[]
  /** Outbound links shown as pills under the body (2026-09-16). */
  links?: { label: string; url: string }[]
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
    body: "For the second year we've partnered with Frisco Ignite to run hands-on STEAM workshops for local elementary students. In our first season we reached over 600 K-5 students through bi-monthly workshops: science concepts, mini engineering challenges, and a lot of marble runs. Frisco Ignite holds a City of Frisco Certificate of Recognition, signed by Mayor Jeff Cheney.",
    // The Mayoral Recognition photo leads the story (dad, 2026-09-16): the close
    // frame from the 09/29 album where the certificate is legible ("The City of
    // Frisco · Certificate of Recognition · Frisco Ignite", Jeff Cheney, Mayor).
    // IMG_1908 was the same moment framed wider, so it is replaced, not repeated.
    screen: { src: "/images/projects/ignite-mayoral-recognition.webp", width: 2200, height: 1467, alt: "Two Frisco Ignite leads holding the City of Frisco Certificate of Recognition signed by Mayor Jeff Cheney" },
    gallery: [
      { src: "/images/photos/IMG_1796.webp", width: 2200, height: 1467, alt: "Young kids doing a water and bottle STEM activity" },
      // PHOTO-2025-12-13 (Brick Blazers sign) is the FLL/FTC story's screen; not repeated here.
      // 15 from the "ignite 09/29" Google Photos album dad shared (2026-09-16), full size.
      { src: "/images/projects/ignite-2026-09-29-040.webp", width: 2200, height: 1467, alt: "The Frisco Ignite workshop welcome screen" },
      { src: "/images/projects/ignite-2026-09-29-050.webp", width: 2200, height: 1467, alt: "Volunteers helping kids build a snap circuit" },
      { src: "/images/projects/ignite-2026-09-29-056.webp", width: 2200, height: 1467, alt: "Kids at the circuit table with a Singularity volunteer" },
      { src: "/images/projects/ignite-2026-09-29-062.webp", width: 2200, height: 1467, alt: "Building a paper tower" },
      { src: "/images/projects/ignite-2026-09-29-082.webp", width: 2200, height: 1467, alt: "Kids gathered around the water-bin experiment" },
      { src: "/images/projects/ignite-2026-09-29-088.webp", width: 2200, height: 1467, alt: "Safety glasses on, watching the reaction" },
      { src: "/images/projects/ignite-2026-09-29-115.webp", width: 2200, height: 1467, alt: "The elephant-toothpaste bottles going off" },
      { src: "/images/projects/ignite-2026-09-29-118.webp", width: 2200, height: 1467, alt: "Kids watching the foam erupt" },
      { src: "/images/projects/ignite-2026-09-29-132.webp", width: 2200, height: 1467, alt: "A harp demonstration for the kids" },
      { src: "/images/projects/ignite-2026-09-29-165.webp", width: 2200, height: 1467, alt: "A volunteer guiding kids through the bottle experiment" },
      { src: "/images/projects/ignite-2026-09-29-181.webp", width: 2200, height: 1467, alt: "A boy wiring his snap circuit" },
      { src: "/images/projects/ignite-2026-09-29-186.webp", width: 2200, height: 1467, alt: "Kids with their finished paper towers" },
      { src: "/images/projects/ignite-2026-09-29-246.webp", width: 2200, height: 1467, alt: "Kids seated for the workshop talk" },
      { src: "/images/projects/ignite-2026-09-29-254.webp", width: 2200, height: 1467, alt: "Volunteers presenting the science segment" },
      { src: "/images/projects/ignite-2026-09-29-270.webp", width: 2200, height: 1467, alt: "The technology segment, kids seated in front of the screen" },
    ],
  },
  {
    slug: "fll-ftc-mentorship",
    title: "FLL and FTC mentorship",
    year: "2025-2026",
    fill: "sky",
    excerpt: "Mentoring FIRST LEGO League teams and a first-year FTC team through their rookie season.",
    // Body expanded 2026-09-16 from the team's own season magazine (pp. 11 and
    // 13): the Techie Factory partnership and Wakeland's rookie-season results
    // are quoted from there. Photos: magazine pp. 11/13 plus the team's public
    // Drive folder "Competition Pictures" (league tournament, Meet 3, semi-regional).
    body: "We mentor local FIRST LEGO League teams, including the Brick Blazers (#68951) and the Science Builders (#28780): chassis builds, Spike Prime programming, and coaching them to present their innovation projects with confidence. We also partnered with Techie Factory, a local STEM organization, trading student volunteers for their FLL programs for sponsorship. And we helped Wakeland Wolverine Robotics (#33791), a first-year FTC team at Wakeland High School, through its rookie season: 2nd place in qualifications at Waco (5-0-0), 4.20 ranking points, two Control Awards, Winning Alliance at the 2025-2026 North Texas Dallas Semi-Regional Championship, 2nd alliance captains in their second competition, and second runner-up at UIL State. We didn't win those; Wakeland did. But when students invest in other students, this is what happens. We also mentor CircuitForge (#36923), another FTC team.",
    links: [{ label: "wolverine-robotics.com", url: "https://www.wolverine-robotics.com/" }],
    screen: { src: "/images/photos/PHOTO-2025-12-13-16-02-01.webp", width: 1600, height: 1200, alt: "Outreach group with a Go Brick Blazers sign" },
    gallery: [
      // FTC photos removed at dad's request (2026-09-16); the two FLL photos
      // sit side by side. The Brick Blazers shot is also the card's screen; the
      // story page hides its top image when the gallery already contains it.
      { src: "/images/photos/PHOTO-2025-12-13-16-02-01.webp", width: 1600, height: 1200, alt: "Outreach group with a Go Brick Blazers sign" },
      { src: "/images/projects/fll-table-mentoring.webp", width: 800, height: 571, alt: "Mentoring an FLL team at the competition table" },
    ],
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
    gallery: [
      ...bookPhotos,
      // From the season magazine, p. 12.
      { src: "/images/projects/book-on-shelf.webp", width: 1644, height: 1123, alt: "That's Not Peanut Butter! on a bookstore shelf" },
      { src: "/images/projects/book-inside-pages.webp", width: 2080, height: 1141, alt: "Inside the book: Bob and Rob work through a training set" },
    ],
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
    body: "STEMSeeds is a student-led 501(c)(3) started by Frisco high schoolers that delivers hands-on STEM kits to hospitalized pediatric patients and kids in underserved communities. Each kit has a Paper Rocket, a Pom-Pom Catapult and a Paper Robotic Hand. Singularity partners with and helps oversee STEMSeeds; it has been recognized by the Mayors of Frisco and Mansfield, and works with hospitals across DFW including Children's Health, Scottish Rite, Medical City, Cook Children's and the American Red Cross.",
    // Figures below are STEMSeeds' own totals as listed on the team resume
    // (Drive doc "Team Resume - Singularity #10032"); dad asked for all of them (2026-09-16).
    stats: [
      { value: "685+", label: "STEM kits delivered worldwide" },
      { value: "36", label: "chapters, including India, Bangladesh, Canada, the Philippines, China and Sweden" },
      { value: "$5.2K", label: "raised" },
      { value: "2", label: "Mayoral Recognitions (Frisco and Mansfield)" },
    ],
    links: [{ label: "stemseeds.net", url: "https://stemseeds.net/" }],
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
    screen: { src: "/images/photos/IMG_6710.webp", width: 1650, height: 2200, alt: "A student being interviewed on camera at competition", fit: "cover", focus: "55% 42%" },
    links: [{ label: "Watch on Instagram", url: "https://www.instagram.com/singularityfrc/" }],
    gallery: [
      { src: "/images/photos/IMG_0802.webp", width: 1650, height: 2200, alt: "A student talking with a visitor at an outreach table" },
      ...interviewsPhotos,
    ],
  },
]

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug)
}
