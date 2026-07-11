import type { MetadataRoute } from "next";

function getSiteBase(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return "http://localhost:3000";
  const url = raw.replace(/\/$/, "");
  // Ensure www prefix for production
  return url.replace("https://worldcupbet26.com", "https://www.worldcupbet26.com");
}

export default function robots(): MetadataRoute.Robots {
  const base = getSiteBase();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
