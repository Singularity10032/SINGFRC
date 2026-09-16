// Sponsor logos and copy verbatim from COPY-DECK.md "Sponsors" section.

export type Logo = { name: string; src: string; width: number; height: number }

export const currentSponsors: Logo[] = [
  { name: "NASA", src: "/images/sponsors/nasalogo.png", width: 2000, height: 2000 },
  { name: "Raytheon", src: "/images/sponsors/raytheon.svg", width: 289, height: 76 },
  { name: "Texas Instruments", src: "/images/sponsors/texasinstruments.png", width: 2301, height: 540 },
  { name: "Gene Haas Foundation", src: "/images/sponsors/genehaasfoundationlogo.png", width: 381, height: 384 },
  { name: "Bioworld", src: "/images/sponsors/bioworld.jpg", width: 1088, height: 383 },
  { name: "Mouser Electronics", src: "/images/sponsors/mouserelectronics.svg", width: 1997, height: 771 },
  { name: "LitterLoot", src: "/images/sponsors/litterloot.png", width: 2160, height: 2700 },
  { name: "PGA of America", src: "/images/sponsors/pgaofamerica.png", width: 901, height: 900 },
  { name: "Corbridge Orthodontics", src: "/images/sponsors/corbridgeorthodontics.svg", width: 626, height: 633 },
]

export const pastSupporters: (Logo | { name: string; src?: undefined })[] = [
  { name: "FIRST", src: "/images/sponsors/frclogo.png", width: 300, height: 244 },
  { name: "Raising Cane's", src: "/images/sponsors/caneslogo.png", width: 2880, height: 1624 },
  { name: "Techie Factory", src: "/images/sponsors/techiefactorylogo.png", width: 800, height: 800 },
  { name: "Texas Workforce Commission", src: "/images/sponsors/texasworkforcecommissionlogo.png", width: 155, height: 151 },
  { name: "Dow (team registration grant)" },
]
