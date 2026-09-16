import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Reveal } from "@/components/reveal"
import { PhotoWall } from "@/components/photo-wall"
import { StickerPhoto } from "@/components/sticker-photo"
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
        <p className="mt-4 text-sm font-semibold text-paper/60">{story.year}</p>
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
              className="h-auto w-full rounded-[6px]"
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

      {/* Column flow, every photo at its own aspect ratio; the old fixed grid
          cropped wide frames like the Algae Abyss "red wins" screen (dad's
          screenshot, 2026-09-15). */}
      {/* Small galleries get a different shape (dad, 2026-09-15): one photo is
          shown large and centered, two sit side by side, three or more flow
          in the three-column wall. */}
      {story.gallery.length === 1 && (
        <Reveal delay={200}>
          <div className="mx-auto mt-10 max-w-2xl">
            <StickerPhoto
              src={story.gallery[0].src}
              width={story.gallery[0].width}
              height={story.gallery[0].height}
              alt={story.gallery[0].alt}
              index={1}
              className="w-full"
              sizes="(max-width: 768px) 92vw, 672px"
            />
          </div>
        </Reveal>
      )}
      {story.gallery.length === 2 && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:items-start">
          {story.gallery.map((p, i) => (
            <Reveal key={p.src} delay={200 + i * 80}>
              <StickerPhoto src={p.src} width={p.width} height={p.height} alt={p.alt} index={i + 1} className="w-full" sizes="(max-width: 640px) 92vw, 340px" />
            </Reveal>
          ))}
        </div>
      )}
      {story.gallery.length >= 3 && <PhotoWall photos={story.gallery} cols={3} className="mt-10" />}
    </div>
  )
}
