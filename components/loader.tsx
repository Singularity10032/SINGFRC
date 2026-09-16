"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { OrionSprite } from "./orion-sprite"

const SEEN_KEY = "orion-loader-seen"

/** Two-tone synthesized "coin" clink. No audio asset, no music. Fails silently
 *  if the browser blocks autoplaying audio (most will, and that's fine). */
function playCoinClink() {
  try {
    const Ctx = window.AudioContext || (window as any).webkitAudioContext
    if (!Ctx) return
    const ctx = new Ctx()
    const now = ctx.currentTime
    ;[880, 1320].forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = "square"
      osc.frequency.value = freq
      gain.gain.setValueAtTime(0.05, now + i * 0.06)
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.12)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(now + i * 0.06)
      osc.stop(now + i * 0.06 + 0.13)
    })
    setTimeout(() => ctx.close(), 400)
  } catch {
    // silently skip; the visual clink still reads fine without sound
  }
}

export function Loader() {
  const reduced = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const [wiping, setWiping] = useState(false)

  useEffect(() => {
    if (reduced) return
    const seen = sessionStorage.getItem(SEEN_KEY)
    if (seen) return

    setVisible(true)
    const clink = setTimeout(playCoinClink, 300)
    const wipe = setTimeout(() => setWiping(true), 650)
    const done = setTimeout(finish, 950)

    return () => {
      clearTimeout(clink)
      clearTimeout(wipe)
      clearTimeout(done)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced])

  function finish() {
    sessionStorage.setItem(SEEN_KEY, "true")
    setVisible(false)
  }

  if (reduced || !visible) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          role="status"
          aria-label="Loading"
          onClick={finish}
          className="fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center gap-4 bg-paper"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 340, damping: 16 }}
          >
            <OrionSprite size={72} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="font-display text-sm font-extrabold tracking-tight text-ink"
          >
            insert coin
          </motion.p>

          <AnimatePresence>
            {wiping && (
              <motion.div
                key="wipe"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
                className="fixed inset-0 z-[101] bg-arcade-purple"
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
