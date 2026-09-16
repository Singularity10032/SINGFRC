"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const W = 320
const H = 200
const DURATION = 15 // seconds
const CATCHER_W = 40
const CATCHER_H = 14
const CATCHER_SPEED = 220 // px/sec
const BALL_R = 6
const SPAWN_EVERY = 0.55 // seconds

type Ball = { x: number; y: number; speed: number }

/**
 * The one playable moment on the site: catch falling fuel balls with ORION
 * for 15 seconds. Keyboard (arrows or A/D), or drag on touch. Never starts
 * on its own, never blocks the rest of the page — it's one section.
 */
export function FuelCatch() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [phase, setPhase] = useState<"idle" | "playing" | "done">("idle")
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(DURATION)

  // Mutable game state that doesn't need to trigger re-renders.
  const stateRef = useRef({
    catcherX: W / 2 - CATCHER_W / 2,
    balls: [] as Ball[],
    keys: { left: false, right: false },
    spawnTimer: 0,
    score: 0,
    elapsed: 0,
    raf: 0,
    last: 0,
  })

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    const s = stateRef.current
    ctx.clearRect(0, 0, W, H)
    ctx.fillStyle = "#FFF8EE"
    ctx.fillRect(0, 0, W, H)

    // catcher (ORION, simplified): purple body, ink outline, yellow eye.
    ctx.fillStyle = "#6B2FD6"
    ctx.strokeStyle = "#151515"
    ctx.lineWidth = 2
    const cy = H - 24
    ctx.beginPath()
    ctx.roundRect(s.catcherX, cy, CATCHER_W, CATCHER_H, 4)
    ctx.fill()
    ctx.stroke()
    ctx.fillStyle = "#FFD23F"
    ctx.fillRect(s.catcherX + CATCHER_W / 2 - 4, cy + 4, 8, 4)

    // fuel balls
    for (const b of s.balls) {
      ctx.beginPath()
      ctx.fillStyle = "#FFD23F"
      ctx.strokeStyle = "#151515"
      ctx.lineWidth = 1.5
      ctx.arc(b.x, b.y, BALL_R, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
    }
  }, [])

  const loop = useCallback(
    (t: number) => {
      const s = stateRef.current
      if (!s.last) s.last = t
      const dt = Math.min((t - s.last) / 1000, 0.05)
      s.last = t
      s.elapsed += dt

      if (s.keys.left) s.catcherX -= CATCHER_SPEED * dt
      if (s.keys.right) s.catcherX += CATCHER_SPEED * dt
      s.catcherX = Math.max(0, Math.min(W - CATCHER_W, s.catcherX))

      s.spawnTimer -= dt
      if (s.spawnTimer <= 0) {
        s.spawnTimer = SPAWN_EVERY
        s.balls.push({ x: 10 + Math.random() * (W - 20), y: -BALL_R, speed: 60 + Math.random() * 60 })
      }

      const cy = H - 24
      s.balls = s.balls.filter((b) => {
        b.y += b.speed * dt
        const caught = b.y + BALL_R >= cy && b.y - BALL_R <= cy + CATCHER_H && b.x >= s.catcherX && b.x <= s.catcherX + CATCHER_W
        if (caught) {
          s.score += 1
          setScore(s.score)
          return false
        }
        return b.y < H + BALL_R
      })

      const ctx = canvasRef.current?.getContext("2d")
      if (ctx) draw(ctx)

      const remaining = Math.max(0, DURATION - s.elapsed)
      setTimeLeft(Math.ceil(remaining))

      if (remaining <= 0) {
        setPhase("done")
        return
      }
      s.raf = requestAnimationFrame(loop)
    },
    [draw],
  )

  function start() {
    const s = stateRef.current
    s.catcherX = W / 2 - CATCHER_W / 2
    s.balls = []
    s.spawnTimer = 0
    s.score = 0
    s.elapsed = 0
    s.last = 0
    setScore(0)
    setTimeLeft(DURATION)
    setPhase("playing")
  }

  // Idle frame: draw ORION parked with a few resting fuel balls, so the
  // canvas isn't a blank rectangle before the visitor presses play.
  useEffect(() => {
    if (phase !== "idle") return
    const s = stateRef.current
    const cy = H - 24
    s.balls = [
      { x: 60, y: cy - BALL_R, speed: 0 },
      { x: 150, y: cy - BALL_R, speed: 0 },
      { x: 250, y: cy - BALL_R, speed: 0 },
    ]
    const ctx = canvasRef.current?.getContext("2d")
    if (ctx) draw(ctx)
  }, [phase, draw])

  useEffect(() => {
    if (phase !== "playing") return
    const s = stateRef.current
    s.raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(s.raf)
  }, [phase, loop])

  useEffect(() => {
    if (phase !== "playing") return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") stateRef.current.keys.left = true
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") stateRef.current.keys.right = true
    }
    function onKeyUp(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") stateRef.current.keys.left = false
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") stateRef.current.keys.right = false
    }
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keyup", onKeyUp)
    }
  }, [phase])

  function handlePointer(clientX: number) {
    const canvas = canvasRef.current
    if (!canvas || phase !== "playing") return
    const rect = canvas.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * W
    stateRef.current.catcherX = Math.max(0, Math.min(W - CATCHER_W, x - CATCHER_W / 2))
  }

  return (
    <div className="relative mx-auto w-full max-w-[360px] select-none">
      <div className="sticker-frame relative overflow-hidden" style={{ rotate: "-1deg" as any }}>
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="block w-full touch-none rounded-[6px]"
          style={{ aspectRatio: `${W} / ${H}` }}
          onTouchMove={(e) => handlePointer(e.touches[0].clientX)}
          onMouseMove={(e) => e.buttons === 1 && handlePointer(e.clientX)}
        />

        {phase !== "playing" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/80 text-paper">
            {phase === "done" && (
              <p className="font-display text-3xl font-extrabold tabular-nums">{score} caught</p>
            )}
            <button type="button" onClick={start} className="btn-pill bg-arcade-fuel text-ink">
              {phase === "done" ? "Play again" : "Play"}
            </button>
            {phase === "idle" && <p className="text-xs text-paper/70">arrows / a·d, or drag</p>}
          </div>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between px-1 text-sm font-semibold">
        <span className="font-display tabular-nums">{score}</span>
        <span className="tabular-nums text-ink/60">{timeLeft}s</span>
      </div>
    </div>
  )
}
