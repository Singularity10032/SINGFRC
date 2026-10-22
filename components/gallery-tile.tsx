import Image from "next/image"
import Link from "next/link"
import { winPhotos, teamPhotos, houston2025Photos, funPhotos, buildPhotos } from "@/lib/gallery"

// Every photo on /gallery, in the same order as that page.
const galleryPhotos = [...winPhotos, ...teamPhotos, ...houston2025Photos, ...funPhotos, ...buildPhotos]

/** The gallery as one wide tile on /community (dad, 2026-10-21): a slow
 * scrolling strip of every gallery photo; the whole tile opens /gallery. */
export function GalleryTile() {
  return (
    <Link
      href="/gallery"
      aria-label="Open the photo gallery"
      className="group block overflow-hidden rounded-xl border-2 border-ink bg-arcade-fuel text-ink shadow-hard"
    >
      <div className="overflow-hidden border-b-2 border-ink bg-space py-3">
        <div className="flex w-max gap-3 gallery-track">
          {[...galleryPhotos, ...galleryPhotos].map((p, i) => (
            <Image
              key={i}
              src={p.src}
              alt={i < galleryPhotos.length ? p.alt : ""}
              aria-hidden={i >= galleryPhotos.length || undefined}
              width={p.width}
              height={p.height}
              sizes="320px"
              className="h-48 w-auto shrink-0 rounded-lg border-2 border-paper/20 object-cover sm:h-64"
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 p-4">
        <div>
          <p className="text-xs font-semibold text-ink/60">2025-2026</p>
          <h3 className="font-display text-lg">Gallery</h3>
        </div>
        <span className="btn-pill bg-paper text-ink transition-transform group-hover:translate-x-1">See all photos</span>
      </div>
    </Link>
  )
}
