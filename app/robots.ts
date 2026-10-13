import type { MetadataRoute } from "next"

// Allow every crawler, including Googlebot and Google-Extended.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.singularity-frc.com/sitemap.xml",
  }
}
