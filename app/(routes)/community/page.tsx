"use client"

import { Navbar } from "@/components/navbar"
import { OptimizedImage } from "@/components/optimized-image"
import Link from "next/link"
import { ArrowRight, Lightbulb } from "lucide-react"
import { projects } from "@/lib/projects-data"

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0118] text-purple-100">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,58,180,0.15)_0%,rgba(0,0,0,0)_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
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
                Explore team initiatives, outreach stories, and student-led work that connects Singularity Robotics
                with the people around us.
              </p>
              <div className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-purple-500 to-fuchsia-500" />
            </div>
          </div>
        </section>

        <section className="relative py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="mb-12 text-3xl font-bold text-white">Featured Stories</h2>

              <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative w-full max-w-sm overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-b from-purple-900/20 to-black/40 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40"
                  >
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
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="inline-block max-w-2xl rounded-lg border border-purple-500/20 bg-purple-900/20 p-8">
                  <Lightbulb className="mx-auto mb-4 h-10 w-10 text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold text-white">More Community Stories Coming Soon</h3>
                  <p className="text-purple-200/80">
                    We will keep adding outreach recaps, team articles, and community projects as the season grows.
                  </p>
                </div>
              </div>
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
