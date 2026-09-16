"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { BlobEdge, band } from "@/components/blob-edge"
import {
  seasons,
  getMemberRoles,
  isCaptain,
  roleLabels,
  type LeadershipMember,
  type RoleKind,
  type TeamMember,
} from "@/lib/team-data"

const dotColor: Record<RoleKind, string> = {
  mechanical: "bg-arcade-bumper",
  programming: "bg-arcade-purple",
  business: "bg-arcade-mint",
}

// team-data stores the singular grade; dad wants the headings plural (2026-09-15).
const gradeOrder: Array<[string, string]> = [
  ["Senior", "Seniors"],
  ["Junior", "Juniors"],
  ["Sophomore", "Sophomores"],
  ["Freshman", "Freshmen"],
]

// College logos dad downloaded on 2026-09-15 (Downloads/Singularity/College logos/,
// originals untouched). The copies here are trimmed to the mark's bounding box
// and flattened onto white so every tile is the same white and the mark fills
// it (dad: "make everything white … zoom in to fit"). The "which alumni went
// where" claim is dad's wording.
const colleges = [
  { name: "Duke University", src: "/images/colleges/duke.png", width: 1600, height: 699 },
  { name: "Georgia Tech", src: "/images/colleges/georgia-tech.png", width: 1600, height: 336 },
  { name: "New York University", src: "/images/colleges/nyu.png", width: 1600, height: 545 },
  { name: "Purdue University", src: "/images/colleges/purdue.png", width: 1600, height: 350 },
  { name: "Texas A&M University", src: "/images/colleges/texas-am.png", width: 599, height: 92 },
  { name: "University of Chicago", src: "/images/colleges/uchicago.png", width: 1600, height: 365 },
  { name: "University of Michigan", src: "/images/colleges/michigan.png", width: 1600, height: 359 },
  { name: "UCLA", src: "/images/colleges/ucla.png", width: 1600, height: 557 },
  { name: "University of Texas at Austin", src: "/images/colleges/ut-austin.png", width: 1600, height: 455 },
]

const spring = { type: "spring", stiffness: 300, damping: 20 } as const

function RoleDots({ member }: { member: LeadershipMember }) {
  const roles = getMemberRoles(member)
  return (
    <span className="flex items-center gap-1" aria-label={roles.map((r) => roleLabels[r]).join(" and ")}>
      {roles.map((r) => (
        <span key={r} className={`h-3 w-3 rounded-full border border-ink ${dotColor[r]}`} />
      ))}
    </span>
  )
}

function LeaderCard({ member, index }: { member: LeadershipMember; index: number }) {
  const captain = isCaptain(member)
  const tilt = (index % 2 === 0 ? -1 : 1) * 0.6
  return (
    <motion.div
      className={`h-full rounded-xl border-2 border-ink bg-paper p-4 text-ink shadow-hard ${
        captain ? "ring-2 ring-arcade-fuel ring-offset-2 ring-offset-space" : ""
      }`}
      style={{ rotate: tilt }}
      whileHover={{ rotate: 0, y: -4, boxShadow: "6px 6px 0 0 #fff8ee" }}
      whileTap={{ y: 0 }}
      transition={spring}
    >
      <div className="flex items-start justify-between">
        <RoleDots member={member} />
        {captain && (
          <span className="rounded-full border-2 border-ink bg-arcade-fuel px-2 py-0.5 text-[11px] font-semibold">
            Captain
          </span>
        )}
      </div>
      <p className="mt-3 font-display text-lg leading-tight">{member.name}</p>
      <p className="mt-0.5 text-sm text-ink/70">{member.position}</p>
    </motion.div>
  )
}

function MemberChips({ members }: { members: TeamMember[] }) {
  const grouped = useMemo(() => {
    const map = new Map<string, TeamMember[]>()
    for (const m of members) {
      if (!map.has(m.year)) map.set(m.year, [])
      map.get(m.year)!.push(m)
    }
    return gradeOrder.filter(([g]) => map.has(g)).map(([g, label]) => [label, map.get(g)!] as const)
  }, [members])

  return (
    <div className="space-y-6">
      {grouped.map(([label, list]) => (
        <div key={label}>
          <p className="text-sm font-semibold text-paper/60">{label}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {list.map((m) => (
              <motion.span
                key={m.name}
                className="rounded-full border-2 border-ink bg-paper px-3 py-1.5 text-sm font-medium text-ink shadow-hard-sm"
                whileHover={{ y: -3, scale: 1.04, backgroundColor: "#FFD23F" }}
                transition={spring}
              >
                {m.name}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function CollegeTile({ college }: { college: (typeof colleges)[number] }) {
  return (
    <motion.div
      className="mx-3 flex h-28 w-60 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-white px-4 py-3 shadow-hard-sm"
      whileHover={{ y: -4, boxShadow: "4px 4px 0 0 #fff8ee" }}
      transition={spring}
    >
      <Image
        src={college.src}
        alt={`${college.name} logo`}
        width={college.width}
        height={college.height}
        sizes="240px"
        className="max-h-full max-w-full object-contain"
      />
    </motion.div>
  )
}

export default function Team() {
  const [activeId, setActiveId] = useState(seasons[0].id)
  const season = seasons.find((s) => s.id === activeId) ?? seasons[0]
  const reduced = useReducedMotion()

  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h1 className="font-display text-4xl sm:text-5xl">The people.</h1>
          <p className="mt-2 text-paper/70">Every season&apos;s leadership and roster.</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-6 inline-flex gap-2 rounded-full border-2 border-ink bg-paper p-1 text-ink">
            {seasons.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveId(s.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  s.id === activeId ? "bg-ink text-paper" : "hover:bg-arcade-sky"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-paper/70">
            {(["mechanical", "programming", "business"] as RoleKind[]).map((r) => (
              <span key={r} className="flex items-center gap-1.5">
                <span className={`h-3 w-3 rounded-full border border-paper ${dotColor[r]}`} /> {roleLabels[r]}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-10">
          <h2 className="font-display text-2xl">Leadership</h2>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {season.leadership.map((member, i) => (
              <Reveal key={`${season.id}-${member.name}-${member.position}`} delay={i * 40}>
                <LeaderCard member={member} index={i} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-2xl">Members</h2>
          <div className="mt-5">
            <MemberChips members={season.members} />
          </div>
        </div>

      </div>

      {/* Alumni: line + logo carousel, at the bottom (dad, 2026-09-15). Same
          ticker mechanism as the results marquee; pauses on hover; a static
          wrapped row under prefers-reduced-motion. */}
      <BlobEdge fill={band.deep} />
      <section className="bg-deep pb-14 pt-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl">
              Our alumni go on to attend prestigious universities, including:
            </h2>
          </Reveal>
        </div>
        {reduced ? (
          <div className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-center gap-y-4 px-4 sm:px-6">
            {colleges.map((c) => (
              <CollegeTile key={c.name} college={c} />
            ))}
          </div>
        ) : (
          <div className="mt-8 overflow-hidden py-2">
            <div className="ticker-track flex w-max" aria-label="Universities our alumni attend">
              {[...colleges, ...colleges].map((c, i) => (
                <CollegeTile key={`${c.name}-${i}`} college={c} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
