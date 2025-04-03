"use client"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import {
  Users,
  Calendar,
  Trophy,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  Code,
  Lightbulb,
  ExternalLink,
  Star,
  Instagram,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-data" // Import from the shared data file
import { OptimizedImage } from "@/components/optimized-image"

export default function Home() {
  // Get the 3 most recent blog posts
  const recentBlogPosts = blogPosts.slice(0, 3)

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
                    src="/images/teampicture.webp"
                    alt="Singularity Robotics Team"
                    width={1200}
                    height={800}
                    className="object-cover w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm font-medium text-green-400">Active Since 2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Team 10032</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events - Professional Calendar */}
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
                <p className="max-w-2xl mx-auto text-lg text-purple-200/90">
                  Join us at these upcoming competitions and community events to see our team in action.
                </p>
              </div>

              <div className="space-y-6">
                {/* Event 1 */}
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-900/20 to-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    <div className="flex-shrink-0 w-full md:w-auto">
                      <div className="bg-purple-900/40 rounded-lg p-4 text-center md:w-32">
                        <div className="text-2xl font-bold text-white">21-22</div>
                        <div className="text-sm text-purple-300">MAR 2025</div>
                      </div>
                    </div>

                    <div className="flex-grow space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">FRC District Competition</h3>
                        <div className="flex items-center text-purple-300 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>Fort Worth, TX</span>
                        </div>
                      </div>

                      <p className="text-purple-200/80">
                        Our team will be competing in the Fort Worth District FIRST Robotics Competition, showcasing our
                        latest robot design and competing against top teams from the region.
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-purple-300 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>9:00 AM - 6:00 PM</span>
                        </div>

                        <Button
                          size="sm"
                          className="bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                          asChild
                        >
                          <Link
                            href="http://frc-events.firstinspires.org/2025/TXFOR"
                            className="inline-flex items-center"
                          >
                            Learn More
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-900/20 to-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    <div className="flex-shrink-0 w-full md:w-auto">
                      <div className="bg-purple-900/40 rounded-lg p-4 text-center md:w-32">
                        <div className="text-2xl font-bold text-white">2-5</div>
                        <div className="text-sm text-purple-300">APR 2025</div>
                      </div>
                    </div>

                    <div className="flex-grow space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">FIRST Championship</h3>
                        <div className="flex items-center text-purple-300 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>Houston, TX</span>
                        </div>
                      </div>

                      <p className="text-purple-200/80">
                        The ultimate FIRST Robotics event of the season, bringing together top teams from around the
                        world to compete in this prestigious championship.
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-purple-300 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>All Day</span>
                        </div>

                        <Button
                          size="sm"
                          className="bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                          asChild
                        >
                          <Link
                            href="https://frc-events.firstinspires.org/2025/TXCMP"
                            className="inline-flex items-center"
                          >
                            Learn More
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
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
                    Our Instagram and TikTok accounts, @singularityfrc, provide regular updates on our projects, events,
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
                      <Link href="/contact" className="inline-flex items-center">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,58,180,0.2)_0%,rgba(0,0,0,0)_70%)]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute inset-0">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Robotics Team"
                    width={1200}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-black/90" />
                </div>

                <div className="relative py-20 px-6 md:px-12 lg:px-16">
                  <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Journey</h2>
                    <p className="text-lg text-purple-200/90 mb-10">
                      Whether you're interested in joining our team, becoming a sponsor, or learning more about our
                      work, we'd love to connect with you.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-purple-600 hover:bg-purple-800 text-white"
                        asChild
                      >
                        <Link href="/apply" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                          Join Our Team
                        </Link>
                      </Button>
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-purple-600 hover:bg-purple-800 text-white"
                        asChild
                      >
                        <Link href="/sponsors" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                          Support Us
                        </Link>
                      </Button>
                    </div>
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
            <p className="text-sm text-purple-400">© 2024 Singularity Robotics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

