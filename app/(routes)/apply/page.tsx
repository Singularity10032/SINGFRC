import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { BlobEdge, band } from "@/components/blob-edge"

export const metadata: Metadata = {
  title: "Apply — Singularity Robotics",
  description: "FRC Team 10032, a student-led FIRST Robotics Competition team in Frisco, Texas.",
}

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdxXEqo61gHjgszNQ6uFRoVZRYrkYnlj9LC4Ldm68heYH7dAQ/viewform?usp=dialog"

// Copy unchanged from the previous version of this page (COPY-DECK); only the
// layout changed (dad, 2026-09-15: "format the application page better").
const steps = [
  { n: "01", title: "Application", body: "Fill out the form with your contact info, interests and experience.", fill: "bg-arcade-fuel" },
  { n: "02", title: "Interview", body: "A short conversation with student leaders.", fill: "bg-arcade-sky" },
  { n: "03", title: "Hands-on", body: "Depending on your interests, a small build or coding activity with the team.", fill: "bg-arcade-mint" },
  { n: "04", title: "Onboarding", body: "Accepted members get an invitation and start with the team.", fill: "bg-paper" },
]

const eligibility = [
  "In high school (grades 9 to 12)",
  "Interested in robotics, engineering, programming, or business and marketing",
  "Able to make meetings and events",
  "Willing to learn and work with other people",
  "Able to pay team dues on time",
  "Underclassmen are especially welcome",
]

function ApplyButton({ className = "" }: { className?: string }) {
  return (
    <a href={FORM_URL} target="_blank" rel="noreferrer" className={`btn-pill inline-flex bg-arcade-bumper text-paper ${className}`}>
      Apply now
    </a>
  )
}

export default function ApplyPage() {
  return (
    <div>
      {/* Headline, centered, one button */}
      <section className="mx-auto max-w-3xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24">
        <Reveal>
          <p className="text-sm font-semibold text-arcade-fuel">Applications are rolling</p>
          <h1 className="mt-2 font-display text-4xl leading-[1.02] sm:text-6xl">Join Team 10032.</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-paper/80">
            Build, code, or run the business side. You&apos;ll learn everything here.
          </p>
          <ApplyButton className="mt-7" />
        </Reveal>
      </section>

      {/* How it works: four numbered cards on a raised band */}
      <BlobEdge fill={band.deep} />
      <section className="bg-deep">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">How it works</h2>
          </Reveal>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 70}>
                <li
                  className={`h-full rounded-xl border-2 border-ink p-5 text-left text-ink shadow-hard ${step.fill}`}
                  style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * 0.6}deg` }}
                >
                  <p className="font-display text-3xl font-extrabold text-arcade-purple">{step.n}</p>
                  <p className="mt-2 font-display text-xl">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
        <BlobEdge fill={band.sky} />
      </section>

      {/* Who can apply: a checklist on a sky band */}
      <section className="bg-arcade-sky text-ink">
        <div className="mx-auto max-w-3xl px-4 pb-16 pt-6 sm:px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl sm:text-4xl">Who can apply</h2>
          </Reveal>
          <ul className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            {eligibility.map((item, i) => (
              <Reveal key={item} delay={i * 50}>
                <li className="flex h-full items-start gap-3 rounded-xl border-2 border-ink bg-paper px-4 py-3 shadow-hard-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-arcade-mint text-[11px] font-extrabold" aria-hidden>
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <BlobEdge fill={band.purple} />
      </section>

      {/* Closing call, purple band */}
      <section className="bg-arcade-purple text-paper">
        <div className="mx-auto max-w-3xl px-4 pb-16 pt-6 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Ready?</h2>
            <p className="mx-auto mt-3 max-w-md text-paper/85">The form takes a few minutes. We read every one.</p>
            <ApplyButton className="mt-6 !bg-arcade-fuel !text-ink" />
          </Reveal>
        </div>
      </section>
      <BlobEdge fill={band.purple} flip className="mb-16" />
    </div>
  )
}
