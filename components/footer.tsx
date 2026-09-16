"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const PX_PER_METER = 3780 // 96dpi CSS-pixel approximation of one metre on screen

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Robots", href: "/robots" },
  { title: "Team", href: "/team" },
  { title: "Community", href: "/community" },
  { title: "Sponsors", href: "/sponsors" },
  { title: "Apply", href: "/apply" },
]

export function Footer() {
  const [meters, setMeters] = useState(0)

  useEffect(() => {
    let total = 0
    let last = window.scrollY
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const y = window.scrollY
        total += Math.abs(y - last)
        last = y
        setMeters(total / PX_PER_METER)
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <p className="font-display text-2xl font-extrabold">10032</p>
            <p className="mt-2 max-w-xs text-sm text-paper/70">
              Singularity Robotics, Inc. is a 501(c)(3) nonprofit. FRC Team 10032, Frisco, Texas.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-arcade-fuel">
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-1 text-sm text-paper/70">
            <a href="mailto:admin@singularityfrc.com" className="hover:text-arcade-fuel">
              admin@singularityfrc.com
            </a>
            <a href="https://instagram.com/singularityfrc" className="hover:text-arcade-fuel">
              Instagram @singularityfrc
            </a>
            <a href="https://tiktok.com/@singularityfrc" className="hover:text-arcade-fuel">
              TikTok @singularityfrc
            </a>
            <a href="https://linktr.ee/singularityfrc" className="hover:text-arcade-fuel">
              linktr.ee/singularityfrc
            </a>
            <a href="https://github.com/Singularity10032" className="hover:text-arcade-fuel">
              github.com/Singularity10032
            </a>
            <a href="https://thebluealliance.com/team/10032" className="hover:text-arcade-fuel">
              thebluealliance.com/team/10032
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-paper/20 pt-6 text-xs text-paper/50">
          <span>© 2026 Singularity Robotics, Inc. · 501(c)(3) nonprofit</span>
          <span suppressHydrationWarning>you&apos;ve scrolled {meters.toFixed(1)} m</span>
        </div>
      </div>
    </footer>
  )
}
