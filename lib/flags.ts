// Show the invited Judges' Choice presenters by name. OFF by default.
// ON only when NEXT_PUBLIC_SHOW_JC_SPONSORS is "true", or automatically on a
// Vercel Preview build (VERCEL_ENV === "preview"). Production builds from main
// never show the names unless someone sets the variable on purpose, so a merge
// can't publish unconfirmed company names (dad's rule: no company named until it
// confirms in writing).
export const SHOW_JC_SPONSORS =
  process.env.NEXT_PUBLIC_SHOW_JC_SPONSORS === "true" || process.env.VERCEL_ENV === "preview"

// Logos for the invited Judges' Choice presenters. Shown only when SHOW_JC_SPONSORS is on.
// Sources: Lockheed Martin = Wikimedia Commons "Lockheed Martin logo (2).svg" (public domain);
// Boeing = boeing.com header SVG, recoloured (added 10-08); BAE Systems = Wikimedia Commons (added 10-08);
// Raytheon = Wikimedia Commons "Raytheon (RTX) logo.svg" (public domain; current Raytheon wordmark).
export const JC_LOGOS = [
  { name: "Lockheed Martin", src: "/images/sponsors/lockheed-martin.svg", width: 2132, height: 322 },
  { name: "Raytheon", src: "/images/sponsors/raytheon-rtx.svg", width: 512, height: 153 },
  { name: "Boeing", src: "/images/sponsors/boeing.svg", width: 1419, height: 325 },
  { name: "BAE Systems", src: "/images/sponsors/bae-systems.svg", width: 709, height: 110 },
]
