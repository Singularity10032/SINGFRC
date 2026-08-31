"use client"

import { Navbar } from "@/components/navbar"
import { OptimizedImage } from "@/components/optimized-image"
import { Reveal } from "@/components/reveal"
import { SpaceBackdrop } from "@/components/space-backdrop"
import Link from "next/link"
import { ArrowRight, Lightbulb } from "lucide-react"
import { projects } from "@/lib/projects-data"

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0118] text-purple-100">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden py-20">
          <SpaceBackdrop glow="center" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center rounded-full border border-purple-500/20 bg-purple-900/30 px-3 py-1 text-sm font-medium text-purple-300">
                <Lightbulb className="mr-2 h-3.5 w-3.5" />
                Community Hub
              </div>
              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Our{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Community
                </span>
              </h1>
              <p className="mb-8 text-lg text-purple-200/90">
                Outreach recaps, team projects, and the work our members do outside of competition.
              </p>
              <div className="cosmic-rule my-6" />
            </Reveal>
          </div>
        </section>

        <section className="relative py-16">
          <SpaceBackdrop />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl text-center">
              <Reveal>
                <h2 className="mb-12 text-3xl font-bold text-white">Featured Stories</h2>
              </Reveal>

              <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <Reveal key={project.id} delay={index * 90} className="w-full max-w-sm">
                    <div className="glass-card group h-full">
                      <div className="aspect-video w-full overflow-hidden">
                        <OptimizedImage
                          src={project.coverImage}
                          alt={project.title}
                          width={600}
                          height={340}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-4 p-6">
                        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-purple-300">
                          {project.title}
                        </h3>
                        <p className="line-clamp-3 text-purple-200/80">{project.excerpt}</p>
                        <Link
                          href={`/community/${project.id}`}
                          className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300"
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                          Read Story
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal className="mt-16 text-center" delay={120}>
                <div className="glass-card inline-block max-w-2xl p-8">
                  <Lightbulb className="mx-auto mb-4 h-10 w-10 text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold text-white">More Community Stories Coming Soon</h3>
                  <p className="text-purple-200/80">
                    We will keep adding outreach recaps, team articles, and community projects as the season grows.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

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
