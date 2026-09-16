import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Reveal } from "@/components/reveal"
import { getStory, stories } from "@/lib/community"

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const story = getStory(slug)
  return {
    title: story ? `${story.title} — Singularity Robotics` : "Singularity Robotics",
    description: "FRC Team 10032, a student-led FIRST Robotics Competition team in Frisco, Texas.",
  }
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const story = getStory(slug)
  if (!story) notFound()

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/community" className="text-sm font-semibold text-arcade-purple hover:underline">
        &larr; Back to community
      </Link>

      <Reveal>
        <p className="mt-4 text-sm font-semibold text-ink/60">{story.year}</p>
        <h1 className="mt-1 font-display text-4xl sm:text-5xl">{story.title}</h1>
      </Reveal>

      {story.screen && (
        <Reveal delay={80}>
          <div className="sticker-frame mt-8 overflow-hidden">
            <Image
              src={story.screen.src}
              alt={story.screen.alt}
              width={story.screen.width}
              height={story.screen.height}
              sizes="(max-width: 768px) 92vw, 700px"
              className="h-auto w-full rounded-[6px] object-cover"
              priority
            />
          </div>
        </Reveal>
      )}

      <Reveal delay={140}>
        <div className="prose-arcade mt-8">
          <p>{story.body}</p>
        </div>
      </Reveal>

      {story.gallery.length > 0 && (
        <Reveal delay={200}>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {story.gallery.map((photo, i) => (
              <div key={photo.src} className="sticker-frame overflow-hidden" style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * 1.5}deg` }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 45vw, 220px"
                  className="h-full w-full rounded-[6px] object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </div>
  )
}
