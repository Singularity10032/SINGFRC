import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Send,
  Heart,
  MessageSquare,
  Users,
  Calendar,
  DollarSign,
} from "lucide-react"

import { Textarea } from "@/components/ui/textarea"

const GOFUNDME_URL = "https://www.gofundme.com/f/support-singularity-robotics-frc-journey"

export default function ContactPage() {
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
                <MessageSquare className="w-3.5 h-3.5 mr-2" />
                Get In Touch
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  Singularity Robotics
                </span>
              </h1>
              <p className="text-lg text-purple-200/90 mb-8">
                Have questions about our team, competitions, or how to get involved? We'd love to hear from you!
              </p>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 my-6" />
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="relative py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Email Contact */}
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-purple-900/20 to-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                    <p className="text-purple-200/80 mb-4">
                      For general inquiries, sponsorship opportunities, or any questions.
                    </p>
                    <Link
                      href="mailto:info@singularityrobotics.org"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                    >
                      admin@singularityfrc.com
                    </Link>
                  </div>
                </div>

                {/* Phone Contact */}
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-purple-900/20 to-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                    <p className="text-purple-200/80 mb-4">
                      For urgent matters or if you prefer to speak directly with our team.
                    </p>
                    <Link
                      href="tel:+12144309660"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                    >
                      (214) 430-9660
                    </Link>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-purple-900/20 to-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                    <p className="text-purple-200/80 mb-4">
                      Our team is based at the following location during the school year.
                    </p>
                    <address className="not-italic text-purple-400">
                      12427 Tyler Dr.
                      <br />
                      Frisco, Texas
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Times Section */}
        <section className="relative py-16 bg-gradient-to-b from-[#0a0118] to-[#120426]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <Calendar className="w-3.5 h-3.5 mr-2" />
                  Meeting Schedule
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">When to Find Us</h2>
                <p className="text-lg text-purple-200/90">
                  Our team meets regularly throughout the school year, with increased frequency during build season.
                </p>
              </div>

              <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 mr-4">
                      <Clock className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Regular Season (September - December)</h3>
                      <ul className="space-y-2 text-purple-200/80">
                        <li className="flex items-center">
                          <span className="w-3 h-3 rounded-full bg-purple-500/40 mr-2"></span>
                          <span>Monday, Wednesday, Friday: 4:00 PM - 6:30 PM</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 rounded-full bg-purple-500/40 mr-2"></span>
                          <span>Saturday: 10:00 AM - 2:00 PM</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 mr-4">
                      <Clock className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Build Season (January - March)</h3>
                      <ul className="space-y-2 text-purple-200/80">
                        <li className="flex items-center">
                          <span className="w-3 h-3 rounded-full bg-purple-500/40 mr-2"></span>
                          <span>Monday - Friday: 4:00 PM - 8:00 PM</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 rounded-full bg-purple-500/40 mr-2"></span>
                          <span>Saturday: 9:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 rounded-full bg-purple-500/40 mr-2"></span>
                          <span>Sunday: 12:00 PM - 5:00 PM</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-purple-500/20">
                  <p className="text-purple-200/90">
                    <span className="font-semibold text-white">Note:</span> Meeting times may vary based on competition
                    schedules and school events. Please contact us to confirm before visiting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,58,180,0.15)_0%,rgba(0,0,0,0)_70%)]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                  <Send className="w-3.5 h-3.5 mr-2" />
                  Send a Message
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-lg text-purple-200/90">
                  Have a question or want to learn more about our team? Fill out the form below and we'll get back to
                  you as soon as possible.
                </p>
              </div>

              <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-purple-200 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="Subject of your message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="Your message"
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Section with GoFundMe */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,58,180,0.2)_0%,rgba(0,0,0,0)_70%)]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute inset-0">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Robotics Team"
                    width={1200}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-black/90" />
                </div>

                <div className="relative py-20 px-6 md:px-12 lg:px-16">
                  <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
                      <Heart className="w-3.5 h-3.5 mr-2" />
                      Support Our Team
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Help Fund Our Journey</h2>
                    <p className="text-lg text-purple-200/90 mb-10">
                      Building competitive robots requires resources. Your donation helps us purchase materials,
                      register for competitions, and provide opportunities for students to learn and grow through STEM
                      education.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white group"
                        asChild
                      >
                        <a
                          href={GOFUNDME_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center"
                        >
                          <DollarSign className="mr-2 h-5 w-5" />
                          Donate on GoFundMe
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white group"
                        asChild
                      >
                        <Link href="/sponsors" className="inline-flex items-center justify-center">
                          <Users className="mr-2 h-5 w-5" />
                          Become a Sponsor
                        </Link>
                      </Button>
                    </div>

                    <p className="mt-8 text-sm text-purple-300/80">
                      Singularity Robotics is a 501(c)(3) non-profit organization. All donations are tax-deductible to
                      the extent allowed by law.
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
            <p className="text-sm text-purple-400">© 2024 Singularity Robotics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

