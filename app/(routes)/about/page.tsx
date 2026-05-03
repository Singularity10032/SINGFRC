"use client"

import Link from "next/link"
import { OptimizedImage } from "@/components/optimized-image"
import { Navbar } from "@/components/navbar"
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,58,180,0.15)_0%,rgba(0,0,0,0)_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
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
                FRC Team 10032: Where innovation meets determination, and every student has the opportunity to excel in
                robotics.
              </p>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 my-6" />
            </div>
          </div>
        </section>

        {/* Team Overview Section */}
        <section className="relative py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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

                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium">
                    <Rocket className="w-3.5 h-3.5 mr-2" />
                    Who We Are
                  </div>
                  <h2 className="text-3xl font-bold text-white">Team 10032: Singularity Robotics</h2>
                  <div className="space-y-4 text-purple-200/90">
                    <p>
                      We're Singularity Robotics, also known as FRC Team 10032, proudly located in Frisco, Texas.
                      Established in 2024, our team comprises over 35 passionate students dedicated to exploring the
                      realms of engineering, programming, and business within the field of robotics.
                    </p>
                    <p>
                      Our core mission is to compete in FRC, where we design and build innovative robots, fostering
                      engineering excellence and teamwork. We also work to uphold the core values of FIRST, embracing
                      innovation, collaboration, and a passion for STEM to inspire the next generation of leaders.
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
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#0a0118] to-[#120426]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <BookOpen className="w-3.5 h-3.5 mr-2" />
                  Our Journey
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">A Story of Perseverance</h2>
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 my-6" />
                <p className="max-w-2xl mx-auto text-lg text-purple-200/90">
                  From rejection to innovation, our founding story is one of determination and resilience.
                </p>
              </div>

              <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-8 backdrop-blur-sm">
                <div className="space-y-6 text-purple-200/90">
                  <p>
                    Singularity Robotics was founded out of perseverance. Many of our founding members faced rejection
                    from existing robotics teams, but rather than giving up, we came together to create our own team,
                    one that is built on determination, inclusivity, and a drive to succeed.
                  </p>
                  <p>
                    Despite the challenges of starting from scratch, we have grown into a thriving community that
                    supports one another and continues to push the team forward. We also take pride in being a
                    completely student-led team, proving that dedication and teamwork can drive success at every level.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    <div className="p-4 rounded-lg bg-purple-900/20 border border-purple-500/20">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Student-Led</h3>
                      <p className="text-sm text-purple-200/80">
                        Entirely managed and operated by students, fostering leadership and ownership.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-purple-900/20 border border-purple-500/20">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                        <Heart className="w-5 h-5 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Inclusive</h3>
                      <p className="text-sm text-purple-200/80">
                        Creating opportunities for all students, regardless of background or experience.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-purple-900/20 border border-purple-500/20">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                        <Zap className="w-5 h-5 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Determined</h3>
                      <p className="text-sm text-purple-200/80">
                        Overcoming challenges through persistence and collaborative problem-solving.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values and Mission Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,58,180,0.15)_0%,rgba(0,0,0,0)_70%)]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <Star className="w-3.5 h-3.5 mr-2" />
                  Our Values
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Mission & Values</h2>
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 my-6" />
                <p className="max-w-2xl mx-auto text-lg text-purple-200/90">
                  Breaking barriers and creating an inclusive space for everyone in robotics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-purple-400" />
                      Our Mission
                    </h3>
                    <p className="text-purple-200/90">
                      Our mission is to inspire and empower students through hands-on STEM experiences, cultivating a
                      passion for innovation, teamwork, and problem-solving while upholding the core values of FIRST.
                    </p>
                  </div>

                  <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-purple-400" />
                      Championing Women in FIRST
                    </h3>
                    <p className="text-purple-200/90">
                      We are proud to champion Women in FIRST, ensuring that girls on our team have the resources,
                      mentorship, and encouragement to thrive in STEM. Through outreach, mentorship, and representation,
                      we strive to inspire more young women to pursue robotics and engineering with confidence.
                    </p>
                  </div>

                  <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2 text-purple-400" />
                      Innovation & Learning
                    </h3>
                    <p className="text-purple-200/90">
                      As we move forward, Singularity remains committed to pushing the boundaries of innovation and
                      fostering a culture of curiosity and learning. We are excited about future challenges and
                      opportunities in the world of robotics and are dedicated to making a positive impact both within
                      our community and beyond.
                    </p>
                  </div>
                </div>

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

