import type { Metadata } from "next"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { BlobEdge, band } from "@/components/blob-edge"

export const metadata: Metadata = {
  title: "MISSION: ORION RESCUE | Singularity CADathon 2026",
  description:
    "The Singularity CADathon 2026 game. Submissions due Friday, January 1, 2027 at 11:59 PM CT. Winners announced by Friday, January 15, 2027.",
}

// Text from the final challenge brief (01 Projects/Singularity CADathon —
// challenge brief MISSION ORION RESCUE 2026-11-14.md in the vault), sections in
// its order, wording as written. **text** renders bold. Timeline changed by
// Mohan (2026-11-14): office hours became "email us", and the December 6
// check-in and winter-break lines are out. He also cut the "no starter files"
// line and the Printing section.

const mission =
  "A piece of debris has hit Orion Station. One of its solar arrays is jammed, a power module is damaged, and the station is losing power. Sending an astronaut out on a spacewalk is too dangerous. Mission control has room for one cargo pod, 1.0 m × 1.0 m × 1.5 m, and your team decides what goes in it: the robot that saves the station. There's no gravity up there, so your robot can't drive across a floor. It has to hold on to the station the entire time."

const jobs = [
  { name: "Deploy.", text: "Unpack itself from the cargo pod." },
  { name: "Traverse.", text: "Move along the station's outer handrails from the airlock to the damaged area, including one 90° corner." },
  { name: "Repair.", text: "Free the jammed solar panel hinge, then swap the damaged power module for the spare." },
  { name: "Return.", text: "Make it back to the airlock docking port." },
]

const divisions = [
  {
    name: "Junior",
    age: "13 and under",
    fill: "bg-arcade-mint",
    text: "Phases 2, 3 and 4 are required, and Phase 1 earns bonus credit. Your model doesn't need moving parts.",
  },
  {
    name: "Senior",
    age: "14 and up",
    fill: "bg-arcade-fuel",
    text: "All four phases are required. Your robot has to be a working Onshape assembly that folds into the cargo pod and unfolds, with at least two moving mechanisms.",
  },
]

const specs = [
  "**Cargo pod:** 1.0 m × 1.0 m × 1.5 m. Your robot must fit inside it fully packed.",
  "**Handrails:** 32 mm round bars, mounted 10 cm off the hull, with a support post every 60 cm. Your grippers will have to get past the posts. The route from the airlock to the damaged area is 8 m long and has one 90° corner.",
  "**Jammed solar array:** a 2 m × 6 m panel wing. A 20 cm chunk of debris is wedged into its hinge, which turns on a 5 cm diameter pin.",
  "**Damaged power module:** a 50 × 50 × 80 cm box weighing 60 kg, with two handles on one face. It sits in a bay with only 2 cm of clearance on each side and is locked in by a single quarter-turn bolt with a 19 mm hex head. The spare module is identical, and it rides up in the cargo pod with your robot.",
  "**Docking port:** a ring 1.0 m in diameter at the airlock.",
  "**Senior mass limit:** your robot plus the spare module must come in under 250 kg total.",
]

const submit = [
  "A public Onshape link to your full assembly",
  "Renders or screenshots of every phase you attempted",
  "A design report (Junior: up to 2 pages; Senior: up to 5 pages). Explain the problem, show at least two concepts you considered and why you picked one, and walk through how your robot handles each phase.",
  "A 2-minute video walkthrough",
  "Senior only: a dimensioned engineering drawing of one custom part, and a mass budget table listing your parts and their estimated masses",
]

const supplementals = [
  "**Motion:** an Onshape animation of your robot running the mission",
  "**Build it:** 3D print a part or mechanism from your design and show it working in photos or video",
  "**Analysis:** back up a design choice with a calculation or simulation, like grip force, motor torque or stress. Any free tool works, and so does doing it by hand.",
  "**Autonomy plan:** show which sensors your robot uses and how it decides what to do in each phase. A flowchart is fine.",
  "**Mission patch:** design your team's mission logo",
]

const judging = [
  "**Mission completion (30):** could each phase actually work?",
  "**Engineering (25):** how the robot holds on with no gravity, its mechanisms, how it packs and deploys, and whether the sizes are realistic",
  "**Creativity (15)**",
  "**CAD quality (15):** clean, organized, well-constrained assemblies",
  "**Report and video (15):** clear reasoning and a real comparison of concepts",
]

const timeline = [
  "**Saturday, November 14:** Opening. The challenge is revealed.",
  "**Any time:** email us with any questions at admin@singularityfrc.com",
  "**Friday, January 1, 11:59 PM CT:** submissions due",
  "**January 2 to 12:** judging, including Judges' Choice",
  "**Friday, January 15:** winners announced, with a livestream showcase",
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

function Card({ title, note, intro, items }: { title: string; note?: string; intro?: string; items?: string[] }) {
  return (
    <div className="rounded-xl border-2 border-ink bg-paper p-5 text-left text-ink shadow-hard sm:p-6">
      <h2 className="font-display text-2xl sm:text-3xl">{title}</h2>
      {note && <p className="mt-1 text-xs font-extrabold uppercase tracking-wide text-ink/60">{note}</p>}
      {intro && <p className="mt-3 text-sm leading-relaxed text-ink/85">{intro}</p>}
      {items && (
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/85">
          {items.map((t) => (
            <li key={t}>
              <Rich text={t} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function GamePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24">
        <Reveal>
          <Link href="/cadathon" className="text-sm font-semibold text-arcade-fuel hover:underline">
            ← Singularity CADathon 2026
          </Link>
          <h1 className="mt-3 font-display text-4xl leading-[1.02] sm:text-6xl">MISSION: ORION RESCUE</h1>
          <p className="mt-6 text-paper/85">
            Opens Saturday, November 14, 2026. Submissions due Friday, January 1, 2027 at 11:59 PM CT. Winners
            announced by Friday, January 15, 2027.
          </p>
        </Reveal>
      </section>

      {/* The mission + divisions */}
      <BlobEdge fill={band.deep} />
      <section className="bg-deep">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">The mission</h2>
          </Reveal>
          <Reveal>
            <div className="mx-auto mt-8 max-w-3xl rounded-xl border-2 border-dashed border-arcade-fuel/70 p-5 text-center sm:p-6">
              <p className="text-paper/90">{mission}</p>
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-10 font-display text-2xl">Your robot has four jobs:</p>
          </Reveal>
          <ol className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {jobs.map((j, i) => (
              <Reveal key={j.name} delay={i * 70}>
                <li className="h-full list-none rounded-xl border-2 border-ink bg-paper p-5 text-left text-ink shadow-hard">
                  <p className="font-display text-3xl font-extrabold text-arcade-purple">{i + 1}</p>
                  <p className="mt-1 text-sm leading-relaxed">
                    <strong>{j.name}</strong> {j.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <h2 className="mt-14 font-display text-3xl sm:text-4xl">Divisions</h2>
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
                  <p className="mt-3 text-sm leading-relaxed">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <BlobEdge fill={band.sky} />
      </section>

      {/* Station specs */}
      <section className="bg-arcade-sky text-ink">
        <div className="mx-auto max-w-3xl px-4 pb-16 pt-6 sm:px-6">
          <Reveal>
            <Card title="Station specs" items={specs} />
          </Reveal>
        </div>
        <BlobEdge fill={band.space} />
      </section>

      {/* Submission + supplementals */}
      <BlobEdge fill={band.purple} />
      <section className="bg-arcade-purple text-paper">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 pb-16 pt-6 sm:px-6 md:grid-cols-2">
          <Reveal>
            <Card title="What to submit" items={submit} />
          </Reveal>
          <Reveal delay={70}>
            <Card
              title="Supplementals"
              note="Optional"
              intro="Pick up to three. Each one is worth up to 5 bonus points and has its own award."
              items={supplementals}
            />
          </Reveal>
        </div>
        <BlobEdge fill={band.deep} />
      </section>

      {/* Judging, timeline */}
      <section className="bg-deep">
        <div className="mx-auto max-w-3xl space-y-5 px-4 pb-16 pt-6 sm:px-6">
          <Reveal>
            <Card
              title="Judging"
              intro="Each division is judged separately, out of 100 points plus up to 15 bonus points from supplementals."
              items={judging}
            />
          </Reveal>
          <Reveal>
            <Card title="Timeline" items={timeline} />
          </Reveal>
          <p className="pt-3 text-center text-sm text-paper/70">
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
