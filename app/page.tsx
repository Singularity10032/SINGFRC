import Image from "next/image"
import Link from "next/link"
import { StickerPhoto } from "@/components/sticker-photo"
import { Reveal } from "@/components/reveal"
import { BlobEdge, band } from "@/components/blob-edge"
import { photos } from "@/lib/photos"

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

export default function Home() {
  return (
    <div>
      {/* Hero: a giant outlined "10032" behind the headline. Wording is dad's
          (2026-09-15). The minigame, the Orion chart, the stat row and two hero
          photos that used to be here were all cut the same day at his request. */}
      <section className="relative mx-auto max-w-6xl overflow-hidden px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-24">
        <p
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-4 -z-10 -translate-x-1/2 select-none whitespace-nowrap font-display text-[38vw] font-extrabold leading-none text-transparent sm:text-[22rem]"
          style={{ WebkitTextStroke: "2px rgba(255,248,238,0.10)" }}
        >
          10032
        </p>


        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="font-display text-[12vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">1 Team.</span>
            <span className="block">1 Vision.</span>
            <span className="block text-arcade-purple">Infinite Possibilities.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-paper/80 sm:mt-8 sm:max-w-2xl sm:text-xl md:text-2xl">
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

      {/* What we do: a raised band with blob edges, cards sit flat on it */}
      <BlobEdge fill={band.deep} />
      <section className="bg-deep">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl">What we do</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-6">
          {[
            // Order set by dad, 2026-09-15: trophy shot for Competition, a detailed
            // robot for Engineering, the chassis-hug for Learning by doing.
            { photo: photos.sticker4, alt: "Two students holding a trophy, crowd behind", card: whatWeDo[0] },
            { photo: photos.engineering, alt: "ORION mid-match on the field", card: whatWeDo[1] },
            { photo: photos.sticker2, alt: "Students in a car, candid, smiling", card: whatWeDo[2] },
            { photo: photos.sticker3, alt: "A student hugging the bare robot chassis in the gym", card: whatWeDo[3] },
          ].map(({ photo, alt, card }, i) => (
            <Reveal key={card.title} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col items-center text-center">
                {/* Every card the same shape: photos cropped to 4:3 so the four line up
                    whatever the source aspect (dad, 2026-09-16). */}
                <div className="flex h-full w-full flex-col rounded-xl border-2 border-ink bg-paper p-3 text-ink shadow-hard">
                  <StickerPhoto src={photo.src} width={photo.width} height={photo.height} alt={alt} index={i} className="block aspect-[4/3] w-full" />
                  <h3 className="mt-4 font-display text-lg sm:text-2xl">{card.title}</h3>
                  <p className="mt-1 text-sm text-ink/70 sm:mt-2 sm:text-base">{card.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        </div>
        <BlobEdge fill={band.sky} />
      </section>

      {/* Horizon: sky band (dad, 2026-09-15: the cards become blob bands) */}
      <section className="bg-arcade-sky text-ink">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center px-4 pb-16 pt-6 text-center sm:px-6 sm:pb-20">
            <Image
              src="/images/horizon-magazine-2026.png"
              alt="Horizon, our season magazine, volume 2 issue 1 cover"
              width={216}
              height={280}
              className="rounded-xl border-2 border-ink shadow-hard"
            />
            <div className="mt-8">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">Horizon, our season magazine</h2>
              <p className="mx-auto mt-3 max-w-lg text-ink/80 sm:mt-4 sm:max-w-xl sm:text-lg md:text-xl">
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
        <BlobEdge fill={band.mint} />
      </section>

      {/* BIOCORE: mint band. The only facts here are the ones on FIRST's own
          teaser graphic: game name, presenter, launch date. */}
      <section className="bg-arcade-mint text-ink">
        <Reveal delay={80}>
          <div className="mx-auto flex max-w-3xl flex-col items-center px-4 pb-16 pt-6 text-center sm:px-6 sm:pb-20">
            <Image
              src="/images/biocore.jpeg"
              alt="FIRST Robotics Competition BIOCORE, presented by Haas, launches January 9, 2027"
              width={640}
              height={356}
              className="w-full max-w-sm rounded-xl border-2 border-ink shadow-hard"
            />
            <div className="mt-8">
              <span className="inline-block rounded-full border-2 border-ink bg-arcade-fuel px-3 py-1 text-xs font-extrabold sm:text-sm">
                Coming soon
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">BIOCORE, the 2027 game</h2>
              <p className="mx-auto mt-3 max-w-lg text-ink/80 sm:mt-4 sm:max-w-xl sm:text-lg md:text-xl">
                FIRST&apos;s next Robotics Competition game, presented by Haas, launches January 9, 2027. Our third
                season starts at kickoff; build progress will show up here and on @singularityfrc.
              </p>
            </div>
          </div>
        </Reveal>
        <BlobEdge fill={band.purple} />
      </section>

      {/* Follow: purple band, blob edge back out to the stars */}
      <section className="bg-arcade-purple text-paper">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 text-center sm:px-6 sm:pb-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">Follow along</h2>
            <p className="mx-auto mt-3 max-w-md text-paper/85 sm:mt-4 sm:max-w-lg sm:text-lg md:text-xl">
              We post build progress, competition updates and outreach on Instagram and TikTok as @singularityfrc.
            </p>
          </div>
        </Reveal>
      </section>
      <BlobEdge fill={band.purple} flip className="mb-16" />
    </div>
  )
}
