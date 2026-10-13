import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { BlobEdge, band } from "@/components/blob-edge"
import { CadathonAwards, type Division } from "@/components/cadathon-awards"
import { SHOW_JC_SPONSORS, JC_LOGOS } from "@/lib/flags"

export const metadata: Metadata = {
  title: "Singularity CADathon 2026 | Online CAD Competition by Frisco FRC Team 10032",
  description:
    "A free online CADathon for students, run by Singularity Robotics, a Frisco, Texas FRC robotics team. Junior (13 and under) and Senior (14 and up) divisions.",
}

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd3RL3jfIAdqNWFbDINjCdI9lTLIMrufMAkCkS_cCzZd2almA/viewform"

// Start date (Nov 14) is set but subject to change. Judges and supporters
// are still placeholders. The theme gets a short teaser; the
// full challenges are revealed only at Opening on the day.

// Two divisions, open to anyone, split by age on November 14. You can play up
// (a 12-year-old may enter Senior), never down. Content scales up from Junior
// to Senior.
const divisions = [
  {
    name: "Junior",
    age: "Ages 13 and under",
    fill: "bg-arcade-mint",
  },
  {
    name: "Senior",
    age: "Ages 14 and up",
    fill: "bg-arcade-fuel",
  },
]

// Awards as set by Mohan (2026-10-13). Dollar prizes need new funding, so the
// page says they're subject to change. No company is named on the page until it
// confirms in writing.
const awards: Division[] = [
  {
    key: "junior",
    name: "Junior",
    age: "13 and under",
    fill: "bg-arcade-mint",
    places: [
      { place: "1st", prize: "$100 + your design 3D-printed", sub: "LEGO or Amazon gift card", details: ["A 30-minute design review with 10032", "Featured on our home page and socials"] },
      { place: "2nd", prize: "$60 + your design 3D-printed", sub: "LEGO or Amazon gift card", details: ["Featured on our home page and socials"] },
      { place: "3rd", prize: "$30 + your design 3D-printed", sub: "LEGO or Amazon gift card", details: ["Featured on our home page and socials"] },
    ],
  },
  {
    key: "senior",
    name: "Senior",
    age: "14 and up",
    fill: "bg-arcade-fuel",
    places: [
      { place: "1st", prize: "$250 + your design 3D-printed", details: ["A 30-minute design review with 10032", "Featured on our home page and socials"] },
      { place: "2nd", prize: "$150 + your design 3D-printed", details: ["A 30-minute design review with 10032", "Featured on our home page and socials"] },
      { place: "3rd", prize: "$75 + your design 3D-printed", details: ["Featured on our home page and socials"] },
    ],
  },
]

const everyonePlaces = [
  "Your design 3D-printed and mailed to you",
  "Featured on singularity-frc.com and our Instagram, TikTok, LinkedIn and YouTube",
  "Added to the winners gallery",
  "A placing certificate",
]


const faq = [
  { q: "Do I need CAD experience?", a: "No. First-timers are welcome, and there will be help getting started." },
  { q: "What do I need?", a: "A computer with a web browser. The CAD tools we use are free." },
  { q: "Which division should I pick?", a: "Go by your age on November 14. If you're 13 or under, enter Junior, or play up into Senior if you want a harder challenge. If you're 14 or older, enter Senior. You can always play up, but never down." },
  { q: "Can I join without a robotics team?", a: "Yes. The CADathon is open to anyone. Enter solo or team up with friends." },
  { q: "Can my robotics team enter more than one CADathon team?", a: "Yes. Split up however you like, and mix with students from other teams." },
  { q: "What's the theme?", a: "A mission in orbit. The full challenge is revealed at Opening, so everyone starts from zero at the same time." },
  { q: "When is it?", a: "It starts Saturday, November 14, 2026. The date may still change; registered teams hear first." },
]

export default function CadathonPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24">
        <Reveal>
          <h1 className="mt-2 font-display text-4xl leading-[1.02] sm:text-6xl">Singularity CADathon 2026</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-paper/80">
            One theme, revealed live. A clock. Design a robot from nothing. Two divisions, Junior and Senior,
            open to anyone, judged by people who do this for a living.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex flex-col rounded-2xl border-2 border-paper/30 px-4 py-2 text-sm font-semibold text-paper/85">
              Starts Saturday, November 14, 2026
              <span className="text-xs font-normal text-paper/60">Date subject to change</span>
            </span>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-pill bg-arcade-bumper text-paper">
              Register
            </a>
          </div>
          <p className="mt-3 text-xs text-paper/60">
            Opens the registration form in a new tab. By registering you agree to the{" "}
            <a href="/cadathon/code-of-conduct" className="underline">code of conduct</a>.
          </p>
        </Reveal>
      </section>

      {/* Divisions overview */}
      <BlobEdge fill={band.deep} />
      <section className="bg-deep">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Two divisions</h2>
          </Reveal>
          <Reveal>
            <div className="mx-auto mt-8 max-w-3xl rounded-xl border-2 border-dashed border-arcade-fuel/70 p-5 text-center sm:p-6">
              <p className="text-xs font-extrabold uppercase tracking-widest text-arcade-fuel">Mission briefing</p>
              <p className="mt-3 text-paper/90">
                Something has gone wrong in orbit. A station needs help that only a robot can give, and your team has
                one shot to design it. Every division gets the same mission, with a different job to do.
              </p>
              <p className="mt-3 text-sm text-paper/60">
                The full challenge is revealed at Opening on November 14. No participant sees it early.
              </p>
            </div>
          </Reveal>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
            {divisions.map((d, i) => (
              <Reveal key={d.name} delay={i * 70}>
                <div
                  className={`h-full rounded-xl border-2 border-ink p-5 text-center text-ink shadow-hard ${d.fill}`}
                  style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * 0.6}deg` }}
                >
                  <p className="font-display text-3xl font-extrabold text-arcade-purple sm:text-4xl">{d.name}</p>
                  <p className="mt-2 inline-flex rounded-full border-2 border-ink bg-paper px-3 py-0.5 text-xs font-extrabold uppercase tracking-wide">
                    {d.age}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl rounded-xl border-2 border-ink bg-paper p-5 text-center text-ink shadow-hard sm:p-6">
              <h3 className="font-display text-2xl">How teams work</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                <li><span className="font-semibold">You can play up, never down.</span> Juniors can enter Senior; anyone 14 or older enters Senior. A team with any member 14 or older is a Senior team.</li>
                <li><span className="font-semibold">Teams of 1 to 4.</span> Going solo is a team of one.</li>
                <li><span className="font-semibold">Mix freely.</span> Teammates can come from different robotics teams, different schools, or no team at all.</li>
                <li><span className="font-semibold">One robotics team can enter several CADathon teams,</span> in any divisions.</li>
                <li><span className="font-semibold">Every student fills in their own form,</span> with the same CADathon team name as their teammates. That&apos;s how we group you.</li>
              </ul>
            </div>
          </Reveal>
        </div>
        <BlobEdge fill={band.sky} />
      </section>

      {/* Awards + judges */}
      <section className="bg-arcade-sky text-ink">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl sm:text-4xl">Awards</h2>
            <p className="mt-2 text-center text-sm font-semibold text-ink/70">
              Brought to you by Singularity Robotics, FRC 10032
            </p>
          </Reveal>
          <div className="mt-8">
            <CadathonAwards divisions={awards} />
          </div>
          <Reveal>
            <div className="mx-auto mt-6 max-w-3xl rounded-xl border-2 border-dashed border-ink bg-paper/70 p-5 text-center sm:p-6">
              <h3 className="font-display text-2xl">Judges&apos; Choice Awards</h3>
              <p className="mt-1 text-xs font-extrabold uppercase tracking-wide text-ink/60">Open to both divisions</p>
              {SHOW_JC_SPONSORS && (
                <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {JC_LOGOS.map((l) => (
                    <li key={l.name} className="flex h-20 items-center justify-center rounded-lg border-2 border-ink bg-white p-3">
                      <img src={l.src} alt={l.name} width={l.width} height={l.height} className="max-h-12 w-auto max-w-full object-contain" />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
          <Reveal>
            <div className="mx-auto mt-6 max-w-xl rounded-xl border-2 border-ink bg-paper p-5 text-center">
              <h3 className="font-display text-xl">Everyone who places</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {everyonePlaces.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <p className="mt-4 text-center text-xs text-ink/60">Prizes are subject to change.</p>
          <Reveal>
            <p className="mt-10 text-center font-display text-2xl">Judges: announcing soon.</p>
          </Reveal>
        </div>
        <BlobEdge fill={band.space} />
      </section>

      {/* Supporters */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">Supported by</h2>
          <p className="mx-auto mt-3 max-w-xl text-paper/75">
            Want your company here? Sponsor a prize, present a Judges&apos; Choice award, send a judge, or give a talk to
            the next generation of engineers.
          </p>
        </Reveal>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex h-20 items-center justify-center rounded-xl border-2 border-dashed border-paper/30 text-sm font-semibold text-paper/50"
            >
              Your logo
            </div>
          ))}
        </div>
        <a href="mailto:admin@singularityfrc.com?subject=Supporting%20the%20CADathon" className="btn-pill mt-8 bg-arcade-fuel text-ink">
          Become a supporter
        </a>
      </section>

      {/* Sign up */}
      <BlobEdge fill={band.purple} />
      <section id="signup" className="scroll-mt-24 bg-arcade-purple text-paper">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6">
          <div className="mx-auto max-w-lg rounded-xl border-2 border-ink bg-paper p-6 text-center text-ink shadow-hard sm:p-8">
            <p className="font-display text-2xl">Register a student</p>
            <ol className="mt-4 space-y-2 text-sm leading-relaxed">
              <li><span className="font-semibold">1.</span> Pick your team and a team name. Teams are 1 to 4 people.</li>
              <li><span className="font-semibold">2.</span> Every student fills in the form, using the exact same team name.</li>
              <li><span className="font-semibold">3.</span> Students under 18 need a parent or guardian&apos;s email and consent.</li>
            </ol>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-pill mt-6 w-full bg-arcade-bumper text-paper">
              Register
            </a>
            <p className="mt-3 text-xs text-ink/60">
              Opens the registration form in a new tab. By registering you agree to the{" "}
              <a href="/cadathon/code-of-conduct" className="underline">code of conduct</a>.
            </p>
          </div>
        </div>
        <BlobEdge fill={band.deep} />
      </section>

      {/* FAQ */}
      <section className="bg-deep">
        <div className="mx-auto max-w-3xl px-4 pb-16 pt-6 sm:px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl sm:text-4xl">FAQ</h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="group rounded-xl border-2 border-ink bg-paper px-5 py-4 text-ink shadow-hard-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="font-display text-xl transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-paper/70">
            Questions? <a className="underline" href="mailto:admin@singularityfrc.com?subject=CADathon">admin@singularityfrc.com</a>
            {" · "}
            <a className="underline" href="/cadathon/code-of-conduct">Code of conduct</a>
          </p>
        </div>
        <BlobEdge fill={band.deep} flip className="mb-16" />
      </section>
    </div>
  )
}
