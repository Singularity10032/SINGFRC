"use client"

import { useEffect, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"

// True once the clock passes `at`. False on the server and first paint, then
// set in the browser, so there is no hydration mismatch (same as Countdown).
// In local dev, ?preview=live forces it on; that switch is dead in production.
function useReleased(at: string) {
  const target = new Date(at).getTime()
  const [released, setReleased] = useState(false)

  useEffect(() => {
    const forced =
      process.env.NODE_ENV !== "production" &&
      new URLSearchParams(window.location.search).get("preview") === "live"
    const wait = target - Date.now()
    if (forced || wait <= 0) {
      setReleased(true)
      return
    }
    const id = setTimeout(() => setReleased(true), wait)
    return () => clearTimeout(id)
  }, [target])

  return released
}

// Shows `before` until the release instant, then `children`. Nothing secret
// goes in either one: both are sent to the browser.
export function AfterRelease({ at, before = null, children }: { at: string; before?: ReactNode; children: ReactNode }) {
  return <>{useReleased(at) ? children : before}</>
}

// Sits on the locked game page. At the release instant it asks the server for
// the page again, and keeps asking for two minutes in case the two clocks
// disagree by a few seconds.
export function RefreshAtRelease({ at }: { at: string }) {
  const router = useRouter()
  const released = useReleased(at)

  useEffect(() => {
    if (!released) return
    router.refresh()
    let tries = 0
    const id = setInterval(() => {
      tries += 1
      router.refresh()
      if (tries >= 24) clearInterval(id)
    }, 5000)
    return () => clearInterval(id)
  }, [released, router])

  return null
}
