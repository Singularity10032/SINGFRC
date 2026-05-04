"use client"

import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Users,
  Lightbulb,
  HelpCircle,
  ChevronRight,
} from "lucide-react"

const APPLICATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdxXEqo61gHjgszNQ6uFRoVZRYrkYnlj9LC4Ldm68heYH7dAQ/viewform?usp=dialog"

const eligibilityCriteria = [
  "Currently enrolled in high school (grades 9-12)",
  "Interest in robotics, engineering, programming, or business/marketing",
  "Commitment to attend team meetings and events",
  "Willingness to learn and work collaboratively",
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

const faqs = [
  {
    question: "Do I need prior robotics experience?",
    answer:
      "No prior experience is required! We welcome students of all skill levels and provide training in all aspects of robotics.",
  },
  {
    question: "How much time commitment is expected?",
    answer:
      "During build season (January-March), we meet everyday including weekends. Outside of build season, we typically meet 3-4 times per week.",
  },
  {
    question: "Are there any fees required to join the team?",
    answer: "Yes, there is a team fee to cover basic expenses.",
  },
  {
    question: "What roles are available on the team?",
    answer:
      "We have roles in mechanical engineering, electrical engineering, programming, CAD design, business, marketing, outreach, and more!",
  },
]

export default function ApplyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0118] text-purple-100">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,58,180,0.15)_0%,rgba(0,0,0,0)_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                <Users className="w-3.5 h-3.5 mr-2" />
                Join Our Team
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Become Part of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  Something Extraordinary
                </span>
              </h1>
              <p className="text-lg text-purple-200/90 mb-10 max-w-2xl mx-auto">
                Team 10032 Singularity Robotics is looking for passionate, creative students to join our award-winning
                robotics team. No experience necessary—just bring your enthusiasm and willingness to learn!
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
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section id="application-process" className="relative py-24 bg-gradient-to-b from-[#0a0118] to-[#120426]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <FileText className="w-3.5 h-3.5 mr-2" />
                  How to Apply
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Application Process</h2>
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 my-6" />
                <p className="max-w-2xl mx-auto text-lg text-purple-200/90">
                  Our application process is designed to help us get to know you and find the best fit for your skills
                  and interests on our team.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {applicationSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-xl bg-gradient-to-b from-purple-900/20 to-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  >
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
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,58,180,0.15)_0%,rgba(0,0,0,0)_70%)]" />

          <div className="container relative mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto">
              {/* Add text-center class to the section header for consistent centering */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-2" />
                  Who Can Apply
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">Eligibility Criteria</h2>
                <p className="text-lg text-purple-200/90 mb-8 max-w-2xl mx-auto">
                  We're looking for students who are passionate about learning and working together to solve complex
                  problems.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 relative">
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

                {/* Center the eligibility criteria content */}
                <div className="lg:w-1/2 space-y-8 flex flex-col items-center text-center lg:text-left lg:items-start">
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

                  <div className="bg-purple-900/20 border border-purple-500/20 rounded-xl p-6 w-full max-w-md">
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Important Dates</h3>
                        <ul className="space-y-2 text-purple-200/90">
                          <li className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-purple-500/40 mr-2"></span>
                            <span>Application Opens: May 1, 2025</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-purple-500/40 mr-2"></span>
                            <span>Application Deadline: August 1, 2025</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-purple-500/40 mr-2"></span>
                            <span>Interviews: August 1-10, 2025</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-purple-500/40 mr-2"></span>
                            <span>Team Announcements: September 5, 2025</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 bg-gradient-to-b from-[#120426] to-[#0a0118]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <HelpCircle className="w-3.5 h-3.5 mr-2" />
                  Common Questions
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 my-6" />
              </div>

              <div className="grid gap-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-purple-200/90">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-purple-200/90 mb-4">Have more questions? Feel free to reach out to us!</p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                  <Link
                    href="mailto:info@singularityrobotics.org"
                    className="inline-flex items-center"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,58,180,0.2)_0%,rgba(0,0,0,0)_70%)]" />

          <div className="container relative mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute inset-0">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Robotics Team Working"
                    width={1200}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-black/90" />
                </div>

                <div className="relative py-20 px-6 md:px-12 lg:px-16">
                  <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Ready to Join Singularity Robotics?
                    </h2>
                    <p className="text-lg text-purple-200/90 mb-10">
                      Take the first step toward an incredible journey of innovation, teamwork, and robotics excellence.
                      Apply today to become part of our award-winning team!
                    </p>

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
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>

                    <p className="mt-6 text-sm text-purple-300">
                      <Clock className="inline-block w-4 h-4 mr-1 mb-1" />
                      Application Deadline: July 1, 2025
                    </p>
                  </div>
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

