import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { BlobEdge, band } from "@/components/blob-edge"
import { CadathonSignup } from "@/components/cadathon-signup"

export const metadata: Metadata = {
  title: "Event Horizon CADathon — Singularity Robotics",
  description:
    "A free, online CADathon with Beginner, Intermediate and Advanced divisions, open to anyone. Hosted by FRC Team 10032 Singularity Robotics.",
}

// Start date (Nov 14) is set but subject to change. Prizes, judges and
// supporters are placeholders marked TBA. The theme gets a short teaser; the
// full challenges are revealed only at Opening on the day.

function Tba({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border-2 border-dashed border-current px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide ${className}`}
    >
      TBA
    </span>
  )
}

// Divisions are open to anyone. An age cap keeps experienced people out of the
// easier divisions: you can enter your own division or any harder one, never an
// easier one. Content scales up: a gadget, then one mechanism, then a full robot.
const divisions = [
  {
    name: "Beginner",
    age: "Ages 13 and under",
    who: "New to CAD, or just getting started",
    build: "Design a small gadget",
    tool: "Tinkercad, made for first-timers",
    time: "A shorter daytime session",
    fill: "bg-arcade-mint",
  },
  {
    name: "Intermediate",
    age: "Ages 18 and under",
    who: "You've made a few parts and assemblies",
    build: "Design one robot mechanism",
    tool: "Onshape",
    time: "The full 24 hours",
    fill: "bg-arcade-sky",
  },
  {
    name: "Advanced",
    age: "Any age",
    who: "You're confident designing full assemblies",
    build: "Design a full competition-size robot",
    tool: "Onshape",
    time: "The full 24 hours",
    fill: "bg-arcade-fuel",
  },
]

const places = ["1st", "2nd", "3rd", "Honorable mention"]

// Prize size scales with the division: the harder the division, the bigger the prize.
const prizeTiers = [
  { name: "Beginner", size: "Prizes", fill: "bg-arcade-mint", h: "h-16" },
  { name: "Intermediate", size: "Bigger prizes", fill: "bg-arcade-sky", h: "h-24" },
  { name: "Advanced", size: "Biggest prizes", fill: "bg-arcade-fuel", h: "h-32" },
]

const crossAwards = [
  { name: "Most Creative", how: "The idea nobody else thought of" },
  { name: "Community Favorite", how: "Voted by everyone taking part" },
  { name: "Best Design Document", how: "The clearest explanation of the why" },
  { name: "Rookie Designer", how: "The best work from a first-time CAD user" },
  { name: "Best Render", how: "The design that looks the part" },
  { name: "Judges' Choice", how: "The one the judges couldn't stop talking about" },
]
const judges = ["Industry judge", "Industry judge", "Industry judge", "Industry judge"]

const safety = [
  "Screened adults are on duty for the whole event.",
  "Direct messages are turned off. All help happens where staff can see it.",
  "Students under 13 join on Google Meet with a parent or coach, not Discord.",
  "Students under 18 need a parent's consent to register.",
  "Nobody has to stay up overnight.",
]

const faq = [
  { q: "Do I need CAD experience?", a: "No. Beginners are welcome, and there will be help for first-timers." },
  { q: "What do I need?", a: "A computer with a web browser. The CAD tools we use are free." },
  { q: "Which division should I pick?", a: "Start with your age: 13 and under can enter any division, 14 to 18 can enter Intermediate or Advanced, and over 18 enters Advanced. Then pick by skill. Playing up into a harder division is always allowed." },
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
          <p className="text-sm font-semibold text-arcade-fuel">Hosted by FRC Team 10032 · Online · Free</p>
          <h1 className="mt-2 font-display text-4xl leading-[1.02] sm:text-6xl">Event Horizon CADathon</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-paper/80">
            One theme, revealed live. A clock. Design a robot from nothing. Three divisions from first-timer to
            advanced, open to anyone, judged by people who do this for a living.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex flex-col rounded-2xl border-2 border-paper/30 px-4 py-2 text-sm font-semibold text-paper/85">
              Starts Saturday, November 14, 2026
              <span className="text-xs font-normal text-paper/60">Date subject to change</span>
            </span>
            <a href="#signup" className="btn-pill bg-arcade-bumper text-paper">
              Register now
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
              Open to anyone. Each step up is a bigger build. Age is your age on November 14.
            </p>
          </Reveal>
          <Reveal>
            <div className="mx-auto mt-8 max-w-3xl rounded-xl border-2 border-dashed border-arcade-fuel/70 p-5 text-left sm:p-6">
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
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {divisions.map((d, i) => (
              <Reveal key={d.name} delay={i * 70}>
                <div
                  className={`h-full rounded-xl border-2 border-ink p-5 text-left text-ink shadow-hard ${d.fill}`}
                  style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * 0.6}deg` }}
                >
                  <p className="font-display text-3xl font-extrabold text-arcade-purple sm:text-4xl">{d.name}</p>
                  <p className="mt-2 inline-flex rounded-full border-2 border-ink bg-paper px-3 py-0.5 text-xs font-extrabold uppercase tracking-wide">
                    {d.age}
                  </p>
                  <p className="mt-3 font-semibold">{d.who}</p>
                  <ul className="mt-3 space-y-1 text-sm text-ink/80">
                    <li>{d.build}</li>
                    <li>{d.tool}</li>
                    <li>{d.time}</li>
                  </ul>
                  <p className="mt-4 flex items-center gap-2 text-sm font-semibold">
                    Challenge <span className="font-display text-lg">???</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl rounded-xl border-2 border-ink bg-paper p-5 text-left text-ink shadow-hard sm:p-6">
              <h3 className="font-display text-2xl">How teams work</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                <li><span className="font-semibold">You can always play up, never down.</span> Enter the division for your age or any harder one. A team&apos;s oldest member decides the easiest division it can enter.</li>
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

      {/* Prizes + judges */}
      <section className="bg-arcade-sky text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="flex flex-wrap items-center gap-3 font-display text-3xl sm:text-4xl">
                Division prizes <Tba />
              </h2>
              <p className="mt-2 text-sm text-ink/70">
                1st, 2nd, 3rd and an honorable mention in every division. The harder the division, the bigger the prize.
              </p>
            </Reveal>
            <div className="mt-6 grid grid-cols-3 items-end gap-3">
              {prizeTiers.map((t, i) => (
                <Reveal key={t.name} delay={i * 60}>
                  <div className="text-center">
                    <p className="font-display text-2xl font-extrabold text-arcade-purple">{t.name}</p>
                    <div className={`mt-2 flex ${t.h} items-center justify-center rounded-t-xl border-2 border-b-0 border-ink px-1 ${t.fill}`}>
                      <span className="text-xs font-semibold">{t.size}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <ul className="mt-0 grid grid-cols-2 gap-2 rounded-b-xl border-2 border-ink bg-paper p-3 sm:grid-cols-4">
              {places.map((p) => (
                <li key={p} className="rounded-lg border-2 border-dashed border-ink/40 px-2 py-2 text-center">
                  <span className="block text-xs font-semibold">{p}</span>
                  <span className="block text-[11px] text-ink/60">Prize TBA</span>
                </li>
              ))}
            </ul>
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

      {/* Cross-division and sponsor awards */}
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-10 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">Awards across every division</h2>
          <p className="mx-auto mt-3 max-w-xl text-paper/75">Any team in any division can win these.</p>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {crossAwards.map((a, i) => (
            <Reveal key={a.name} delay={i * 40}>
              <div className="h-full rounded-xl border-2 border-ink bg-paper p-4 text-left text-ink shadow-hard-sm">
                <p className="font-display text-xl">{a.name}</p>
                <p className="mt-1 text-sm text-ink/70">{a.how}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 rounded-xl border-2 border-dashed border-arcade-fuel/70 p-6 text-left">
            <h3 className="flex flex-wrap items-center gap-3 font-display text-2xl">
              Sponsor&apos;s Choice awards <Tba className="text-arcade-fuel" />
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-paper/80">
              Like the special awards at a science fair: engineers from a supporting company pick their favorite design
              from any division, and their company names the prize. Announced as supporters join.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg border-2 border-dashed border-paper/30 px-3 py-4 text-center text-sm font-semibold text-paper/60">
                  [Company]&apos;s Choice
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Supporters */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">Supported by</h2>
          <p className="mx-auto mt-3 max-w-xl text-paper/75">
            Want your company here? Sponsor a prize, name a Sponsor&apos;s Choice award, send a judge, or give a talk to
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
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Register</h2>
            <p className="mt-3 max-w-md text-paper/85">
              Registration is open. <span className="font-semibold">One form per student:</span> every teammate fills
              in their own, using the same team name. Students under 18 need a
              parent&apos;s email and consent. It&apos;s free.
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
            {" · "}
            <a className="underline" href="/cadathon/code-of-conduct">Code of conduct</a>
          </p>
        </div>
        <BlobEdge fill={band.deep} flip className="mb-16" />
      </section>
    </div>
  )
}
