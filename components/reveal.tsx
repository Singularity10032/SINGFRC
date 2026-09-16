"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

const OFFSETS: Record<string, { x?: number; y?: number }> = {
  up: { y: 12 },
  down: { y: -12 },
  left: { x: 12 },
  right: { x: -12 },
  none: {},
}

/**
 * Reveals children as they scroll into view: fade + a small slide, per the
 * shared motion budget (from y 12 / opacity .6, never opacity 0 parked at
 * rest for non-JS or reduced-motion visitors).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}) {
  const reduced = useReducedMotion()
  const offset = OFFSETS[direction]

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.6, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.5, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
