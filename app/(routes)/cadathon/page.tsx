import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { BlobEdge, band } from "@/components/blob-edge"
import { CadathonSignup } from "@/components/cadathon-signup"

export const metadata: Metadata = {
  title: "Event Horizon CADathon — Singularity Robotics",
  description:
    "A free, online CADathon for FLL, FTC and FRC students, hosted by FRC Team 10032 Singularity Robotics.",
}

// Anything not yet official is a placeholder marked TBA: dates, schedule,
// prizes, judges and supporters. The theme and challenges are revealed only
// at Opening, so this page gives an overview of the divisions and nothing more.

function Tba({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border-2 border-dashed border-current px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide ${className}`}
    >
      TBA
    </span>
  )
}

const divisions = [
  { name: "FLL", who: "Elementary and middle school", note: "A shorter session, with your coach", fill: "bg-arcade-mint" },
  { name: "FTC", who: "Middle and high school", note: "The full CADathon", fill: "bg-arcade-sky" },
  { name: "FRC", who: "High school", note: "The full CADathon", fill: "bg-arcade-fuel" },
]

const prizes = ["1st place", "2nd place", "3rd place"]
const judges = ["Industry judge", "Industry judge", "Industry judge", "Industry judge"]

const safety = [
  "Screened adults are on duty for the whole event.",
  "Direct messages are turned off. All help happens where staff can see it.",
  "Younger students join with their coach.",
  "Students under 18 need a parent's consent to register.",
  "Nobody has to stay up overnight.",
]

const faq = [
  { q: "Do I need CAD experience?", a: "No. Beginners are welcome, and there will be help for first-timers." },
  { q: "What do I need?", a: "A computer with a web browser. The CAD tools we use are free." },
  { q: "Can I join without a FIRST team?", a: "Yes. Pick the division that fits your grade." },
  { q: "What's the theme?", a: "It's a secret until Opening. Everyone starts from zero at the same time." },
  { q: "When is it?", a: "Dates are coming soon. Join the waitlist and you'll hear first." },
]

export default function CadathonPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24">
        <Reveal>
          <p className="text-sm font-semibold text-arcade-fuel">Hosted by FRC Team 10032 · Online · Free</p>
          <h1 className="mt-2 font-display text-4xl leading-[1.02] sm:text-6xl">Event Horizon CADathon</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-paper/80">
            One theme, revealed live. A clock. Design a robot from nothing. Divisions for FLL, FTC and FRC students,
            judged by people who do this for a living.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-paper/30 px-4 py-2 text-sm font-semibold text-paper/85">
              Dates <Tba className="text-arcade-fuel" />
            </span>
            <a href="#signup" className="btn-pill bg-arcade-bumper text-paper">
              Join the waitlist
            </a>
          </div>
        </Reveal>
      </section>

      {/* Divisions overview */}
      <BlobEdge fill={band.deep} />
      <section className="bg-deep">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Three divisions</h2>
            <p className="mx-auto mt-3 max-w-xl text-paper/75">
              Each division gets its own challenge. The theme and every challenge stay secret until Opening.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {divisions.map((d, i) => (
              <Reveal key={d.name} delay={i * 70}>
                <div
                  className={`h-full rounded-xl border-2 border-ink p-5 text-left text-ink shadow-hard ${d.fill}`}
                  style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * 0.6}deg` }}
                >
                  <p className="font-display text-4xl font-extrabold text-arcade-purple">{d.name}</p>
                  <p className="mt-2 font-semibold">{d.who}</p>
                  <p className="mt-1 text-sm text-ink/75">{d.note}</p>
                  <p className="mt-4 flex items-center gap-2 text-sm font-semibold">
                    Challenge <span className="font-display text-lg">???</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <BlobEdge fill={band.sky} />
      </section>

      {/* Prizes + judges */}
      <section className="bg-arcade-sky text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="flex flex-wrap items-center gap-3 font-display text-3xl sm:text-4xl">
                Prizes <Tba />
              </h2>
              <p className="mt-2 text-sm text-ink/70">Prizes in every division. Details coming soon.</p>
            </Reveal>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {prizes.map((p, i) => (
                <Reveal key={p} delay={i * 50}>
                  <div className="flex h-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-ink bg-paper/60 px-2 py-6 text-center">
                    <p className="font-display text-3xl font-extrabold text-arcade-purple">{i + 1}</p>
                    <p className="mt-1 text-xs font-semibold">{p}</p>
                    <p className="mt-2 text-xs text-ink/60">Prize TBA</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-sm">Every participant who submits gets a certificate.</p>
          </div>
          <div>
            <Reveal>
              <h2 className="flex flex-wrap items-center gap-3 font-display text-3xl sm:text-4xl">
                Judges <Tba />
              </h2>
              <p className="mt-2 text-sm text-ink/70">Engineers and industry professionals. Announcing soon.</p>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {judges.map((j, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div className="flex items-center gap-3 rounded-xl border-2 border-dashed border-ink bg-paper/60 p-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-paper font-display text-lg" aria-hidden>
                      ?
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold">{j}</span>
                      <span className="block text-xs text-ink/60">Company TBA</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <BlobEdge fill={band.space} />
      </section>

      {/* Supporters */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">Supported by</h2>
          <p className="mx-auto mt-3 max-w-xl text-paper/75">
            Want your company here? Sponsor a prize, send a judge, or give a talk to the next generation of engineers.
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
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Get in</h2>
            <p className="mt-3 max-w-md text-paper/85">
              <span className="font-semibold">Waitlist:</span> just your name and email. You&apos;ll be first to hear
              the dates.
            </p>
            <p className="mt-3 max-w-md text-paper/85">
              <span className="font-semibold">Register:</span> sign up a student now. Under 18 needs a parent&apos;s
              email and consent.
            </p>
            <h3 className="mt-10 font-display text-2xl">For parents and coaches</h3>
            <ul className="mt-4 space-y-2">
              {safety.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-paper/85">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-arcade-mint" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <CadathonSignup />
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
          </p>
        </div>
        <BlobEdge fill={band.deep} flip className="mb-16" />
      </section>
    </div>
  )
}
