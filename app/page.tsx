import Image from "next/image"
import Link from "next/link"
import { ResultsMarquee } from "@/components/results-marquee"
import { StickerPhoto } from "@/components/sticker-photo"
import { Reveal } from "@/components/reveal"
import { photos } from "@/lib/photos"
import { orionPhotos, teamPhotos } from "@/lib/gallery"

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

// Hero photos: the full-team shot and ORION on the field. Used only here
// (/team and /robots slice past them).
const heroLeft = teamPhotos[0]
const heroRight = orionPhotos[0]

export default function Home() {
  return (
    <div>
      {/* Hero: three layers. A giant outlined "10032" sits behind, two sticker
          photos poke in from the edges in the middle, the headline sits on top.
          Wording is dad's (2026-09-15). The minigame, the Orion chart and the
          stat row that used to be here were all cut the same day at his request. */}
      <section className="relative mx-auto max-w-6xl overflow-hidden px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-24">
        <p
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-4 -z-10 -translate-x-1/2 select-none whitespace-nowrap font-display text-[38vw] font-extrabold leading-none text-transparent sm:text-[22rem]"
          style={{ WebkitTextStroke: "2px rgba(255,248,238,0.10)" }}
        >
          10032
        </p>

        <div className="pointer-events-none absolute -left-10 top-10 hidden w-56 md:block lg:w-72">
          <StickerPhoto src={heroLeft.src} width={heroLeft.width} height={heroLeft.height} alt={heroLeft.alt} index={0} className="w-full" sizes="288px" priority />
        </div>
        <div className="pointer-events-none absolute -right-10 bottom-16 hidden w-56 md:block lg:w-72">
          <StickerPhoto src={heroRight.src} width={heroRight.width} height={heroRight.height} alt={heroRight.alt} index={3} className="w-full" sizes="288px" priority />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="font-display text-[12vw] leading-[0.95] sm:text-6xl md:text-7xl">
            <span className="block">1 Team.</span>
            <span className="block">1 Vision.</span>
            <span className="block text-arcade-purple">Infinite Possibilities.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-paper/80">
            Singularity Robotics is a FIRST Robotics Competition team from Frisco, Texas. Students design, build,
            program and fund every part of it.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/apply" className="btn-pill bg-arcade-purple text-paper">
              Join the team
            </Link>
            <Link href="/sponsors" className="btn-pill bg-paper text-ink">
              Sponsor us
            </Link>
          </div>
        </div>
      </section>

      {/* What we do: sticker photos that hang over the results ticker below */}
      <section className="relative z-10 mx-auto -mb-12 max-w-6xl px-4 pt-8 sm:px-6">
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
                <div className="rounded-xl border-2 border-ink bg-paper p-3 text-ink shadow-hard">
                  <StickerPhoto src={photo.src} width={photo.width} height={photo.height} alt={alt} index={i} className="w-full" />
                  <h3 className="mt-4 font-display text-lg">{card.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{card.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Results marquee: the layer the cards above sit on */}
      <div className="pt-16">
        <ResultsMarquee />
      </div>

      {/* Magazine + BIOCORE: two cards, the second tucked under the first */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="relative z-10 -mt-8 grid gap-8 rounded-xl border-2 border-ink shadow-hard bg-arcade-sky p-6 text-ink sm:grid-cols-[auto_1fr] sm:items-center sm:p-10">
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

        {/* Next season teaser (dad, 2026-09-15). The only facts here are the
            ones on FIRST's own teaser graphic: game name, presenter, launch date. */}
        <Reveal delay={80}>
          <div
            className="relative -mt-4 ml-4 mr-0 grid gap-8 rounded-xl border-2 border-ink shadow-hard bg-arcade-mint p-6 text-ink sm:-mt-6 sm:ml-12 sm:grid-cols-[auto_1fr] sm:items-center sm:p-10"
            style={{ rotate: "0.6deg" }}
          >
            <Image
              src="/images/biocore.jpeg"
              alt="FIRST Robotics Competition BIOCORE, presented by Haas, launches January 9, 2027"
              width={640}
              height={356}
              className="mx-auto w-full max-w-xs rounded-xl border-2 border-ink shadow-hard sm:mx-0"
            />
            <div>
              <span className="inline-block rounded-full border-2 border-ink bg-arcade-fuel px-3 py-1 text-xs font-extrabold">
                Coming soon
              </span>
              <h2 className="mt-3 font-display text-3xl">BIOCORE, the 2027 game</h2>
              <p className="mt-3 max-w-lg text-ink/80">
                FIRST&apos;s next Robotics Competition game, presented by Haas, launches January 9, 2027. Our third
                season starts at kickoff; build progress will show up here and on @singularityfrc.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Follow */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <Reveal>
          <div className="rounded-xl border-2 border-ink shadow-hard bg-arcade-purple p-8 text-center text-paper sm:p-14">
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
