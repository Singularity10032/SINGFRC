import { StickerPhoto } from "@/components/sticker-photo"
import { Reveal } from "@/components/reveal"
import type { Photo } from "@/lib/gallery"

const COLS: Record<2 | 3 | 4, string> = {
  2: "sm:columns-2",
  3: "sm:columns-3",
  4: "sm:columns-4",
}

/** A wall of sticker-framed photos in a column flow. Every photo keeps its
 *  own aspect ratio; tilt alternates by index like the rest of the site. */
export function PhotoWall({
  photos,
  cols = 3,
  startIndex = 0,
  className = "",
}: {
  photos: Photo[]
  cols?: 2 | 3 | 4
  startIndex?: number
  className?: string
}) {
  return (
    <div className={`columns-2 gap-4 ${COLS[cols]} ${className}`}>
      {photos.map((p, i) => (
        <div key={p.src} className="mb-4 break-inside-avoid">
          <Reveal delay={(i % 6) * 40}>
            <StickerPhoto
              src={p.src}
              width={p.width}
              height={p.height}
              alt={p.alt}
              index={startIndex + i}
              className="w-full"
              sizes="(max-width: 640px) 45vw, 360px"
            />
          </Reveal>
        </div>
      ))}
    </div>
  )
}
