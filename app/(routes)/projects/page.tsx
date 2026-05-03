"use client"

import { Navbar } from "@/components/navbar"
import { OptimizedImage } from "@/components/optimized-image"
import Link from "next/link"
import { ArrowRight, Lightbulb } from "lucide-react"
import { projects } from "@/lib/projects-data"

export default function ProjectsPage() {
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
                <Lightbulb className="w-3.5 h-3.5 mr-2" />
                Innovation Hub
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  Projects
                </span>
              </h1>
              <p className="text-lg text-purple-200/90 mb-8">
                Our projects are more than just creative endeavors—they're catalysts for change within our community.
                Each project is meticulously designed to blend innovation with practical learning, providing hands-on
                experiences that empower participants while fostering a deep sense of collaboration and community
                spirit.
              </p>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 my-6" />
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="relative py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-purple-900/20 to-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 max-w-sm w-full"
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <OptimizedImage
                        src={project.coverImage}
                        alt={project.title}
                        width={600}
                        height={340}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-purple-200/80 line-clamp-3">{project.excerpt}</p>

                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium group/link"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      >
                        View Project
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Placeholder for future projects */}
              <div className="mt-16 text-center">
                <div className="inline-block bg-purple-900/20 border border-purple-500/20 rounded-lg p-8 max-w-2xl">
                  <Lightbulb className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">More Projects Coming Soon</h3>
                  <p className="text-purple-200/80">
                    Our team is constantly working on new and exciting projects. Check back soon to see what we're
                    building next!
                  </p>
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

