import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { BlobEdge, band } from "@/components/blob-edge"
import { Countdown } from "@/components/countdown"

export const metadata: Metadata = {
  title: "Event Horizon CADathon — Singularity Robotics",
  description:
    "A free, online CADathon for FLL, FTC and FRC students, hosted by FRC Team 10032 Singularity Robotics. December 5 to 6, 2026.",
}

// Event facts come from the CADathon project plan (2026-10-12). Dates and
// divisions are the plan's proposal; change them here if the plan changes.
const START = "2026-12-05T10:00:00-06:00"

const divisions = [
  {
    name: "FLL",
    who: "Ages 9 to 14, with your coach",
    hours: "4 hours · Sat 10 AM to 2 PM CT",
    tool: "Tinkercad",
    task: "Design a gadget that helps an astronaut with one everyday task.",
    fill: "bg-arcade-mint",
  },
  {
    name: "FTC",
    who: "Grades 7 to 12",
    hours: "24 hours · Sat 10 AM to Sun 10 AM CT",
    tool: "Onshape",
    task: "Design one mechanism for a game element we reveal at Opening.",
    fill: "bg-arcade-sky",
  },
  {
    name: "FRC",
    who: "Grades 9 to 12",
    hours: "24 hours · Sat 10 AM to Sun 10 AM CT",
    tool: "Onshape",
    task: "Design a robot or a major subsystem for a mini-game we reveal at Opening.",
    fill: "bg-arcade-fuel",
  },
]

const schedule = [
  { t: "Sat 10:00 AM", e: "Opening, theme reveal, clock starts" },
  { t: "Sat 11:00 AM", e: "Onshape quick-start for beginners" },
  { t: "Sat 2:00 PM", e: "FLL submissions due, FLL pitches and awards" },
  { t: "Sat 4:00 PM", e: "Talk: how engineers use CAD at work" },
  { t: "Sun 10:00 AM", e: "FTC and FRC submissions close" },
  { t: "Sun 10:30 AM", e: "Judging and finalist Q&A" },
  { t: "Sun 2:30 PM", e: "Closing and awards" },
]

const rubric = [
  { c: "Function", p: 30, d: "Does it do the job?" },
  { c: "Engineering quality", p: 25, d: "Could it actually be built?" },
  { c: "Creativity", p: 20, d: "A fresh idea, not a copy" },
  { c: "Communication", p: 25, d: "Your design PDF and video" },
]

const rules = [
  "Teams of 1 to 4 students. Mixed teams are welcome in FTC and FRC.",
  "Everything you model is made during the event. Onshape's version history shows when parts were created.",
  "Off-the-shelf parts (motors, wheels, gearboxes) from public libraries are fine.",
  "Mentors can answer questions. Students do the CAD.",
  "AI tools are fine for research. List any you used in your design PDF.",
  "It's free to enter.",
]

const safety = [
  "Two screened adults are on duty for every hour of the event.",
  "Direct messages are turned off. All help happens in channels staff can see.",
  "FLL students stay off Discord and join on Google Meet with their coach.",
  "Students under 18 need a parent's consent to sign up.",
  "Nobody has to stay up overnight. Sleep is encouraged.",
]

const faq = [
  {
    q: "Do I need CAD experience?",
    a: "No. There's a beginner workshop at the start, and a Rookie Designer award for first-timers.",
  },
  {
    q: "What do I need?",
    a: "A computer with a web browser. Onshape and Tinkercad are free and run in the browser.",
  },
  {
    q: "Can I join without a FIRST team?",
    a: "Yes. Pick the division that matches your grade.",
  },
  {
    q: "How do I sign up?",
    a: "Registration opens October 26 on this page. Email us if you want a reminder.",
  },
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
            24 hours to design a robot. FLL, FTC and FRC divisions, judged by engineers.
            December 5 to 6, 2026.
          </p>
          <Countdown to={START} />
          <p className="mt-6 inline-flex rounded-full border-2 border-paper/30 px-4 py-2 text-sm font-semibold text-paper/85">
            Registration opens October 26
          </p>
        </Reveal>
      </section>

      {/* Divisions */}
      <BlobEdge fill={band.deep} />
      <section className="bg-deep">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Three divisions</h2>
            <p className="mx-auto mt-3 max-w-xl text-paper/75">
              One theme for everyone, revealed live at Opening. Each division gets its own challenge.
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
                  <p className="mt-1 text-sm text-ink/75">{d.hours}</p>
                  <p className="mt-1 text-sm text-ink/75">Tool: {d.tool}</p>
                  <p className="mt-3 text-sm leading-relaxed">{d.task}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <BlobEdge fill={band.sky} />
      </section>

      {/* Schedule + judging */}
      <section className="bg-arcade-sky text-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl">Schedule</h2>
              <p className="mt-2 text-sm text-ink/70">All times Central.</p>
            </Reveal>
            <ol className="mt-6 space-y-2">
              {schedule.map((s, i) => (
                <Reveal key={s.t} delay={i * 40}>
                  <li className="flex flex-wrap items-baseline gap-x-4 gap-y-1 rounded-xl border-2 border-ink bg-paper px-4 py-3 shadow-hard-sm">
                    <span className="w-28 shrink-0 font-display font-extrabold text-arcade-purple">{s.t}</span>
                    <span className="text-sm">{s.e}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <div>
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl">How it&apos;s judged</h2>
              <p className="mt-2 text-sm text-ink/70">Two judges score every entry out of 100.</p>
            </Reveal>
            <div className="mt-6 space-y-3">
              {rubric.map((r, i) => (
                <Reveal key={r.c} delay={i * 50}>
                  <div className="rounded-xl border-2 border-ink bg-paper px-4 py-3 shadow-hard-sm">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-semibold">{r.c}</span>
                      <span className="font-display text-xl font-extrabold">{r.p}</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-ink/10">
                      <div className="h-2 rounded-full bg-arcade-purple" style={{ width: `${r.p * 2.5}%` }} />
                    </div>
                    <p className="mt-2 text-xs text-ink/70">{r.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-6 text-sm leading-relaxed">
                <span className="font-semibold">Awards:</span> 1st, 2nd and 3rd in each division, plus Best Design
                Document, Most Creative and Rookie Designer. Everyone who submits gets a certificate.
              </p>
            </Reveal>
          </div>
        </div>
        <BlobEdge fill={band.space} />
      </section>

      {/* Rules + safety */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Rules</h2>
          </Reveal>
          <ul className="mt-6 space-y-3">
            {rules.map((r, i) => (
              <Reveal key={r} delay={i * 40}>
                <li className="flex items-start gap-3 text-paper/85">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-arcade-fuel" aria-hidden />
                  <span className="text-sm leading-relaxed">{r}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <div>
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">For parents and coaches</h2>
          </Reveal>
          <ul className="mt-6 space-y-3">
            {safety.map((r, i) => (
              <Reveal key={r} delay={i * 40}>
                <li className="flex items-start gap-3 text-paper/85">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-arcade-mint" aria-hidden />
                  <span className="text-sm leading-relaxed">{r}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <BlobEdge fill={band.deep} />
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
        </div>
        <BlobEdge fill={band.purple} />
      </section>

      {/* Contact */}
      <section className="bg-arcade-purple text-paper">
        <div className="mx-auto max-w-3xl px-4 pb-16 pt-6 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Questions, judging or sponsoring?</h2>
            <p className="mx-auto mt-3 max-w-md text-paper/85">Email the team. A student organizer will write back.</p>
            <a href="mailto:admin@singularityfrc.com?subject=CADathon" className="btn-pill mt-6 inline-flex max-w-full bg-arcade-fuel text-ink">
              <span className="truncate">admin@singularityfrc.com</span>
            </a>
          </Reveal>
        </div>
      </section>
      <BlobEdge fill={band.purple} flip className="mb-16" />
    </div>
  )
}
