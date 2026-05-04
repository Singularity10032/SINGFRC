"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

// Update the navItems array to ensure all links point to the correct routes
const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Team", href: "/team" },
  { title: "Community", href: "/community" },
  { title: "Sponsors", href: "/sponsors" },
  { title: "Apply", href: "/apply" },
  { title: "Blog", href: "/blog" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  // Prevent scrolling when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <>
      <div className="fixed w-full z-50 bg-transparent backdrop-blur-sm supports-[backdrop-filter]:bg-transparent">
        <div className="relative">
          <nav className="flex h-14 sm:h-16 items-center px-3 sm:px-8">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/images/singularity-logo.png"
                alt="Singularity Logo"
                width={28}
                height={28}
                className="rounded-full sm:w-8 sm:h-8"
              />
              <span className="text-xs sm:text-sm text-purple-100/90">Singularity Robotics</span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="ml-auto hidden md:block">
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-sm text-purple-100/90 hover:text-purple-400 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-purple-500 after:transition-all after:duration-300"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="ml-auto inline-flex items-center justify-center p-2 rounded-md text-purple-100 md:hidden hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </nav>

          {/* Mobile menu, show/hide based on menu state */}
          <div
            className={cn(
              "fixed inset-0 z-50 bg-black/95 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out",
              mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            style={{ top: "3.5rem" }}
          >
            <div className="flex flex-col px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-3 py-4 text-base font-medium text-purple-100/90 hover:text-purple-400 border-b border-purple-900/20 transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity md:hidden",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setMobileMenuOpen(false)}
      />
    </>
  )
}

