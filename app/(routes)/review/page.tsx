import type { Metadata } from "next"
import Image from "next/image"
import { pitPhotos } from "@/lib/gallery"

export const metadata: Metadata = { title: "Review — pit/practice photos", robots: { index: false, follow: false } }

// Unlisted review sheet for dad (2026-09-15): every photo from the former
// "Pits, practice, stands" group, numbered, full size on click. He picks the
// keepers for an "Us having fun" section; this page is not in the nav.
export default function ReviewPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl">Review: former "Pits, practice, stands" ({pitPhotos.length})</h1>
      <p className="mt-2 text-paper/70">Tell me the numbers to keep for "Us having fun". Click any photo for full size.</p>
      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {pitPhotos.map((p, i) => (
          <a key={p.src} href={p.src} target="_blank" rel="noreferrer" className="block">
            <div className="rounded-xl border-2 border-paper/30 bg-deep p-2">
              <Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes="300px" className="h-auto w-full rounded-lg" />
              <p className="mt-2 font-display text-2xl text-arcade-fuel">#{i + 1}</p>
              <p className="text-xs text-paper/60">{p.src.split("/").pop()}</p>
              <p className="text-xs text-paper/80">{p.alt}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
