"use client";

import { useState } from "react";
import styles from "./team.module.css";

type RoleKind = "mechanical" | "programming" | "business";

type LeadershipMember = {
  name: string;
  position: string;
  roleKind: RoleKind;
  roleKinds?: [RoleKind, RoleKind];
};

type TeamMember = {
  name: string;
  year: string;
};

type Season = {
  id: string;
  label: string;
  title: string;
  leadership: LeadershipMember[];
  members: TeamMember[];
};

const roleStars: Record<RoleKind, string> = {
  mechanical: "\u2605",
  programming: "\u2726",
  business: "\u2727",
};

const roleLabels: Record<RoleKind, string> = {
  mechanical: "Mechanical star",
  programming: "Programming star",
  business: "Business, outreach, and media star",
};

const roleBadgeClass: Record<RoleKind, string> = {
  mechanical: styles.mechanicalBadge,
  programming: styles.programmingBadge,
  business: styles.businessBadge,
};

const dualRoleBadgeClass: Record<string, string> = {
  "mechanical-programming": styles.mechanicalProgrammingBadge,
  "mechanical-business": styles.mechanicalBusinessBadge,
  "programming-business": styles.programmingBusinessBadge,
};

const roleOrder: RoleKind[] = ["mechanical", "programming", "business"];

function getMemberRoles(member: LeadershipMember) {
  return member.roleKinds ?? [member.roleKind];
}

function getDualRoleKey(roles: RoleKind[]) {
  return [...roles].sort((first, second) => roleOrder.indexOf(first) - roleOrder.indexOf(second)).join("-");
}

function getRoleLabel(roles: RoleKind[]) {
  return roles.map((role) => roleLabels[role]).join(" and ");
}

function isCaptain(member: LeadershipMember) {
  return member.position.toLowerCase().includes("captain");
}

const seasons: Season[] = [
  {
    id: "2025-2026",
    label: "25'-26' Season",
    title: "2025-2026 Team",
    leadership: [
      { name: "Aadhitya Senthilkumar", position: "Mech Captain", roleKind: "mechanical" },
      { name: "Raghav Ramprasad", position: "Business Captain", roleKind: "business" },
      { name: "Shiven Velagapudi", position: "Programming Captain", roleKind: "programming" },
      { name: "Kavin Ravi", position: "Mech Captain", roleKind: "mechanical" },
      { name: "Nirbhay Challa", position: "Scouting Captain", roleKind: "business" },
      { name: "Sanjana Rajaram", position: "CAD Captain", roleKind: "mechanical" },
      { name: "Sachin Rajan", position: "Driver", roleKind: "mechanical" },
      { name: "Shaurya Singh", position: "Outreach Lead", roleKind: "business" },
      { name: "Shreyansh Panigrahi", position: "Programming Lead", roleKind: "programming" },
      {
        name: "Mohan Chillara",
        position: "Business and Mech Lead",
        roleKind: "business",
        roleKinds: ["business", "mechanical"],
      },
    ],
    members: [
      { name: "Arnau Ariga", year: "Senior" },
      { name: "Linda Zhang", year: "Senior" },
      { name: "Amrith Ponneth", year: "Senior" },
      { name: "Chaitanya Polavarapu", year: "Senior" },
      { name: "Chetan Kapavarapu", year: "Senior" },
      { name: "Dhruva Venkatraman", year: "Senior" },
      { name: "Eshwar Mahadevan", year: "Senior" },
      { name: "Gabriel Bell", year: "Senior" },
      { name: "Kavin Dasari", year: "Senior" },
      { name: "Rishi Alluri", year: "Senior" },
      { name: "Alexander Wick", year: "Junior" },
      { name: "Daniel Brown", year: "Junior" },
      { name: "Dheemanth Suddekunte", year: "Junior" },
      { name: "Ishaant Majumdar", year: "Junior" },
      { name: "Ishan Pachnada", year: "Junior" },
      { name: "Shreya Samba", year: "Junior" },
      { name: "Aahan Kumbham", year: "Sophomore" },
      { name: "Aryaman Jalota", year: "Sophomore" },
      { name: "Sathyndhira J Thirumal", year: "Freshman" },
      { name: "Shanavi Rajaram", year: "Freshman" },
      { name: "Shivani Umashanker", year: "Freshman" },
    ],
  },
  {
    id: "2024-2025",
    label: "24'-25' Season",
    title: "2024-2025 Team",
    leadership: [
      { name: "Aadhitya Senthilkumar", position: "Captain", roleKind: "mechanical" },
      { name: "Meghana Chodavarapu", position: "Captain", roleKind: "business" },
      { name: "Kaushal Prasath", position: "Captain", roleKind: "mechanical" },
      { name: "Diya Sangal", position: "Captain", roleKind: "business" },
      { name: "Raghav Ramprasad", position: "Business Lead", roleKind: "business" },
      { name: "Sachin Rajan", position: "Business Lead", roleKind: "business" },
      { name: "Kavin Ravi", position: "Programming Lead", roleKind: "programming" },
      { name: "Nirbhay Challa", position: "Scouting Lead", roleKind: "business" },
      { name: "Sofy Gutierrez", position: "Mech Lead", roleKind: "mechanical" },
      { name: "Jose Hernandez", position: "CAD Lead", roleKind: "mechanical" },
      { name: "Rayhan Mohammad", position: "Programming Lead", roleKind: "programming" },
      { name: "Ethan Zheng", position: "Electrical Lead", roleKind: "mechanical" },
    ],
    members: [
      { name: "Mayank Jain", year: "Senior" },
      { name: "Shreyas Kadari", year: "Senior" },
      { name: "Tanush Saxena", year: "Senior" },
      { name: "Rishi Alluri", year: "Junior" },
      { name: "Kavin Dasari", year: "Junior" },
      { name: "Ahaan Girotra", year: "Junior" },
      { name: "Chetan Kapavarapu", year: "Junior" },
      { name: "Medha Kota", year: "Junior" },
      { name: "Roy Lee", year: "Junior" },
      { name: "Eshwar Mahadevan", year: "Junior" },
      { name: "Chaitanya Polavarapu", year: "Junior" },
      { name: "Amrith Ponneth", year: "Junior" },
      { name: "Sanjana Rajaram", year: "Junior" },
      { name: "Vishruth Thota", year: "Junior" },
      { name: "Vishva Venkatesh", year: "Junior" },
      { name: "Dhruva Venkatraman", year: "Junior" },
      { name: "Mykhailo Bolshakov", year: "Sophomore" },
      { name: "Shubhangi Dixit", year: "Sophomore" },
      { name: "Ishaant Majumdar", year: "Sophomore" },
      { name: "Shreyansh Panigrahi", year: "Sophomore" },
      { name: "Shreya Samba", year: "Sophomore" },
      { name: "Ansh Shah", year: "Sophomore" },
      { name: "Mohan Chillara", year: "Freshman" },
    ],
  },
];

export default function Team() {
  const [activeSeasonId, setActiveSeasonId] = useState(seasons[0].id);
  const activeSeason = seasons.find((season) => season.id === activeSeasonId) ?? seasons[0];

  return (
    <div className={styles.container}>
      <div className={styles.starField} />
      <div className={styles.content}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Singularity Robotics</p>
          <h1 className={styles.title}>Our Team</h1>
          <p className={styles.subtitle}>
            Explore each season&apos;s leadership and roster through a little galaxy of team stars.
          </p>

          <div className={styles.tabs} aria-label="Choose team season">
            {seasons.map((season) => (
              <button
                key={season.id}
                type="button"
                className={`${styles.tab} ${season.id === activeSeasonId ? styles.activeTab : ""}`}
                onClick={() => setActiveSeasonId(season.id)}
              >
                {season.label}
              </button>
            ))}
          </div>
        </section>

        <section className={styles.panel}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>{activeSeason.label}</p>
            <h2 className={styles.sectionTitle}>Leadership Team</h2>
          </div>

          <div className={styles.legend} aria-label="Role star legend">
            <span>
              <b className={styles.mechanicalStar}>{"\u2605"}</b> Mechanical
            </span>
            <span>
              <b className={styles.programmingStar}>{"\u2726"}</b> Programming
            </span>
            <span>
              <b className={styles.businessStar}>{"\u2727"}</b> Business / Outreach / Media
            </span>
          </div>

          <div className={styles.leadershipGrid}>
            {activeSeason.leadership.map((member) => {
              const roles = getMemberRoles(member);
              const isDualRole = roles.length === 2;
              const captain = isCaptain(member);
              const badgeClass = isDualRole
                ? `${styles.dualBadge} ${dualRoleBadgeClass[getDualRoleKey(roles)]}`
                : roleBadgeClass[roles[0]];

              return (
                <article
                  key={`${activeSeason.id}-${member.name}-${member.position}`}
                  className={`${styles.leaderCard} ${captain ? styles.captainCard : ""}`}
                >
                  <div className={`${styles.starBadge} ${badgeClass}`}>
                    <span role="img" aria-label={getRoleLabel(roles)}>
                      {isDualRole ? (
                        <span className={styles.dualStar}>{"\u2726"}</span>
                      ) : (
                        roleStars[roles[0]]
                      )}
                    </span>
                  </div>
                  <div>
                    <div className={styles.leaderNameRow}>
                      <h3>{member.name}</h3>
                      {captain ? <span className={styles.captainTag}>Captain</span> : null}
                    </div>
                    <p>{member.position}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.panel}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>{activeSeason.title}</p>
            <h2 className={styles.sectionTitle}>Team Members</h2>
          </div>

          <div className={styles.memberCloud}>
            {activeSeason.members.map((member) => (
              <button key={`${activeSeason.id}-${member.name}-${member.year}`} type="button" className={styles.memberChip}>
                <span>{member.name}</span>
                <small>{member.year}</small>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
