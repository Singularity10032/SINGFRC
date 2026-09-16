import type React from "react"
import type { Metadata } from "next"
import { Manrope, Bricolage_Grotesque } from "next/font/google"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Loader } from "@/components/loader"
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
  title: "Singularity Robotics",
  description: "FRC Team 10032, a student-led FIRST Robotics Competition team in Frisco, Texas.",
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
      <body className={`${manrope.variable} ${bricolage.variable} font-sans bg-paper text-ink antialiased`}>
        <SmoothScroll />
        <Loader />
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
