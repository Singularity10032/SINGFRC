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
