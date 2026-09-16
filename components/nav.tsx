"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Robots", href: "/robots" },
  { title: "Team", href: "/team" },
  { title: "Community", href: "/community" },
  { title: "Gallery", href: "/gallery" },
  { title: "Sponsors", href: "/sponsors" },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-paper/20 bg-space">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Wordmark (dad, 2026-09-15: use the S1NGULARITY mark top-left). White
              cut from the team's own Algae Abyss title screen; the purple paste
              was never received as a file. Carries "10032" itself. */}
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <Image
              src="/images/singularity-wordmark.png"
              alt="10032 Singularity"
              width={334}
              height={108}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-[15px] font-semibold transition-colors ${
                    active ? "bg-paper text-ink" : "hover:bg-paper/10"
                  }`}
                >
                  {item.title}
                </Link>
              )
            })}
            <Link href="/apply" className="btn-pill ml-2 bg-arcade-purple text-paper">
              Apply
            </Link>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="btn-pill h-11 w-11 bg-paper p-0 text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-6 bg-arcade-purple px-8 pt-16 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl font-extrabold text-paper"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Link
                href="/apply"
                onClick={() => setOpen(false)}
                className="btn-pill mt-2 inline-flex bg-arcade-fuel text-ink"
              >
                Apply
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
