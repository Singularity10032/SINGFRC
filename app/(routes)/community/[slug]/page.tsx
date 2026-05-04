import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { projects } from "@/lib/projects-data"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }))
}

export default function CommunityStoryPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0118] text-purple-100">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,58,180,0.15)_0%,rgba(0,0,0,0)_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <Link href="/community" className="mb-8 inline-flex items-center text-sm font-medium text-purple-300 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Community
              </Link>
              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">{project.title}</h1>
              <p className="mb-8 text-lg text-purple-200/90">{project.excerpt}</p>
              <div className="overflow-hidden rounded-2xl border border-purple-500/20 bg-purple-900/10">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <article
              className="prose prose-invert prose-p:text-purple-200/90 prose-strong:text-white mx-auto max-w-3xl"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />

            <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
              {project.images.map((image) => (
                <div key={image.src} className="overflow-hidden rounded-xl border border-purple-500/20 bg-purple-900/10">
                  <Image src={image.src} alt={image.alt} width={900} height={560} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>

            {project.tournamentImages ? (
              <div className="mx-auto mt-16 max-w-5xl">
                <h2 className="mb-8 text-center text-3xl font-bold text-white">Community Tournament</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {project.tournamentImages.map((image) => (
                    <div key={image.src} className="overflow-hidden rounded-xl border border-purple-500/20 bg-purple-900/10">
                      <Image src={image.src} alt={image.alt} width={900} height={560} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
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
