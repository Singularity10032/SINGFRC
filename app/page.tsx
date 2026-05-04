"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import {
  Users,
  Calendar,
  Trophy,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Code,
  Lightbulb,
  ExternalLink,
  Star,
  Instagram,
  FileText,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { OptimizedImage } from "@/components/optimized-image"

const teamGallery = [
  {
    src: "/images/teampicture.webp",
    alt: "Singularity Robotics team during the 2024-2025 preseason",
    caption: "24'-25' Preseason",
  },
  {
    src: "/images/fort-worth-2025-2026.png",
    alt: "Singularity Robotics team at Fort Worth",
    caption: "Fort Worth - 25'/26'",
  },
  {
    src: "/images/dripping-springs-2025-2026.png",
    alt: "Singularity Robotics team at Dripping Springs",
    caption: "Dripping Springs - 25'/26'",
  },
]

export default function Home() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const activeGalleryPhoto = teamGallery[activeGalleryIndex]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveGalleryIndex((currentIndex) => (currentIndex + 1) % teamGallery.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0118] text-purple-100">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black h-screen flex items-center justify-center">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(6)-4jsNQI5UhqgtGSbqfS0B8cTcCPRhTm.png')] bg-contain bg-center bg-no-repeat opacity-30 animate-pulse scale-75" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/50 to-black" />

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">
            <div className="text-center space-y-8">
              {/* Main heading with animated gradient */}
              <div className="relative">
                <div className="absolute -inset-x-20 top-1/2 transform -translate-y-1/2">
                  <div className="w-full h-20 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-2xl" />
                </div>
                <h1 className="relative text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                  <div className="relative inline-block">
                    <span className="block text-purple-400 transform hover:scale-105 transition-transform cursor-default">
                      1 TEAM
                    </span>
                    <Sparkles className="absolute -top-6 -right-6 w-8 h-8 text-purple-400 animate-pulse" />
                  </div>
                  <span className="block text-purple-300 mt-2 transform hover:scale-105 transition-transform cursor-default">
                    1 VISION
                  </span>
                  <span
                    className="block mt-2 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent 
                    animate-gradient-x transform hover:scale-105 transition-transform cursor-default"
                  >
                    ∞ POSSIBILITIES
                  </span>
                </h1>
              </div>

              {/* Subtitle with glowing effect */}
              <p className="relative mx-auto max-w-lg text-xl text-purple-200 sm:max-w-3xl md:text-2xl">
                <span className="relative inline-flex flex-col items-center">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-fuchsia-500/20 to-purple-600/20 blur-2xl rounded-full" />
                  <span
                    className="relative bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent 
                    animate-gradient-x hover:scale-105 transition-transform cursor-default"
                  >
                    Welcome to Singularity Robotics: Team 10032
                  </span>
                </span>
              </p>

              {/* CTA buttons with hover effects */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12">
                <Button
                  size="lg"
                  className="w-full sm:w-auto border-2 border-purple-600 bg-transparent text-white hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] px-8 py-6 text-lg"
                  asChild
                >
                  <Link href="/apply" className="flex items-center justify-center gap-2">
                    Join Our Team
                    <ChevronRight className="h-5 w-5 animate-bounce-x" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-purple-600 bg-transparent hover:bg-purple-600 text-white hover:text-white transform hover:scale-105 transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] px-8 py-6 text-lg"
                  asChild
                >
                  <Link href="/sponsors">Support Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Expanded spacing with centered content and image below */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,58,180,0.1)_0%,rgba(0,0,0,0)_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto text-center">
              {/* Centered header section */}
              <div className="mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <Star className="w-3.5 h-3.5 mr-2" />
                  About Singularity Robotics
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
                  Pioneering the Future of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                    Robotics Excellence
                  </span>
                </h2>
                <p className="text-lg text-purple-200/90 leading-relaxed max-w-3xl mx-auto">
                  Team 10032, Singularity Robotics, is a FIRST Robotics Competition team dedicated to fostering
                  innovation, engineering excellence, and community impact through competitive robotics.
                </p>
              </div>

              {/* Centered content */}
              <div className="space-y-8 max-w-3xl mx-auto mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-xl bg-purple-900/10 border border-purple-500/20 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                      <Trophy className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Competition Excellence</h3>
                    <p className="text-purple-200/80">
                      Our team competes at the highest levels of FIRST Robotics, pushing the boundaries of what's
                      possible.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-purple-900/10 border border-purple-500/20 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                      <Code className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Technical Innovation</h3>
                    <p className="text-purple-200/80">
                      We develop cutting-edge solutions, combining software, hardware, and mechanical engineering.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-purple-900/10 border border-purple-500/20 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                      <Users className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Community Impact</h3>
                    <p className="text-purple-200/80">
                      We mentor younger teams and organize STEM outreach programs to inspire the next generation.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-purple-900/10 border border-purple-500/20 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                      <Lightbulb className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">STEM Education</h3>
                    <p className="text-purple-200/80">
                      We provide hands-on learning experiences in science, technology, engineering, and mathematics.
                    </p>
                  </div>
                </div>

                <Button
                  className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors group"
                  asChild
                >
                  <Link href="/about" className="inline-flex items-center">
                    Learn More About Our Team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Team image below all content */}
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute -inset-4 bg-purple-500/10 rounded-3xl blur-xl" />
                <div className="relative rounded-2xl overflow-hidden border border-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/40 z-10" />
                  <OptimizedImage
                    src={activeGalleryPhoto.src}
                    alt={activeGalleryPhoto.alt}
                    width={1200}
                    height={800}
                    className="aspect-[3/2] object-cover w-full transition-opacity duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm font-medium text-green-400">Active Since 2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Team 10032</h3>
                    <p className="mt-1 text-sm text-purple-100/90">{activeGalleryPhoto.caption}</p>
                    <div className="mt-4 flex justify-center gap-2">
                      {teamGallery.map((photo, index) => (
                        <button
                          key={photo.src}
                          type="button"
                          aria-label={`Show ${photo.caption}`}
                          className={`h-2.5 rounded-full transition-all ${
                            index === activeGalleryIndex ? "w-8 bg-purple-300" : "w-2.5 bg-white/40 hover:bg-white/70"
                          }`}
                          onClick={() => setActiveGalleryIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="relative py-24 bg-gradient-to-b from-[#120426] to-[#0a0118]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <Calendar className="w-3.5 h-3.5 mr-2" />
                  Mark Your Calendar
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 my-6" />
              </div>

              <div className="relative overflow-hidden rounded-xl bg-purple-900/10 border border-purple-500/20 p-8 text-center backdrop-blur-sm">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
                <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center md:text-left">
                  <div>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20 md:mx-0">
                      <Calendar className="h-6 w-6 text-purple-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Coming Soon! Biocore</h3>
                    <p className="mx-auto mt-3 max-w-2xl text-purple-200/90 md:mx-0">
                      New season information and event details will be shared here soon.
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-lg border border-purple-500/20 bg-[#0a0118]/80">
                    <Image
                      src="/images/biocore.jpeg"
                      alt="FIRST Robotics Competition Biocore season teaser"
                      width={900}
                      height={520}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Magazine Section */}
        <section className="relative py-24 bg-gradient-to-b from-[#0a0118] to-[#120426]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <FileText className="w-3.5 h-3.5 mr-2" />
                  Latest Publication
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Our Magazine</h2>
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 my-6" />
                <p className="max-w-2xl mx-auto text-lg text-purple-200/90">
                  Check out the latest edition of our magazine featuring team updates, technical articles, and more.
                </p>
              </div>

              <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-8 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                    <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-lg overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-500/10">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <Image
                          src="/images/horizon-magazine-2026.png"
                          alt="Singularity Magazine Cover"
                          width={450}
                          height={600}
                          className="object-cover w-full h-full"
                        />
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <div className="inline-block bg-purple-600/80 px-3 py-1 rounded-md text-sm font-medium text-white mb-2">
                          Spring 2026
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <h3 className="text-2xl font-bold text-white">Singularity Magazine</h3>
                    <p className="text-purple-200/90">
                    Our magazine showcases our journey, technical insights, and the impact of our work. Learn about our latest community stories and discover the stories
                      behind our robotics adventures.
                    </p>
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white group" asChild>
                      <a
                        href="https://drive.google.com/file/d/1WTiEvd9SGteosK9-qp3lGhZLep4yNeCR/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        Read Latest Edition
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#120426] to-[#0a0118]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <Instagram className="w-3.5 h-3.5 mr-2" />
                  Stay Connected
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Connect With Us</h2>
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 my-6" />
                <p className="max-w-2xl mx-auto text-lg text-purple-200/90">
                  Follow our journey and connect with us on social media.
                </p>
              </div>

              <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-8 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <p className="text-purple-200/90">
                    To connect with a broader audience and share our journey, we maintain active social media profiles.
                    Our Instagram and TikTok accounts, @singularityfrc, provide regular updates on our community work, events,
                    and team milestones. Through these platforms, we aim to inspire and engage with fellow robotics
                    enthusiasts, students, and supporters worldwide.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <Button
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      asChild
                    >
                      <a
                        href="https://www.instagram.com/singularityfrc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <Instagram className="mr-2 h-4 w-4" />
                        Instagram
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      asChild
                    >
                      <a
                        href="https://www.tiktok.com/@singularityfrc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                        TikTok
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-800 text-white" asChild>
                      <Link href="/sponsors" className="inline-flex items-center">
                        Sponsor Us
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-purple-900/20 bg-[#0a0118]">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-purple-400">© 2026 Singularity Robotics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

