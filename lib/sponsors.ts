// One sponsor list (dad, 2026-09-15: "put all the sponsors in one, don't do
// past or present"). Logos are the horizontal files dad put in
// Downloads/Singularity/Sponsor graphics, trimmed and flattened onto a plain
// white or black tile. Names come from the previous COPY-DECK list; the
// Dow entry there was actually DoW STEM (Department of War STEM), per the logo
// dad supplied. URLs: the sponsor's own site, found by web search on
// 2026-09-15; LitterLoot has no site on record, so it does not link.
// FIRST (the program) is not a sponsor and was dropped from the list.

export type Sponsor = { name: string; src: string; width: number; height: number; tile: "white" | "black"; url?: string }

export const sponsors: Sponsor[] = [
  { name: "NASA", src: "/images/sponsors/nasa.png", width: 1600, height: 563, tile: "white", url: "https://www.nasa.gov/" },
  { name: "Raytheon", src: "/images/sponsors/raytheon.png", width: 1600, height: 523, tile: "white", url: "https://www.rtx.com/raytheon" },
  { name: "Texas Instruments", src: "/images/sponsors/texas-instruments.png", width: 582, height: 169, tile: "white", url: "https://www.ti.com/" },
  { name: "Gene Haas Foundation", src: "/images/sponsors/gene-haas-foundation.png", width: 470, height: 194, tile: "white", url: "https://www.ghaasfoundation.org/" },
  { name: "DoW STEM", src: "/images/sponsors/dow-stem.png", width: 615, height: 219, tile: "white", url: "https://dowstem.us/" },
  { name: "Bioworld", src: "/images/sponsors/bioworld.png", width: 1088, height: 383, tile: "black", url: "https://www.bioworldmerch.com/" },
  { name: "Mouser Electronics", src: "/images/sponsors/mouser-electronics.svg", width: 1997, height: 771, tile: "white", url: "https://www.mouser.com/" },
  { name: "PGA of America", src: "/images/sponsors/pga-of-america.png", width: 1200, height: 413, tile: "white", url: "https://www.pga.com/" },
  { name: "Corbridge Orthodontics", src: "/images/sponsors/corbridge-orthodontics.png", width: 467, height: 165, tile: "white", url: "https://corbridgeorthodontics.com/" },
  { name: "Raising Cane's", src: "/images/sponsors/raising-canes.png", width: 596, height: 298, tile: "white", url: "https://www.raisingcanes.com/" },
  { name: "Techie Factory", src: "/images/sponsors/techie-factory.png", width: 800, height: 781, tile: "white", url: "https://techiefactory.com/frisco/" },
  { name: "Texas Workforce Commission", src: "/images/sponsors/texas-workforce-commission.png", width: 1200, height: 1200, tile: "white", url: "https://www.twc.texas.gov/" },
  { name: "LitterLoot", src: "/images/sponsors/litterloot.png", width: 936, height: 910, tile: "white" },
]
