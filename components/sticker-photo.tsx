"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const TILT_STEPS = [-2, 1.4, -1.1, 2, -1.6, 1.8]

export function StickerPhoto({
  src,
  alt,
  width,
  height,
  index = 0,
  className = "",
  sizes = "(max-width: 640px) 90vw, 320px",
  priority = false,
}: {
  src: string
  alt: string
  width: number
  height: number
  index?: number
  className?: string
  sizes?: string
  priority?: boolean
}) {
  const tilt = TILT_STEPS[index % TILT_STEPS.length]

  return (
    <motion.div
      className={`sticker-frame overflow-hidden ${className}`}
      style={{ rotate: tilt }}
      whileHover={{ rotate: 0 }}
      whileTap={{ rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="block h-full w-full rounded-[6px] object-cover"
      />
    </motion.div>
  )
}
