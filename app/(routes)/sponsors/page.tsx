"use client"

import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Reveal } from "@/components/reveal"
import { SpaceBackdrop } from "@/components/space-backdrop"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail, HandHeart, FileText, MapPin, Phone } from "lucide-react"

const pastSponsors = [
  {
    name: "FIRST Robotics",
    logo: "/images/sponsors/frclogo.png",
    description:
      "FIRST (For Inspiration and Recognition of Science and Technology) is a global robotics community that prepares young people for the future through inclusive, team-based robotics programs.",
    website: "https://www.firstinspires.org/",
  },
  {
    name: "NASA",
    logo: "/images/sponsors/nasalogo.png",
    description:
      "The National Aeronautics and Space Administration (NASA) supports STEM education initiatives to inspire the next generation of explorers and innovators.",
    website: "https://www.nasa.gov/",
  },
  {
    name: "Canes",
    logo: "/images/sponsors/caneslogo.png",
    description:
      "Canes provides essential support for our team's operations and competition travel, helping us participate in regional and national events.",
    website: "https://www.canes.com/",
  },
  {
    name: "Techie Factory",
    logo: "/images/sponsors/techiefactorylogo.png",
    description:
      "Techie Factory is a local technology education center that provides workspace, tools, and technical expertise to support our robotics program.",
    website: "https://www.techiefactory.org/",
  },
  {
    name: "Texas Workforce Commission",
    logo: "/images/sponsors/texasworkforcecommissionlogo.png",
    description:
      "The Texas Workforce Commission supports robotics education as part of its initiative to develop a skilled workforce for the future of Texas.",
    website: "https://www.twc.texas.gov/",
  },
  {
    name: "Gene Haas Foundation",
    logo: "/images/sponsors/genehaasfoundationlogo.png",
    description:
      "The Gene Haas Foundation is committed to manufacturing education and provides grants to schools for CNC machine technology training and STEM programs.",
    website: "https://ghaasfoundation.org/",
  },
]

const currentSponsors = [
  {
    name: "NASA",
    logo: "/images/sponsors/nasalogo.png",
    description:
      "NASA supports STEM pathways that inspire students to explore engineering, discovery, and real-world problem solving.",
    website: "https://www.nasa.gov/",
  },
  {
    name: "Raytheon",
    logo: "/images/sponsors/raytheon.svg",
    description:
      "Raytheon is an RTX business focused on advanced defense technology, engineering, and mission-driven innovation.",
    website: "https://www.raytheon.com/en",
  },
  {
    name: "Texas Instruments",
    logo: "/images/sponsors/texasinstruments.png",
    description:
      "Texas Instruments is a Dallas-based semiconductor company helping power electronics education and modern engineering.",
    website: "https://www.ti.com/",
  },
  {
    name: "Gene Haas Foundation",
    logo: "/images/sponsors/genehaasfoundationlogo.png",
    description:
      "The Gene Haas Foundation supports manufacturing education and helps students gain access to hands-on STEM opportunities.",
    website: "https://ghaasfoundation.org/",
  },
  {
    name: "Bioworld",
    logo: "/images/sponsors/bioworld.jpg",
    description:
      "Bioworld is a global brand growth platform creating licensed merchandise programs across retail and consumer channels.",
    website: "https://www.bioworldmerch.com/",
  },
  {
    name: "Mouser Electronics",
    logo: "/images/sponsors/mouserelectronics.svg",
    description:
      "Mouser Electronics is a global distributor of electronic components, supplying the parts our team uses to build and wire the robot.",
    website: "https://www.mouser.com/",
  },
  {
    name: "LitterLoot",
    logo: "/placeholder-logo.svg",
    description:
      "LitterLoot supports our team's operations and outreach.",
    website: "https://litterloot.com/",
  },
  {
    name: "PGA of America",
    logo: "/images/sponsors/pgaofamerica.png",
    description:
      "The PGA of America is the organization behind professional golf in the U.S., supporting our team's operations and outreach.",
    website: "https://www.pga.com/",
  },
  {
    name: "Corbridge Orthodontics",
    logo: "/images/sponsors/corbridgeorthodontics.svg",
    description:
      "Corbridge Orthodontics is a Frisco-based orthodontic practice that supports local students and STEM programs like ours.",
    website: "https://corbridgeorthodontics.com/",
  },
]

export default function SponsorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0118] text-purple-100">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <SpaceBackdrop glow="center" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                <HandHeart className="w-3.5 h-3.5 mr-2" />
                Partner With Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Organizations That Make Our Work{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  Possible
                </span>
              </h1>
              <p className="text-lg text-purple-200/90 mb-4">
                Team 10032 runs on the support of these organizations and of our families. Their backing covers our
                operations and competition travel.
              </p>
              <p className="text-lg text-purple-200/90 mb-8">
                We're a registered 501(c)(3), so donations and sponsorships are tax-deductible.
              </p>
              <div className="cosmic-rule my-6" />
            </Reveal>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="relative py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <Reveal className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-white">Contact Our Team</h2>
                <p className="mx-auto max-w-2xl text-lg text-purple-200/90">
                  Reach out about sponsorships, visits, and team opportunities.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <Reveal>
                  <div className="glass-card group h-full p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">Email Us</h3>
                    <p className="mb-4 text-purple-200/80">For sponsorships, general questions, and partnership ideas.</p>
                    <Link href="mailto:admin@singularityfrc.com" className="font-medium text-purple-400 hover:text-purple-300">
                      admin@singularityfrc.com
                    </Link>
                  </div>
                </Reveal>

                <Reveal delay={90}>
                  <div className="glass-card group h-full p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                      <Phone className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">Call Us</h3>
                    <p className="mb-4 text-purple-200/80">For direct sponsorship or event coordination.</p>
                    <Link href="tel:+14697680663" className="font-medium text-purple-400 hover:text-purple-300">
                      +1-469-768-0663
                    </Link>
                  </div>
                </Reveal>

                <Reveal delay={180}>
                  <div className="glass-card group h-full p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">Visit Us</h3>
                    <p className="mb-4 text-purple-200/80">Our team is based at the following location.</p>
                    <address className="not-italic font-medium text-purple-400">
                      191 Southern Hills Dr
                    </address>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Current Sponsors Grid Section */}
        <section className="relative py-16 bg-gradient-to-b from-[#0a0118] to-[#120426]">
          <SpaceBackdrop />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <Reveal className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-white">Current Sponsors in Detail</h2>
                <p className="mx-auto max-w-2xl text-lg text-purple-200/90">
                  These partners are helping Singularity Robotics grow through the current season.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {currentSponsors.map((sponsor, index) => (
                  <Reveal key={sponsor.name} delay={(index % 3) * 90}>
                    <div className="glass-card group h-full">
                      <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-600/10 blur-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="space-y-6 p-6">
                        <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-lg bg-[#0a0118]/80 p-4">
                          <Image
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            width={240}
                            height={120}
                            className="h-auto max-h-20 w-auto max-w-[220px] object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="mb-2 text-xl font-bold text-white">{sponsor.name}</h3>
                          <p className="mb-4 text-sm text-purple-200/80">{sponsor.description}</p>
                        </div>
                        <Link
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300"
                        >
                          Visit Website
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Past Sponsors Ticker Section */}
        <section className="relative py-8 bg-gradient-to-b from-[#0a0118] to-[#120426] overflow-hidden">
          <SpaceBackdrop glow="none" />

          <div className="relative max-w-full mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white">Past Sponsors</h2>
            </div>

            {/* Ticker container with overflow hidden */}
            <div className="relative w-full overflow-hidden py-12 border-y border-purple-500/20">
              {/* Inner container that moves */}
              <div className="flex sponsors-ticker">
                {/* First set of sponsors */}
                {pastSponsors.map((sponsor, index) => (
                  <div
                    key={`sponsor-1-${index}`}
                    className="flex flex-col items-center justify-center mx-10 min-w-[220px]"
                  >
                    <div className="h-24 w-48 relative flex items-center justify-center mb-3 bg-[#0a0118]/80 rounded-lg p-2">
                      <Image
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={`${sponsor.name} logo`}
                        width={200}
                        height={100}
                        className="max-h-20 max-w-[180px] w-auto h-auto object-contain"
                      />
                    </div>
                    <span className="text-base font-medium text-purple-200 whitespace-nowrap">{sponsor.name}</span>
                  </div>
                ))}

                {/* Duplicate set for seamless looping */}
                {pastSponsors.map((sponsor, index) => (
                  <div
                    key={`sponsor-2-${index}`}
                    className="flex flex-col items-center justify-center mx-10 min-w-[220px]"
                  >
                    <div className="h-24 w-48 relative flex items-center justify-center mb-3 bg-[#0a0118]/80 rounded-lg p-2">
                      <Image
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={`${sponsor.name} logo`}
                        width={200}
                        height={100}
                        className="max-h-20 max-w-[180px] w-auto h-auto object-contain"
                      />
                    </div>
                    <span className="text-base font-medium text-purple-200 whitespace-nowrap">{sponsor.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Become a Sponsor Section */}
        <section className="relative py-24 overflow-hidden">
          <SpaceBackdrop glow="center" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-purple-500/20">
                <div className="absolute inset-0">
                  <Image
                    src="/images/competition-2-team.png"
                    alt="Singularity Robotics team at competition"
                    width={1200}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-black/90" />
                </div>

                <div className="relative py-20 px-6 md:px-12 lg:px-16">
                  <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Become a Sponsor</h2>
                    <p className="text-lg text-purple-200/90 mb-10">
                      Sponsor Team 10032 and your contribution goes directly to our students and our community work.
                      Download the packet for details, or email us and we'll set something up.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white group" asChild>
                        <Link
                          href="https://drive.google.com/file/d/1uOwNMZHO93HkUMtPvebO3xjrukH4R4OM/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Download Sponsorship Packet
                        </Link>
                      </Button>
                      <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white group" asChild>
                        <Link
                          href="mailto:admin@singularityfrc.com"
                          className="inline-flex items-center justify-center"
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Email Us
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Sponsorship Benefits Section */}
        <section className="relative py-20">
          <SpaceBackdrop />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Reveal className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Sponsorship Benefits</h2>
                <p className="text-lg text-purple-200/90">
                  Here's what sponsors get, and where the support goes.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Brand Visibility</h3>
                  <ul className="space-y-2 text-purple-200/80">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Logo on our robot, team uniforms, and website</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Recognition at competitions and community events</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Mentions in press releases and social media</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Community Impact</h3>
                  <ul className="space-y-2 text-purple-200/80">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Support STEM education in our community</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Help develop future engineers and innovators</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Contribute to workforce development</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Team Engagement</h3>
                  <ul className="space-y-2 text-purple-200/80">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Opportunities for team demonstrations at your facility</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Mentorship and internship connections</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Invitations to team events and competitions</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Tax Benefits</h3>
                  <ul className="space-y-2 text-purple-200/80">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Tax-deductible contributions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Documentation for corporate social responsibility initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Annual impact reports for your records</span>
                    </li>
                  </ul>
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

