"use client"

import { Navbar } from "@/components/navbar"
import { projects } from "@/lib/projects-data"
import { OptimizedImage } from "@/components/optimized-image"
import Link from "next/link"
import { ArrowLeft, Lightbulb } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/types"

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === slug)
    setProject(foundProject || null)
  }, [slug])

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col bg-[#0a0118] text-purple-100">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-6">The project you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <Link href="/projects">Back to Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0118] text-purple-100">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,58,180,0.15)_0%,rgba(0,0,0,0)_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/projects"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>

              <div className="text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <Lightbulb className="w-3.5 h-3.5 mr-2" />
                  Project Showcase
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.title}</h1>
                <p className="text-lg text-purple-200/90 mb-8">{project.excerpt}</p>
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 my-6" />
              </div>
            </div>
          </div>
        </section>

        {/* Project Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{
                  __html: project.content.split("</p>")[0] + "</p>" + project.content.split("</p>")[1] + "</p>",
                }}
              />
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-purple-800/50">
              <OptimizedImage
                src={project.images[0].src}
                alt={project.images[0].alt}
                width={800}
                height={450}
                className="w-full h-auto object-contain"
                priority={true}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden shadow-xl border border-purple-800/50">
              <OptimizedImage
                src={project.images[1].src}
                alt={project.images[1].alt}
                width={800}
                height={450}
                className="w-full h-auto object-contain"
                priority={true}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Game Development & Education</h3>
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: project.content.split("</p>")[2] + "</p>" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Community Impact</h3>
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{
                  __html: project.content.split("</p>")[3] + "</p>" + project.content.split("</p>")[4] + "</p>",
                }}
              />
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-purple-800/50">
              <OptimizedImage
                src={project.images[2].src}
                alt={project.images[2].alt}
                width={800}
                height={450}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-xl border border-purple-800/50 mb-12">
            <OptimizedImage
              src={project.images[3].src}
              alt={project.images[3].alt}
              width={1200}
              height={675}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Tournament Photos Section */}
          {project.tournamentImages && project.tournamentImages.length > 0 && (
            <div className="mt-16 mb-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Tournament in Action</h3>
              <div className="flex justify-center gap-8">
                {project.tournamentImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden shadow-xl border border-purple-800/50 flex items-center justify-center"
                    style={{ width: "45%", minHeight: "300px" }}
                  >
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: "100%" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center">
            <div className="inline-block bg-purple-900/50 px-6 py-3 rounded-lg border border-purple-700 shadow-lg">
              <p className="text-xl text-purple-200 font-medium">
                {project.title}: Connecting Gaming, Community, and Robotics
              </p>
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

