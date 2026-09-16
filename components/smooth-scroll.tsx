"use client"

import { useEffect } from "react"
import Lenis from "lenis"

/**
 * Mounts Lenis for scroll feel. Renders nothing. Skipped entirely when the
 * visitor has requested reduced motion, so native scroll (and screen-reader
 * scroll behavior) is untouched.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    let frame: number
    function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return null
}
