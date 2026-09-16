// Team roster data, unchanged from the current site's team.tsx (kept as the
// single source of truth per WORKER-COMMON.md — do not retype names).

export type RoleKind = "mechanical" | "programming" | "business"

export type LeadershipMember = {
  name: string
  position: string
  roleKind: RoleKind
  roleKinds?: [RoleKind, RoleKind]
}

export type TeamMember = {
  name: string
  year: string
}

export type Season = {
  id: string
  label: string
  title: string
  leadership: LeadershipMember[]
  members: TeamMember[]
}

export const roleLabels: Record<RoleKind, string> = {
  mechanical: "Mechanical",
  programming: "Programming",
  business: "Business, outreach, and media",
}

export const roleOrder: RoleKind[] = ["mechanical", "programming", "business"]

export function getMemberRoles(member: LeadershipMember) {
  return member.roleKinds ?? [member.roleKind]
}

export function isCaptain(member: LeadershipMember) {
  return member.position.toLowerCase().includes("captain")
}

export const seasons: Season[] = [
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
      { name: "Gyan Padoli", year: "Sophomore" },
      { name: "Rishi Vijaykrishna", year: "Sophomore" },
      { name: "Mohan Chillara", year: "Freshman" },
    ],
  },
]
