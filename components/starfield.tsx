"use client"

import { useEffect, useRef } from "react"

// Site-wide star background (dad, 2026-09-15: "make it black maybe with stars").
// Flat cream dots on the near-black page colour, no glow, no gradient — the
// arcade idiom is hard edges. Positions come from a seeded generator so the
// field is the same on every load; ~1 in 5 stars breathes slowly, the rest
// hold still. Under prefers-reduced-motion nothing moves.
const PAPER = "255, 248, 238"
const DENSITY = 1 / 9000 // stars per CSS pixel²

function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Star = { x: number; y: number; r: number; a: number; phase: number; twinkle: boolean }

export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let stars: Star[] = []
    let raf = 0
    let w = 0
    let h = 0

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const rand = mulberry32(10032)
      const count = Math.floor(w * h * DENSITY)
      stars = Array.from({ length: count }, () => {
        const tier = rand()
        return {
          x: rand() * w,
          y: rand() * h,
          r: tier > 0.94 ? 1.6 : tier > 0.7 ? 1.1 : 0.7,
          a: tier > 0.94 ? 0.9 : tier > 0.7 ? 0.7 : 0.45,
          phase: rand() * Math.PI * 2,
          twinkle: rand() < 0.2,
        }
      })
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        const alpha = s.twinkle && !reduced ? s.a * (0.55 + 0.45 * Math.sin(t / 1400 + s.phase)) : s.a
        ctx.fillStyle = `rgba(${PAPER}, ${alpha})`
        ctx.fillRect(s.x - s.r, s.y - s.r, s.r * 2, s.r * 2)
      }
    }

    const loop = (t: number) => {
      draw(t)
      raf = requestAnimationFrame(loop)
    }

    build()
    if (reduced) draw(0)
    else raf = requestAnimationFrame(loop)

    const onResize = () => {
      build()
      if (reduced) draw(0)
    }
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
}
