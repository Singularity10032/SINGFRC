// A tiny 16x16 pixel-art ORION mark: purple body, ink outline, yellow eye
// band, red bumper stripe. Decorative brand mark, not a claim about the
// real robot (see /robots for the real CAD facts).

const SIZE = 16

function cellColor(row: number, col: number): string | null {
  const inBody = row >= 2 && row <= 13 && col >= 2 && col <= 13
  const isAntenna = row <= 1 && col === 8
  if (isAntenna) return "#151515"
  if (!inBody) return null

  const isBorder = row === 2 || row === 13 || col === 2 || col === 13
  const isEye = row >= 5 && row <= 6 && col >= 6 && col <= 9
  const isBumper = row >= 11 && row <= 12 && col >= 3 && col <= 12

  if (isEye) return "#FFD23F"
  if (isBumper) return "#E0332B"
  if (isBorder) return "#151515"
  return "#6B2FD6"
}

export function OrionSprite({ className = "", size = 96 }: { className?: string; size?: number }) {
  const cells: { row: number; col: number; color: string }[] = []
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      const color = cellColor(row, col)
      if (color) cells.push({ row, col, color })
    }
  }

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="ORION, the team's robot, as a pixel sprite"
      shapeRendering="crispEdges"
    >
      {cells.map((cell) => (
        <rect key={`${cell.row}-${cell.col}`} x={cell.col} y={cell.row} width={1} height={1} fill={cell.color} />
      ))}
    </svg>
  )
}
