import type React from "react"
import type { Metadata } from "next"
import { Manrope, Bricolage_Grotesque } from "next/font/google"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Loader } from "@/components/loader"
import { Starfield } from "@/components/starfield"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
})

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "800"],
  display: "swap",
  variable: "--font-bricolage",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.singularity-frc.com"),
  title: "Singularity Robotics | FRC Team 10032 | Frisco, Texas Robotics Team",
  description:
    "Singularity Robotics (FRC 10032) is a Frisco, Texas FIRST Robotics team. 5 awards in our first 2 seasons, including the 2026 Fort Worth district win.",
  appleWebApp: {
    title: "Singularity",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${bricolage.variable} font-sans bg-space text-paper antialiased`}>
        <SmoothScroll />
        <Starfield />
        <Loader />
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
