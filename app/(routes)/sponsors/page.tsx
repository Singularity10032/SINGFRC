import type { Metadata } from "next"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { CopyEmail } from "@/components/copy-email"
import { sponsors } from "@/lib/sponsors"

export const metadata: Metadata = {
  title: "Sponsors — Singularity Robotics",
  description: "FRC Team 10032, a student-led FIRST Robotics Competition team in Frisco, Texas.",
}

export default function SponsorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="font-display text-4xl sm:text-5xl">The people who keep the lights on.</h1>
      </Reveal>
      <Reveal delay={60}>
        <p className="prose-arcade mt-5 max-w-2xl">
          Team 10032 runs on the support of these organizations and of our families. Their backing covers
          operations and competition travel. We are a registered 501(c)(3), so donations and sponsorships are
          tax-deductible.
        </p>
      </Reveal>

      {/* One grid, every sponsor, each tile links out (dad, 2026-09-15). Tiles
          are plain white or black so every mark reads; hover lifts the tile. */}
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {sponsors.map((logo, i) => {
          const tile = (
            <div
              className={`flex h-32 items-center justify-center rounded-xl border-2 p-4 shadow-hard transition-transform duration-200 ease-out group-hover:-translate-y-1 ${
                logo.tile === "black" ? "border-paper/40 bg-black" : "border-ink bg-white"
              }`}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                sizes="(max-width: 640px) 45vw, 260px"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          )
          return (
            <Reveal key={logo.name} delay={i * 40}>
              {logo.url ? (
                <a href={logo.url} target="_blank" rel="noreferrer" aria-label={`${logo.name} website`} className="group block">
                  {tile}
                </a>
              ) : (
                <div className="group" title={logo.name}>{tile}</div>
              )}
            </Reveal>
          )
        })}
      </div>

      <Reveal>
        <div className="mt-16 rounded-xl border-2 border-ink shadow-hard bg-arcade-purple p-8 text-paper sm:p-12">
          <h2 className="font-display text-3xl">Become a sponsor</h2>
          <p className="mt-3 max-w-xl text-paper/85">
            Sponsor Team 10032 and your contribution goes to our students and our community work. Read the packet,
            or email us and we&apos;ll set something up.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1uOwNMZHO93HkUMtPvebO3xjrukH4R4OM/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn-pill bg-arcade-fuel text-ink"
            >
              Sponsorship packet
            </a>
            <CopyEmail email="admin@singularityfrc.com" />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-12">
          <h2 className="font-display text-2xl">What sponsors get</h2>
          <ul className="prose-arcade mt-4 space-y-2">
            <li>Your logo on the robot, our shirts and this site.</li>
            <li>A thank-you at competitions and in our posts.</li>
            <li>A tax receipt.</li>
          </ul>
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-10 text-sm text-paper/70">
          Contact: <a href="mailto:admin@singularityfrc.com" className="underline">admin@singularityfrc.com</a> ·{" "}
          <a href="tel:+14697680663" className="underline">+1 469-768-0663</a>
        </p>
      </Reveal>
    </div>
  )
}
