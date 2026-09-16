/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-bricolage)", "sans-serif"],
      },
      colors: {
        // Dark space mode (dad, 2026-09-15): two flat navies for the page,
        // cream for type and photo mats, the arcade accents unchanged so the
        // pop of colour is the same as the light version. No gradients, no glow.
        space: "#050507",
        deep: "#111118",
        paper: "#FFF8EE",
        ink: "#151515",
        arcade: {
          purple: "#6B2FD6",
          fuel: "#FFD23F",
          bumper: "#E0332B",
          sky: "#BFE3FF",
          mint: "#BFF0D2",
        },
      },
    },
  },
  plugins: [],
}
