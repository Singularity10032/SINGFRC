// Sponsor logos and copy verbatim from COPY-DECK.md "Sponsors" section.

export type Logo = { name: string; src: string; width: number; height: number; dark?: boolean }

// `dark: true` marks a logo file that is white-on-transparent (verified by
// sampling pixel data: every opaque pixel is near-white) — invisible on a
// paper tile, so it gets a dark tile instead. Same real bug variant A found
// independently on the same source files.
export const currentSponsors: Logo[] = [
  { name: "NASA", src: "/images/sponsors/nasalogo.png", width: 2000, height: 2000, dark: true },
  { name: "Raytheon", src: "/images/sponsors/raytheon.svg", width: 289, height: 76 },
  { name: "Texas Instruments", src: "/images/sponsors/texasinstruments.png", width: 2301, height: 540, dark: true },
  { name: "Gene Haas Foundation", src: "/images/sponsors/genehaasfoundationlogo.png", width: 381, height: 384, dark: true },
  { name: "Bioworld", src: "/images/sponsors/bioworld.jpg", width: 1088, height: 383 },
  { name: "Mouser Electronics", src: "/images/sponsors/mouserelectronics.svg", width: 1997, height: 771 },
  { name: "LitterLoot", src: "/images/sponsors/litterloot.png", width: 2160, height: 2700 },
  { name: "PGA of America", src: "/images/sponsors/pgaofamerica.png", width: 901, height: 900, dark: true },
  { name: "Corbridge Orthodontics", src: "/images/sponsors/corbridgeorthodontics.svg", width: 626, height: 633 },
]

export const pastSupporters: (Logo | { name: string; src?: undefined })[] = [
  { name: "FIRST", src: "/images/sponsors/frclogo.png", width: 300, height: 244, dark: true },
  { name: "Raising Cane's", src: "/images/sponsors/caneslogo.png", width: 2880, height: 1624, dark: true },
  { name: "Techie Factory", src: "/images/sponsors/techiefactorylogo.png", width: 800, height: 800, dark: true },
  { name: "Texas Workforce Commission", src: "/images/sponsors/texasworkforcecommissionlogo.png", width: 155, height: 151, dark: true },
  { name: "Dow (team registration grant)" },
]
