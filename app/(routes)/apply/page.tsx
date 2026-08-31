"use client"

import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Reveal } from "@/components/reveal"
import { SpaceBackdrop } from "@/components/space-backdrop"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  CheckCircle2,
  FileText,
  Users,
  Lightbulb,
  ChevronRight,
} from "lucide-react"

const APPLICATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdxXEqo61gHjgszNQ6uFRoVZRYrkYnlj9LC4Ldm68heYH7dAQ/viewform?usp=dialog"

const eligibilityCriteria = [
  "Currently enrolled in high school (grades 9-12)",
  "Interest in robotics, engineering, programming, or business/marketing",
  "HIGH Commitment to attend team meetings and events",
  "Willingness to learn and work collaboratively",
  "Willing to pay team fees and dues on time",
  "Underclassmen are highly encouraged to join!",
]

const applicationSteps = [
  {
    title: "Complete Online Application",
    description: "Fill out our application form with your contact information, interests, and experience.",
    icon: FileText,
  },
  {
    title: "Interview Process",
    description: "Selected applicants will be invited for a brief interview with team mentors and student leaders.",
    icon: Users,
  },
  {
    title: "Skills Assessment",
    description:
      "Depending on your interests, you may participate in a hands-on activity to assess your skills and teamwork.",
    icon: Lightbulb,
  },
  {
    title: "Decision & Onboarding",
    description: "Accepted members will receive an invitation to join the team and begin the onboarding process.",
    icon: CheckCircle2,
  },
]

export default function ApplyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0118] text-purple-100">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <SpaceBackdrop glow="center" />

          <div className="container relative mx-auto px-6 sm:px-8 lg:px-12">
            <Reveal className="max-w-4xl mx-auto text-center">
              <div className="mb-8 rounded-2xl border border-purple-300/40 bg-purple-600/25 px-6 py-5 shadow-[0_0_35px_rgba(168,85,247,0.22)] backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Calendar className="h-8 w-8 text-purple-200" />
                  <p className="text-2xl font-black uppercase tracking-wide text-white sm:text-3xl">
                    Applications due June 10th
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                <Users className="w-3.5 h-3.5 mr-2" />
                Join Our Team
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  Team 10032
                </span>
              </h1>
              <p className="text-lg text-purple-200/90 mb-10 max-w-2xl mx-auto">
                Whether you want to build, code, or run the business side, there's a place for you on Singularity
                Robotics. No experience needed — you'll learn everything here.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white border-2 border-purple-600 hover:border-purple-700 transform hover:scale-105 transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] px-8 py-6 text-lg"
                  asChild
                >
                  <a
                    href={APPLICATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Apply Now
                    <ChevronRight className="h-5 w-5 animate-bounce-x" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-purple-600 bg-transparent hover:bg-purple-600 text-white hover:text-white transform hover:scale-105 transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] px-8 py-6 text-lg"
                  asChild
                >
                  <Link href="#application-process" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Learn More
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Application Process Section */}
        <section id="application-process" className="relative py-24 bg-gradient-to-b from-[#0a0118] to-[#120426]">
          <SpaceBackdrop />

          <div className="container relative mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <Reveal className="text-center mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <FileText className="w-3.5 h-3.5 mr-2" />
                  How to Apply
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Application Process</h2>
                <div className="cosmic-rule my-6" />
                <p className="max-w-2xl mx-auto text-lg text-purple-200/90">
                  Four steps. It's how we get to know you and figure out where you'd fit on the team.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {applicationSteps.map((step, index) => (
                  <Reveal key={index} delay={index * 90}>
                    <div className="glass-card group h-full">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="p-8 relative">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                            <step.icon className="w-6 h-6 text-purple-400" />
                          </div>
                          <div>
                            <div className="flex items-center">
                              <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-sm flex items-center justify-center mr-3">
                                {index + 1}
                              </span>
                              <h3 className="text-xl font-bold text-white">{step.title}</h3>
                            </div>
                            <p className="mt-3 text-purple-200/80">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria Section */}
        <section className="relative py-24 overflow-hidden">
          <SpaceBackdrop />

          <div className="container relative mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <Reveal className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-2" />
                  Who Can Apply
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">Eligibility Criteria</h2>
                <p className="text-lg text-purple-200/90 mb-8 max-w-2xl mx-auto">
                  Here's what we ask of everyone who applies.
                </p>
              </Reveal>

              <div className="flex flex-col lg:flex-row items-center gap-16">
                <Reveal direction="left" className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-purple-500/10 rounded-3xl blur-xl" />
                    <div className="relative aspect-square w-full max-w-lg mx-auto rounded-2xl overflow-hidden border border-purple-500/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/40 z-10" />
                      <Image
                        src="/images/competition-audience.png"
                        alt="FRC Competition with audience and competition field"
                        width={800}
                        height={600}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal
                  direction="right"
                  delay={100}
                  className="lg:w-1/2 space-y-8 flex flex-col items-center text-center lg:text-left lg:items-start"
                >
                  <ul className="space-y-4 max-w-md w-full">
                    {eligibilityCriteria.map((criterion, index) => (
                      <li key={index} className="grid grid-cols-[auto,1fr] gap-3 text-left">
                        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-purple-400" />
                        </div>
                        <span className="text-purple-200/90">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
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

