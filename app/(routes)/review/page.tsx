import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = { title: "Review — engineering photo", robots: { index: false, follow: false } }

// Unlisted review sheet (2026-09-16): candidates for the home "Engineering"
// card. Dad picks a number; this page is not in the nav and gets removed after.
const candidates = [
  { src: "/images/photos/IMG_4527.webp", w: 2200, h: 1467, note: "ORION among fuel balls on the field (unused right now)" },
  { src: "/images/photos/100-0411.webp", w: 2200, h: 1467, note: "nameplate + bumpers close-up (on /robots)" },
  { src: "/images/photos/IMG-6734.webp", w: 2200, h: 1650, note: "nameplate lit (unused)" },
  { src: "/images/photos/IMG-7421.webp", w: 2200, h: 1650, note: "on the cart, wired (unused)" },
  { src: "/images/photos/IMG-2576.webp", w: 1650, h: 2200, note: "on a cart heading to the field (on /robots)" },
  { src: "/images/photos/IMG-1385.webp", w: 1650, h: 2200, note: "bare chassis on the mats (on /robots)" },
  { src: "/images/photos/IMG-3108.webp", w: 1650, h: 2200, note: "scoring at the hub (on /robots)" },
  { src: "/images/photos/IMG-4213.webp", w: 1237, h: 2200, note: "in the pit before a match (on /robots)" },
  { src: "/images/photos/image_3.webp", w: 1280, h: 960, note: "nameplate product shot (leads the /robots wall)" },
  { src: "/images/photos/IMG-9641.webp", w: 2200, h: 1650, note: "student with ORION in the pit (unused)" },
]

export default function ReviewPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl">Engineering photo candidates</h1>
      <p className="mt-2 text-paper/70">Reply with a number. Click for full size.</p>
      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
        {candidates.map((c, i) => (
          <a key={c.src} href={c.src} target="_blank" rel="noreferrer" className="block rounded-xl border-2 border-paper/30 bg-deep p-2">
            <Image src={c.src} alt={c.note} width={c.w} height={c.h} sizes="360px" className="h-auto w-full rounded-lg" />
            <p className="mt-2 font-display text-2xl text-arcade-fuel">#{i + 1}</p>
            <p className="text-xs text-paper/80">{c.note}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
