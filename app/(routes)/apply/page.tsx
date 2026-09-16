import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Apply — Singularity Robotics",
  description: "FRC Team 10032, a student-led FIRST Robotics Competition team in Frisco, Texas.",
}

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdxXEqo61gHjgszNQ6uFRoVZRYrkYnlj9LC4Ldm68heYH7dAQ/viewform?usp=dialog"

const steps = [
  { n: "01", title: "Application", body: "Fill out the form with your contact info, interests and experience." },
  { n: "02", title: "Interview", body: "A short conversation with student leaders." },
  { n: "03", title: "Hands-on", body: "Depending on your interests, a small build or coding activity with the team." },
  { n: "04", title: "Onboarding", body: "Accepted members get an invitation and start with the team." },
]

const eligibility = [
  "In high school (grades 9 to 12)",
  "Interested in robotics, engineering, programming, or business and marketing",
  "Able to make meetings and events",
  "Willing to learn and work with other people",
  "Able to pay team dues on time",
  "Underclassmen are especially welcome",
]

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="font-display text-4xl sm:text-5xl">Join Team 10032.</h1>
      </Reveal>
      <Reveal delay={60}>
        <p className="prose-arcade mt-5 max-w-xl">
          Build, code, or run the business side. No experience needed; you&apos;ll learn everything here.
          Applications are rolling.
        </p>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-pill mt-6 inline-flex bg-arcade-bumper text-paper"
        >
          Apply
        </a>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-16 font-display text-2xl">How it works</h2>
      </Reveal>
      <div className="relative mt-6">
        <div className="absolute bottom-0 left-4 top-0 w-[2px] bg-paper/20" aria-hidden />
        <ol className="space-y-6">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 70}>
              <li className="relative flex gap-5 pl-0">
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-arcade-fuel font-display text-sm text-ink">
                  {step.n}
                </span>
                <div>
                  <p className="font-display text-lg">{step.title}</p>
                  <p className="text-sm text-paper/75">{step.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal delay={100}>
        <h2 className="mt-16 font-display text-2xl">Who can apply</h2>
        <ul className="prose-arcade mt-4 space-y-2">
          {eligibility.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-pill mt-12 inline-flex bg-arcade-bumper text-paper"
        >
          Apply
        </a>
      </Reveal>
    </div>
  )
}
