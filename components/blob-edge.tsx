// A bumpy, cloud-like edge between two page bands (dad's reference,
// 2026-09-15: a flat blue shape with an irregular rounded top over white).
// Flat fill only, no gradient. `fill` is the colour of the band BELOW the
// edge (it bulges up into whatever is above). `flip` turns it into a bottom
// edge: the band above bulges down.
const PATH =
  "M0,90 V55 C30,35 60,30 110,30 H340 C370,30 385,45 400,60 C420,72 480,70 540,66 " +
  "C600,62 640,40 700,36 C760,32 800,48 850,58 C880,64 900,66 930,62 C980,56 1010,40 1080,40 " +
  "C1150,40 1180,55 1230,60 C1280,50 1300,30 1370,28 C1410,27 1430,40 1440,48 V90 Z"

export function BlobEdge({ fill, flip = false, className = "" }: { fill: string; flip?: boolean; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-16 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path d={PATH} fill={fill} />
    </svg>
  )
}

// Palette hexes for the bands (mirrors tailwind.config.js).
export const band = {
  space: "#050507",
  deep: "#111118",
  fuel: "#FFD23F",
  mint: "#BFF0D2",
  sky: "#BFE3FF",
  purple: "#6B2FD6",
} as const
