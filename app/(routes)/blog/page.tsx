"use client"

import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, ChevronRight, FileText, Trophy, Zap, Star } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredPosts = activeFilter === "all" ? blogPosts : blogPosts.filter((post) => post.category === activeFilter)

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
                <FileText className="w-3.5 h-3.5 mr-2" />
                Our Journey
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Singularity Robotics{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  Blog
                </span>
              </h1>
              <p className="text-lg text-purple-200/90 mb-8">
                Follow our team's journey through the build season and competitions. From brainstorming to the final
                matches, we document our progress, challenges, and victories.
              </p>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 my-6" />
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="relative py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0">
                  <Image
                    src="/images/teampicture.webp"
                    alt="Team Singularity"
                    width={1200}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-black/80" />
                </div>

                <div className="relative p-8 md:p-12 lg:p-16">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-600/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
                      <Star className="w-3.5 h-3.5 mr-2" />
                      Featured Post
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Our 2025 Season: Building Singularity
                    </h2>
                    <p className="text-lg text-purple-200/90 mb-6">
                      Follow our journey from the initial brainstorming sessions to our competition performances.
                      Discover how Team 10032 tackled challenges, innovated solutions, and grew together as a team.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      <div className="flex items-center text-purple-300 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>January - March 2025</span>
                      </div>
                      <div className="flex items-center text-purple-300 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Season Recap</span>
                      </div>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-800 text-white group" asChild>
                      <Link href="#blog-posts" className="inline-flex items-center">
                        Read Our Journey
                        <ChevronRight className="ml-2 h-4 w-4 animate-bounce-x" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section id="blog-posts" className="relative py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
                <h2 className="text-3xl font-bold text-white">Latest Updates</h2>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <Button
                    variant={activeFilter === "all" ? "default" : "outline"}
                    className={cn(
                      activeFilter === "all"
                        ? "bg-purple-600 hover:bg-purple-800"
                        : "border-purple-500/50 text-purple-600 hover:bg-purple-900/40 hover:text-purple-100",
                      "transition-all duration-300",
                    )}
                    onClick={() => setActiveFilter("all")}
                  >
                    All Posts
                  </Button>
                  <Button
                    variant={activeFilter === "Build Season" ? "default" : "ghost"}
                    className={cn(
                      activeFilter === "Build Season"
                        ? "bg-purple-600 hover:bg-purple-800"
                        : "text-purple-400 hover:bg-purple-900/40 hover:text-purple-100",
                      "transition-all duration-300",
                    )}
                    onClick={() => setActiveFilter("Build Season")}
                  >
                    Build Season
                  </Button>
                  <Button
                    variant={activeFilter === "Competition" ? "default" : "ghost"}
                    className={cn(
                      activeFilter === "Competition"
                        ? "bg-purple-600 hover:bg-purple-800"
                        : "text-purple-400 hover:bg-purple-900/40 hover:text-purple-100",
                      "transition-all duration-300",
                    )}
                    onClick={() => setActiveFilter("Competition")}
                  >
                    Competitions
                  </Button>
                </div>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-purple-900/20 to-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                    >
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="inline-flex items-center px-2 py-1 rounded-full bg-purple-900/40 text-purple-300 text-xs">
                            {post.category === "Build Season" ? (
                              <Zap className="w-3 h-3 mr-1" />
                            ) : (
                              <Trophy className="w-3 h-3 mr-1" />
                            )}
                            <span>{post.category}</span>
                          </div>
                          <div className="flex items-center text-purple-400 text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-purple-200/80 line-clamp-3">{post.excerpt}</p>

                        <div className="flex items-center text-purple-400 text-sm mb-4">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>

                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium group/link"
                        >
                          Read Full Article
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/20 mb-4">
                    <FileText className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">No posts found</h3>
                  <p className="text-purple-200/80 max-w-md mx-auto">
                    There are no posts in this category yet. Please check back later or try a different filter.
                  </p>
                </div>
              )}

              {activeFilter === "all" && filteredPosts.length > 0 && (
                <div className="mt-16 text-center">
                  <Button className="bg-purple-600 hover:bg-purple-800 text-white group" asChild>
                    <Link
                      href="#"
                      className="inline-flex items-center"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      Load More Posts
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,58,180,0.2)_0%,rgba(0,0,0,0)_70%)]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-8 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Stay Updated</h2>
                  <p className="text-purple-200/90">
                    Subscribe to our newsletter to receive the latest updates about our team's journey.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    />
                    <Button className="bg-purple-600 hover:bg-purple-800 text-white">Subscribe</Button>
                  </div>
                  <p className="text-xs text-purple-300/70 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
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

