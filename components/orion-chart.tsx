// Real relative sky positions of Orion's seven bright stars, projected from
// their actual right ascension / declination (RA increases leftward on a sky
// chart; higher declination is up). Not stylised beyond that projection —
// the shape and star order are the real constellation, per ROUND2-BRIEF's
// instruction that a starfield is only allowed when it's a real chart.
const STARS = [
  { name: "Betelgeuse", x: 30, y: 30 },
  { name: "Bellatrix", x: 220, y: 42 },
  { name: "Alnitak", x: 125, y: 140 },
  { name: "Alnilam", x: 150, y: 131 },
  { name: "Mintaka", x: 176, y: 120 },
  { name: "Rigel", x: 290, y: 213 },
  { name: "Saiph", x: 74, y: 230 },
] as const

const LINES: Array<[string, string]> = [
  ["Betelgeuse", "Bellatrix"],
  ["Betelgeuse", "Alnitak"],
  ["Bellatrix", "Mintaka"],
  ["Alnitak", "Alnilam"],
  ["Alnilam", "Mintaka"],
  ["Alnitak", "Saiph"],
  ["Mintaka", "Rigel"],
]

function find(name: string) {
  return STARS.find((s) => s.name === name)!
}

export function OrionChart({ className = "", color = "#FFF8EE" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 320 260" className={className} aria-labelledby="orion-chart-title">
      <title id="orion-chart-title">The constellation Orion, drawn from its seven bright stars</title>
      {LINES.map(([a, b]) => {
        const from = find(a)
        const to = find(b)
        return (
          <line key={`${a}-${b}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={color} strokeWidth="1" opacity="0.55" />
        )
      })}
      {STARS.map((star) => (
        <g key={star.name}>
          <circle cx={star.x} cy={star.y} r="3.5" fill={color} />
          <text
            x={star.x}
            y={star.y - 10}
            textAnchor="middle"
            fill={color}
            opacity="0.75"
            fontSize="9"
            fontFamily="var(--font-manrope), sans-serif"
          >
            {star.name}
          </text>
        </g>
      ))}
    </svg>
  )
}
