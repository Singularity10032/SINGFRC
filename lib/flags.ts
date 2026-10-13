// Show the invited Judges' Choice presenters by name. OFF by default.
// ON only when NEXT_PUBLIC_SHOW_JC_SPONSORS is "true", or automatically on a
// Vercel Preview build (VERCEL_ENV === "preview"). Production builds from main
// never show the names unless someone sets the variable on purpose, so a merge
// can't publish unconfirmed company names (dad's rule: no company named until it
// confirms in writing).
export const SHOW_JC_SPONSORS =
  process.env.NEXT_PUBLIC_SHOW_JC_SPONSORS === "true" || process.env.VERCEL_ENV === "preview"

export const JC_INVITED = ["Lockheed Martin", "Raytheon", "Boeing", "BAE Systems"]
