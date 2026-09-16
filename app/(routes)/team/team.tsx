"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import {
  seasons,
  getMemberRoles,
  isCaptain,
  roleLabels,
  type LeadershipMember,
  type RoleKind,
  type TeamMember,
} from "@/lib/team-data"
import { photos } from "@/lib/photos"

const dotColor: Record<RoleKind, string> = {
  mechanical: "bg-arcade-bumper",
  programming: "bg-arcade-purple",
  business: "bg-arcade-mint",
}

const gradeOrder = ["Senior", "Junior", "Sophomore", "Freshman"]

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
  return (
    <div
      className={`rounded-xl border-2 border-ink bg-paper p-4 shadow-hard ${captain ? "ring-2 ring-arcade-fuel ring-offset-2 ring-offset-paper" : ""}`}
      style={{ rotate: `${(index % 2 === 0 ? -1 : 1) * 0.6}deg` }}
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
    </div>
  )
}

function MemberChips({ members }: { members: TeamMember[] }) {
  const grouped = useMemo(() => {
    const map = new Map<string, TeamMember[]>()
    for (const m of members) {
      if (!map.has(m.year)) map.set(m.year, [])
      map.get(m.year)!.push(m)
    }
    return gradeOrder.filter((g) => map.has(g)).map((g) => [g, map.get(g)!] as const)
  }, [members])

  return (
    <div className="space-y-6">
      {grouped.map(([grade, list]) => (
        <div key={grade}>
          <p className="text-sm font-semibold text-ink/60">{grade}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {list.map((m) => (
              <span
                key={m.name}
                className="rounded-full border-2 border-ink bg-paper px-3 py-1.5 text-sm font-medium shadow-hard-sm"
              >
                {m.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Team() {
  const [activeId, setActiveId] = useState(seasons[0].id)
  const season = seasons.find((s) => s.id === activeId) ?? seasons[0]

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <div className="overflow-hidden rounded-xl border-2 border-ink">
          <Image
            src={photos.teamHeader.src}
            alt="Full team group photo at competition"
            width={photos.teamHeader.width}
            height={photos.teamHeader.height}
            sizes="(max-width: 768px) 100vw, 1100px"
            priority
            className="h-48 w-full object-cover sm:h-72"
          />
        </div>
      </Reveal>

      <Reveal delay={60}>
        <h1 className="mt-8 font-display text-4xl sm:text-5xl">The people.</h1>
        <p className="mt-2 text-ink/70">Every season&apos;s leadership and roster.</p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-6 inline-flex gap-2 rounded-full border-2 border-ink bg-paper p-1">
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
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-ink/70">
          {(["mechanical", "programming", "business"] as RoleKind[]).map((r) => (
            <span key={r} className="flex items-center gap-1.5">
              <span className={`h-3 w-3 rounded-full border border-ink ${dotColor[r]}`} /> {roleLabels[r]}
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
  )
}
