"use client"

import Link from "next/link"
import { OptimizedImage } from "@/components/optimized-image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { blogPosts } from "@/lib/blog-data"
import { useEffect, useState } from "react"
import type { BlogPost } from "@/lib/types"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [prevPost, setPrevPost] = useState<BlogPost | null>(null)
  const [nextPost, setNextPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    // Find the post with the matching ID
    const foundPost = blogPosts.find((post) => post.id === params.slug)

    if (!foundPost) {
      // If no post is found, redirect to the blog index page
      router.push("/blog")
      return
    }

    setPost(foundPost)

    // Find the index of the current post
    const currentIndex = blogPosts.findIndex((p) => p.id === params.slug)
    setPrevPost(currentIndex > 0 ? blogPosts[currentIndex - 1] : null)
    setNextPost(currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null)
  }, [params.slug, router])

  // Show loading state while we're fetching the post
  if (!post) {
    return (
      <div className="flex min-h-screen flex-col bg-[#0a0118] text-purple-100">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Loading...</h1>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0118] text-purple-100">
      <Navbar />

      <main className="flex-1">
        {/* Blog Post Content */}
        <article className="relative py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,58,180,0.1)_0%,rgba(0,0,0,0)_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Back to Blog */}
              <div className="mb-8">
                <Button variant="ghost" className="text-purple-500 hover:text-purple-700 hover:bg-white/10" asChild>
                  <Link href="/blog" className="inline-flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>
              </div>

              {/* Post Header */}
              <div className="mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  {post.category}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-purple-300 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-12">
                <OptimizedImage
                  src={post.featuredImage || "/images/teampicture.webp"}
                  alt={post.title}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full"
                  priority={post.id === "week-1" || post.id === "competition-1" || post.id === "competition-2"}
                />
              </div>

              {/* Post Content */}
              <div
                className="prose prose-invert prose-purple max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share and Bookmark */}
              <div className="flex justify-between items-center border-t border-purple-900/20 pt-8 mb-16">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-500/50 text-purple-500 hover:bg-white hover:text-purple-700 hover:border-purple-500"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-500/50 text-purple-500 hover:bg-white hover:text-purple-700 hover:border-purple-500"
                >
                  <Bookmark className="mr-2 h-4 w-4" />
                  Bookmark
                </Button>
              </div>

              {/* Previous/Next Navigation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-purple-900/20 pt-8">
                {prevPost && (
                  <Link
                    href={`/blog/${prevPost.id}`}
                    className="group p-4 rounded-xl bg-purple-900/10 border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-900/30 transition-all duration-300"
                  >
                    <div className="flex items-center text-purple-300 text-sm mb-2">
                      <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" />
                      <span>Previous Post</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {prevPost.title}
                    </h3>
                  </Link>
                )}

                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.id}`}
                    className="group p-4 rounded-xl bg-purple-900/10 border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-900/30 transition-all duration-300 md:text-right md:ml-auto"
                  >
                    <div className="flex items-center justify-end text-purple-300 text-sm mb-2">
                      <span>Next Post</span>
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {nextPost.title}
                    </h3>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </article>
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

