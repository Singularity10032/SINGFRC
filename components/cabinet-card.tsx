"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Story } from "@/lib/community"

const fillClass = { sky: "bg-arcade-sky", mint: "bg-arcade-mint", fuel: "bg-arcade-fuel" } as const

/** A community story presented as an arcade cabinet: the photo is the
 * "screen"; clicking flips the cabinet to its paragraph and a link in. */
export function CabinetCard({ story }: { story: Story }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="relative h-80 [perspective:1200px]"
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Front: the cabinet screen */}
        <button
          type="button"
          onClick={() => setFlipped(true)}
          aria-label={`Flip to read about ${story.title}`}
          className={`absolute inset-0 flex flex-col overflow-hidden rounded-xl border-2 border-ink shadow-hard text-left text-ink [backface-visibility:hidden] ${fillClass[story.fill]}`}
        >
          <div className="relative flex-1 overflow-hidden border-b-2 border-ink bg-space">
            {story.screen ? (
              <Image
                src={story.screen.src}
                alt={story.screen.alt}
                width={story.screen.width}
                height={story.screen.height}
                sizes="(max-width: 640px) 90vw, 380px"
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="flex h-full items-center justify-center px-4 text-center font-display text-paper/80">
                {story.title}
              </div>
            )}
          </div>
          <div className="p-4">
            <p className="text-xs font-semibold text-ink/60">{story.year}</p>
            <h3 className="font-display text-lg">{story.title}</h3>
          </div>
        </button>

        {/* Back: the paragraph */}
        <div
          className={`absolute inset-0 flex flex-col justify-between overflow-y-auto rounded-xl border-2 border-ink p-5 text-ink [backface-visibility:hidden] ${fillClass[story.fill]}`}
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="font-display text-lg">{story.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">{story.excerpt}</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <button type="button" onClick={() => setFlipped(false)} className="text-sm font-semibold underline">
              Back
            </button>
            <Link href={`/community/${story.slug}`} className="btn-pill bg-paper text-ink">
              Read more
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
