import Image from "next/image"
import Link from "next/link"
import { FuelCatch } from "@/components/fuel-catch"
import { ResultsMarquee } from "@/components/results-marquee"
import { StickerPhoto } from "@/components/sticker-photo"
import { Reveal } from "@/components/reveal"
import { photos } from "@/lib/photos"

const stats = [
  { value: "36", label: "students" },
  { value: "2", label: "seasons" },
  { value: "1", label: "blue banner (Fort Worth 2026)" },
]

const whatWeDo = [
  {
    title: "Competition",
    body: "We build a new robot every season and compete in FIRST in Texas district events.",
  },
  {
    title: "Engineering",
    body: "Members design in CAD, machine and assemble parts, wire the electronics, and write the robot code.",
  },
  {
    title: "Community",
    body: "We mentor younger teams and run STEM outreach around Frisco.",
  },
  {
    title: "Learning by doing",
    body: "Nobody joins knowing everything. New members learn on real hardware from day one.",
  },
]

const cardFills = ["bg-arcade-sky", "bg-arcade-mint", "bg-arcade-fuel", "bg-paper"]

export default function Home() {
  return (
    <div>
      {/* Hero: minigame + headline */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pt-16 md:grid-cols-2 md:items-center md:gap-8">
        <div className="order-2 md:order-1">
          <h1 className="font-display text-[13vw] leading-[0.95] sm:text-5xl md:text-6xl">
            We build the robot. We run the team.
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink/80">
            Singularity Robotics is a FIRST Robotics Competition team from Frisco, Texas. Students design, build,
            program and fund every part of it.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/apply" className="btn-pill bg-arcade-purple text-paper">
              Join the team
            </Link>
            <Link href="/sponsors" className="btn-pill bg-paper text-ink">
              Sponsor us
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <FuelCatch />
        </div>
      </section>

      {/* Stat row */}
      <Reveal>
        <section className="border-y-2 border-ink bg-ink text-paper">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-5xl font-extrabold tabular-nums text-arcade-fuel">{s.value}</p>
                <p className="mt-1 text-sm text-paper/80">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* What we do: sticker photos on a desk */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl">What we do</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-6">
          {[
            { photo: photos.sticker1, alt: "ORION on the field surrounded by yellow fuel balls", card: whatWeDo[0] },
            { photo: photos.sticker3, alt: "A student hugging the bare robot chassis in the gym", card: whatWeDo[1] },
            { photo: photos.sticker2, alt: "Students in a car, candid, smiling", card: whatWeDo[2] },
            { photo: photos.sticker4, alt: "Two students holding a trophy, crowd behind", card: whatWeDo[3] },
          ].map(({ photo, alt, card }, i) => (
            <Reveal key={card.title} delay={i * 80}>
              <div className="flex flex-col items-center text-center">
                <StickerPhoto src={photo.src} width={photo.width} height={photo.height} alt={alt} index={i} className="w-full" />
                <h3 className="mt-4 font-display text-lg">{card.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Results marquee */}
      <ResultsMarquee />

      {/* Magazine */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="grid gap-8 rounded-xl border-2 border-ink bg-arcade-sky p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:p-10">
            <Image
              src="/images/horizon-magazine-2026.png"
              alt="Horizon, our season magazine, volume 2 issue 1 cover"
              width={216}
              height={280}
              className="mx-auto rounded-xl border-2 border-ink shadow-hard sm:mx-0"
            />
            <div>
              <h2 className="font-display text-3xl">Horizon, our season magazine</h2>
              <p className="mt-3 max-w-lg text-ink/80">
                Vol. II, issue 1: build recap, the garage, competition recap, Frisco Ignite, FLL mentorship, the
                arcade, interviews from the pit.
              </p>
              <a
                href="https://drive.google.com/file/d/1WTiEvd9SGteosK9-qp3lGhZLep4yNeCR/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-pill mt-5 inline-flex bg-paper text-ink"
              >
                Read the 2026 issue
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Follow */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <Reveal>
          <div className="rounded-xl border-2 border-ink bg-arcade-purple p-8 text-center text-paper sm:p-14">
            <h2 className="font-display text-3xl sm:text-4xl">Follow along</h2>
            <p className="mx-auto mt-3 max-w-md text-paper/85">
              We post build progress, competition updates and outreach on Instagram and TikTok as @singularityfrc.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
