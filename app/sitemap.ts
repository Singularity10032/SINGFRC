import type { MetadataRoute } from "next"
import { stories } from "@/lib/community"

const BASE = "https://www.singularity-frc.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/robots",
    "/team",
    "/community",
    "/gallery",
    "/sponsors",
    "/apply",
    // The CADathon pages ship on their own branch; merge that one before or with this.
    "/cadathon",
    "/cadathon/code-of-conduct",
    ...stories.map((s) => `/community/${s.slug}`),
  ]
  return paths.map((p) => ({ url: `${BASE}${p}` }))
}
