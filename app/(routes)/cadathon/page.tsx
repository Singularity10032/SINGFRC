import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { BlobEdge, band } from "@/components/blob-edge"

export const metadata: Metadata = {
  title: "Singularity CADathon 2026 — Singularity Robotics",
  description:
    "A free, online CADathon with Junior (13 and under) and Senior (14 and up) divisions, open to anyone. Hosted by FRC Team 10032 Singularity Robotics.",
}

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd3RL3jfIAdqNWFbDINjCdI9lTLIMrufMAkCkS_cCzZd2almA/viewform"

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

// Two divisions, open to anyone, split by age on November 14. You can play up
// (a 12-year-old may enter Senior), never down. Content scales up from Junior
// to Senior.
const divisions = [
  {
    name: "Junior",
    age: "Ages 13 and under",
    who: "New to CAD, or still learning",
    build: "Design a robot mechanism",
    tool: "Tinkercad or Onshape, your choice",
    time: "A shorter daytime session",
    fill: "bg-arcade-mint",
  },
  {
    name: "Senior",
    age: "Ages 14 and up",
    who: "Ready for a full robot",
    build: "Design a full competition-size robot",
    tool: "Onshape",
    time: "The full 24 hours",
    fill: "bg-arcade-fuel",
  },
]

const places = ["1st", "2nd", "3rd", "Honorable mention"]

// Prize size scales with the division: the harder the division, the bigger the prize.
const prizeTiers = [
  { name: "Junior", size: "Prizes", fill: "bg-arcade-mint", h: "h-20" },
  { name: "Senior", size: "Bigger prizes", fill: "bg-arcade-fuel", h: "h-32" },
]

const safety = [
  "Adult organizers moderate the event online the whole time.",
  "Direct messages are turned off. All help happens where staff can see it.",
  "Students under 13 join on Google Meet with a parent or coach, not Discord.",
  "Students under 18 need a parent's consent to register.",
  "Nobody has to stay up overnight.",
]

const faq = [
  { q: "Do I need CAD experience?", a: "No. Beginners are welcome, and there will be help for first-timers." },
  { q: "What do I need?", a: "A computer with a web browser. The CAD tools we use are free." },
  { q: "Which division should I pick?", a: "Go by your age on November 14: 13 and under is Junior, 14 and up is Senior. Juniors who want a bigger challenge can enter Senior instead." },
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
            <p className="mx-auto mt-3 max-w-xl text-paper/75">
              Open to anyone. Senior is the bigger build. Age is your age on November 14.
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
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
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

      {/* Prizes + judges */}
      <section className="bg-arcade-sky text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="flex flex-wrap items-center gap-3 font-display text-3xl sm:text-4xl">
                Division prizes <Tba />
              </h2>
              <p className="mt-2 text-sm text-ink/70">
                1st, 2nd, 3rd and an honorable mention in each division. Senior prizes are bigger.
              </p>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 items-end gap-3">
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
              <h2 className="font-display text-3xl sm:text-4xl">Judges</h2>
              <div className="mt-6 flex min-h-40 flex-col items-center justify-center rounded-xl border-2 border-dashed border-ink bg-paper/60 p-8 text-center">
                <p className="font-display text-3xl">Coming soon</p>
                <p className="mt-2 max-w-sm text-sm text-ink/70">Engineers and industry professionals. We&apos;ll announce them here.</p>
              </div>
            </Reveal>
          </div>
        </div>
        <BlobEdge fill={band.space} />
      </section>

      {/* Sponsor's Choice awards */}
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-10 text-center sm:px-6">
        <Reveal>
          <div className="rounded-xl border-2 border-dashed border-arcade-fuel/70 p-6 text-left">
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
          <div className="rounded-xl border-2 border-ink bg-paper p-6 text-ink shadow-hard sm:p-8">
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
