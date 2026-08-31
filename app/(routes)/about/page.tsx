"use client"

import Link from "next/link"
import { OptimizedImage } from "@/components/optimized-image"
import { Navbar } from "@/components/navbar"
import { Reveal } from "@/components/reveal"
import { SpaceBackdrop } from "@/components/space-backdrop"
import { Button } from "@/components/ui/button"
import {
  Users,
  Rocket,
  Heart,
  Star,
  Award,
  Lightbulb,
  ArrowRight,
  Instagram,
  ExternalLink,
  MapPin,
  Calendar,
  BookOpen,
  Sparkles,
  Zap,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0118] text-purple-100">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <SpaceBackdrop glow="center" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                <Users className="w-3.5 h-3.5 mr-2" />
                Our Story
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  Singularity Robotics
                </span>
              </h1>
              <p className="text-lg text-purple-200/90 mb-8">
                FRC Team 10032: a student-led robotics team from Frisco, Texas, started in 2024.
              </p>
              <div className="cosmic-rule my-6" />
            </Reveal>
          </div>
        </section>

        {/* Team Overview Section */}
        <section className="relative py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <Reveal direction="left">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-purple-500/10 rounded-3xl blur-xl" />
                    <div className="relative aspect-square w-full max-w-lg mx-auto rounded-2xl overflow-hidden border border-purple-500/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/40 z-10" />
                      <OptimizedImage
                        src="/images/team-bleachers-new.jpeg"
                        alt="Singularity Robotics Team at competition"
                        width={800}
                        height={800}
                        className="object-cover w-full h-full"
                        priority={true}
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal direction="right" delay={100}>
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium">
                      <Rocket className="w-3.5 h-3.5 mr-2" />
                      Who We Are
                    </div>
                    <h2 className="text-3xl font-bold text-white">Team 10032: Singularity Robotics</h2>
                    <div className="space-y-4 text-purple-200/90">
                      <p>
                        We're Singularity Robotics, FRC Team 10032, based in Frisco, Texas. Since 2024, over 35 students
                        have worked across engineering, programming, and business to make the team run.
                      </p>
                      <p>
                        Each season we design and build a new robot to compete in FRC. Along the way we try to live the
                        FIRST core values: teamwork, inclusion, and getting more students into STEM.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                      <div className="flex items-center text-purple-300 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>Frisco, Texas</span>
                      </div>
                      <div className="flex items-center text-purple-300 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Est. 2024</span>
                      </div>
                      <div className="flex items-center text-purple-300 text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        <span>35+ Members</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#0a0118] to-[#120426]">
          <SpaceBackdrop />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <Reveal className="text-center mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <BookOpen className="w-3.5 h-3.5 mr-2" />
                  Our Journey
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">A Story of Perseverance</h2>
                <div className="cosmic-rule my-6" />
              </Reveal>

              <Reveal delay={100}>
                <div className="glass-card p-8">
                  <div className="space-y-6 text-purple-200/90">
                    <p>
                      Singularity was founded by FIRST alumni who wanted a more inclusive, easygoing FRC experience.
                      Our founders took the problems they'd run into on past teams and set out to fix them here.
                    </p>
                    <p>
                      Two seasons in, Singularity is <strong className="text-white">completely student-led</strong>: no
                      adult mentors, except for legal and transportation purposes. In that time the team has put
                      together a serious awards cabinet.
                    </p>
                    <p>
                      In Singularity's inaugural season, Singularity won the{" "}
                      <strong className="text-white">Rookie All Star Award</strong> at the{" "}
                      <strong className="text-white">Manor District Event</strong> and the{" "}
                      <strong className="text-white">First in Texas District Event</strong>, qualifying them to the{" "}
                      <strong className="text-white">Worlds Championship</strong>. In Singularity's second year, they
                      were <strong className="text-white">Champions of the Fort Worth District Event</strong>, winning
                      them their first blue banner. At the Dripping Springs District Event, they won the{" "}
                      <strong className="text-white">Sustainability Award sponsored by Dow</strong>. Finally, at the
                      First in Texas District Championship, they{" "}
                      <strong className="text-white">qualified to the playoffs in the Mercury Division</strong>, and
                      won the <strong className="text-white">Rising All Star Award</strong>.
                    </p>
                    <p>
                      This season, the goal is to go 3 for 3 like the second year, and get back to Worlds like the
                      first.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                      <div className="glass-card p-4 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                          <Sparkles className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Student-Led</h3>
                        <p className="text-sm text-purple-200/80">
                          Every part of the team, from robot design to the budget, is run by students.
                        </p>
                      </div>
                      <div className="glass-card p-4 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                          <Heart className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Inclusive</h3>
                        <p className="text-sm text-purple-200/80">
                          Open to any student, whatever their background or experience level.
                        </p>
                      </div>
                      <div className="glass-card p-4 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                          <Zap className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Determined</h3>
                        <p className="text-sm text-purple-200/80">
                          We work through problems together instead of giving up on them.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Values and Mission Section */}
        <section className="relative py-20 overflow-hidden">
          <SpaceBackdrop />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <Reveal className="text-center mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <Star className="w-3.5 h-3.5 mr-2" />
                  Our Values
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Mission & Values</h2>
                <div className="cosmic-rule my-6" />
                <p className="max-w-2xl mx-auto text-lg text-purple-200/90">
                  What we're actually trying to do, beyond building a robot.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Reveal direction="left">
                    <div className="glass-card p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-purple-400" />
                        Our Mission
                      </h3>
                      <p className="text-purple-200/90">
                        Give students real, hands-on STEM experience and a team where they can figure out what they're
                        good at, while upholding the core values of FIRST.
                      </p>
                    </div>
                  </Reveal>

                  <Reveal direction="left" delay={90}>
                    <div className="glass-card p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Heart className="w-5 h-5 mr-2 text-purple-400" />
                        Championing Women in FIRST
                      </h3>
                      <p className="text-purple-200/90">
                        We want the girls on our team to have the mentorship and support to lead, and we run outreach
                        so more young women see robotics and engineering as fields where they belong.
                      </p>
                    </div>
                  </Reveal>

                  <Reveal direction="left" delay={180}>
                    <div className="glass-card p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2 text-purple-400" />
                        Innovation & Learning
                      </h3>
                      <p className="text-purple-200/90">
                        We keep looking for better ways to build, program, and run the team, and we want that curiosity
                        to reach past our own shop into the community around us.
                      </p>
                    </div>
                  </Reveal>
                </div>

                <Reveal direction="right" delay={120}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-purple-500/10 rounded-3xl blur-xl" />
                    <div className="relative aspect-[3/4] w-full max-w-lg mx-auto rounded-2xl overflow-hidden border border-purple-500/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/40 z-10" />
                      <OptimizedImage
                        src="/images/student-working.png"
                        alt="Student working on robot mechanism"
                        width={600}
                        height={800}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                        <h3 className="text-xl font-bold text-white">Breaking Barriers</h3>
                        <p className="text-sm text-purple-200/90">Creating opportunities for all students in STEM</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#120426] to-[#0a0118]">
          <SpaceBackdrop />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <Reveal className="text-center mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <Instagram className="w-3.5 h-3.5 mr-2" />
                  Stay Connected
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Connect With Us</h2>
                <div className="cosmic-rule my-6" />
              </Reveal>

              <Reveal delay={100}>
                <div className="glass-card p-8">
                  <div className="text-center space-y-6">
                    <p className="text-purple-200/90">
                      We post on Instagram and TikTok as @singularityfrc: competition updates, build progress, outreach
                      events, and team news.
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
              </Reveal>
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
