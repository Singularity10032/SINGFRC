import type { Metadata } from "next"
import Link from "next/link"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "CADathon Code of Conduct — Singularity Robotics",
  description: "The rules everyone at the Singularity CADathon 2026 agrees to.",
}

// Text from the v2 draft (01 Projects/Singularity CADathon — code of conduct v2
// 2026-10-13.md in the vault), sections in its order, wording as written.
// A section has paragraphs (p) or bullets (list); **text** renders bold.

type Section = { h: string; p?: string[]; list?: string[] }

const sections: Section[] = [
  {
    h: "Gracious Professionalism",
    p: [
      "Compete hard and be kind. Help people who are stuck, credit people who helped you, and treat every team's work the way you'd want the judges to treat yours. Good sportsmanship in the chat counts as much as good CAD.",
    ],
  },
  {
    h: "No cheating",
    list: [
      "Everything you submit is modeled during the event by your team's students. Mentors and parents can answer questions, but they don't touch the CAD.",
      "No pre-made models of your design. Standard parts from public libraries (screws, motors, COTS parts) are fine.",
      "If you borrow an idea from someone else's published design, say so in your design document.",
      "If you use AI tools, list them in your design document.",
      "Don't open, copy, download or change another team's files or Onshape documents.",
      "One account per person, one registration per student. Don't enter under someone else's name.",
      "Submissions that break these rules are disqualified.",
    ],
  },
  {
    h: "Online conduct",
    list: [
      "Use the event's shared channels, where organizers can see. Don't direct-message other participants, and never ask a student to move to another app.",
      "Keep usernames, profile pictures, messages and designs appropriate for an event with elementary school students in it.",
      "No harassment, bullying, slurs, threats, spam or sexual content. No discrimination of any kind.",
      "Don't share personal information, yours or anyone else's: no addresses, phone numbers, school schedules or photos of other people.",
      "Don't pretend to be an organizer, a judge, a sponsor or another participant, even as a joke.",
    ],
  },
  {
    h: "Age, divisions and prizes",
    list: [
      "Your division is set by your age on November 14, 2026: Junior is 13 and under, Senior is 14 and up. You can play up, never down.",
      "**Winners must verify their age before any prize is sent.** We'll email the winner (and, for anyone under 18, the parent or guardian on the registration) to confirm name, age and division. A parent or guardian confirms for students under 18. We never ask students to send ID.",
      "Prizes for students under 18 are sent to the parent or guardian. Shipping addresses are collected only from winners, only for shipping, and deleted afterward.",
      "If the age on a registration turns out to be wrong, the team can be moved to the right division or disqualified, and the prize goes to the next team.",
      "Prizes can't be transferred or exchanged for cash, and they may change if a sponsor's prize falls through.",
    ],
  },
  {
    h: "Reporting a problem",
    p: [
      "Tell any organizer or email admin@singularityfrc.com. Reports go to an adult safety lead. You won't get in trouble for reporting something honestly. If someone is in danger, contact local emergency services first.",
    ],
  },
  {
    h: "If the code is broken",
    p: [
      "Depending on how serious it is: a warning, removal from the event's channels, disqualification, or a ban from future events. Serious safety concerns are shared with parents, coaches and, when required, the authorities.",
    ],
  },
]

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
        part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
      )}
    </>
  )
}

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
            {s.p?.map((t) => (
              <p key={t} className="mt-3 text-sm leading-relaxed text-ink/85">
                <Rich text={t} />
              </p>
            ))}
            {s.list && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/85">
                {s.list.map((t) => (
                  <li key={t}>
                    <Rich text={t} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
