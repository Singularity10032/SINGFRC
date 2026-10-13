import type { Metadata } from "next"
import Link from "next/link"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "CADathon Code of Conduct — Singularity Robotics",
  description: "The rules everyone at the Singularity CADathon 2026 agrees to.",
}

// Event-specific code, drawn from the principles in the team's member code
// (Gracious Professionalism, no harassment, no impersonation) and the youth
// safety rules in the CADathon plan.

const sections = [
  {
    h: "Who this covers",
    p: [
      "Everyone at the CADathon: students, coaches, mentors, judges, organizers, speakers and supporters. It applies in every event space, including Discord, video calls and shared files, from sign-up until the last message after Closing.",
    ],
  },
  {
    h: "Gracious Professionalism",
    p: [
      "Compete hard and be kind. Help people who are stuck, credit people who helped you, and treat other teams the way you'd want a judge to treat your work.",
    ],
  },
  {
    h: "Respect",
    p: [
      "No harassment, bullying, slurs, threats or sexual content. No discrimination based on race, color, national origin, religion, sex, gender identity, sexual orientation, disability or age.",
      "Keep usernames, profile pictures, messages and designs appropriate for an event with elementary school students in it.",
    ],
  },
  {
    h: "Online safety",
    p: [
      "Talk in the event's shared channels, where organizers can see. Don't message other participants privately, and never ask a student to move to another app or platform.",
      "Adults are never alone with a student in a call or a chat.",
      "Don't share personal information: yours or anyone else's. That means no home addresses, phone numbers, school schedules or photos of other people without their permission.",
    ],
  },
  {
    h: "Do your own work",
    p: [
      "Everything your team models is made during the event by your team's students. Mentors can answer questions, but they don't do the CAD.",
      "Off-the-shelf parts from public libraries are fine. If you take an idea from someone else's published design, say so in your design document.",
      "If you used AI tools, list them in your design document.",
      "Don't open, copy or change another team's files.",
    ],
  },
  {
    h: "Be who you are",
    p: [
      "Don't pretend to be an organizer, a judge, a sponsor, another participant or the Singularity team, even as a joke.",
    ],
  },
  {
    h: "Reporting a problem",
    p: [
      "If something makes you uncomfortable or breaks these rules, tell any organizer or email admin@singularityfrc.com. Reports go to an adult safety lead. You won't get in trouble for reporting something honestly.",
      "If someone is in danger, contact local emergency services first.",
    ],
  },
  {
    h: "What happens if the code is broken",
    p: [
      "Depending on how serious it is, organizers may give a warning, remove someone from the event's channels, disqualify a team, or ban someone from future events. Serious safety concerns are shared with the people who need to know, including parents, coaches and, when required, the authorities.",
    ],
  },
]

export default function CodeOfConductPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
      <Reveal>
        <Link href="/cadathon" className="text-sm font-semibold text-arcade-fuel hover:underline">
          ← Singularity CADathon 2026
        </Link>
        <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">Code of Conduct</h1>
        <p className="mt-4 text-lg text-paper/80">
          Everyone who registers, mentors, judges or organizes agrees to this. It&apos;s short on purpose.
        </p>
      </Reveal>
      <div className="mt-10 space-y-5">
        {sections.map((s) => (
          <section key={s.h} className="rounded-xl border-2 border-ink bg-paper p-5 text-ink shadow-hard-sm sm:p-6">
            <h2 className="font-display text-2xl">{s.h}</h2>
            {s.p.map((t) => (
              <p key={t} className="mt-3 text-sm leading-relaxed text-ink/85">
                {t}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}
