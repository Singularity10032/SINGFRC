"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Real CAD, exported from the team's own Onshape (see CAD-INTEGRATION.md).
 * Uses @google/model-viewer only (this variant has no GSAP — the drag
 * carousel is native pointer + scroll-snap, not GSAP Draggable, so this
 * follows the brief's "unless your variant already has GSAP scroll-scrubbing"
 * branch rather than the r3f exploded-view branch).
 *
 * Lazy: the custom element only registers (and the .glb only starts
 * downloading, via model-viewer's own `loading="lazy"`) once this section is
 * near the viewport, via IntersectionObserver — never on mount.
 */
export function RobotViewer({
  src,
  poster,
  alt,
  subsystems,
  className = "",
}: {
  src: string
  poster: string
  alt: string
  subsystems: string[]
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const modelRef = useRef<HTMLElement & { autoRotate?: boolean }>(null)
  const [ready, setReady] = useState(false)
  const [spinning, setSpinning] = useState(true)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          import("@google/model-viewer").then(() => setReady(true))
          observer.disconnect()
        }
      },
      { rootMargin: "200px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  function toggleSpin() {
    const el = modelRef.current
    if (!el) return
    if (spinning) {
      el.removeAttribute("auto-rotate")
    } else {
      el.setAttribute("auto-rotate", "")
    }
    setSpinning((s) => !s)
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden rounded-[28px] border-2 border-ink/15 ${className}`}>
      {ready ? (
        <model-viewer
          ref={modelRef}
          src={src}
          poster={poster}
          alt={alt}
          camera-controls
          touch-action="pan-y"
          auto-rotate
          rotation-per-second="12deg"
          interaction-prompt="none"
          exposure="1"
          shadow-intensity="0.6"
          environment-image="neutral"
          loading="lazy"
          reveal="auto"
          style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt={alt} className="h-full w-full object-cover" />
      )}

      {ready ? (
        <button
          type="button"
          onClick={toggleSpin}
          className="absolute bottom-4 right-4 rounded-full bg-ink/85 px-4 py-2 text-xs font-semibold text-paper transition-colors hover:bg-ink"
        >
          {spinning ? "stop" : "spin"}
        </button>
      ) : null}

      <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
        {subsystems.map((s) => (
          <span key={s} className="rounded-full bg-paper/90 px-3 py-1 text-[11px] font-semibold text-ink">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
