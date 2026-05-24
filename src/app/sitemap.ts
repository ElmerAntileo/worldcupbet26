import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

function getSiteBase(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return "http://localhost:3000";
  return raw.replace(/\/$/, "");
}

const base = getSiteBase();
const locales = [...routing.locales];
const defaultLocale = routing.defaultLocale;

/** Build a URL for a given path + locale, respecting the "as-needed" prefix. */
function pageUrl(path: string, locale: string): string {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return `${base}${prefix}${path}`;
}

/** Build a sitemap entry with full hreflang alternates for every locale. */
function entry(
  path: string,
  options: {
    priority?: number;
    changeFrequency?: MetadataRoute.Sitemap[0]["changeFrequency"];
    lastModified?: Date;
  } = {}
): MetadataRoute.Sitemap[0][] {
  const { priority = 0.7, changeFrequency = "weekly", lastModified = new Date() } = options;
  return locales.map((locale) => ({
    url: pageUrl(path, locale),
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, pageUrl(path, l)])),
    },
  }));
}

const blogPosts = [
  "/blog/best-world-cup-2026-betting-odds",
  "/blog/group-stage-preview",
  "/blog/top-favorites-to-win",
  "/blog/best-value-bets",
  "/blog/how-to-bet-world-cup",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Home — highest priority
    ...entry("/", { priority: 1.0, changeFrequency: "daily" }),

    // Core pages
    ...entry("/matches",  { priority: 0.9, changeFrequency: "daily" }),
    ...entry("/blog",     { priority: 0.8, changeFrequency: "daily" }),

    // Review pages
    ...entry("/betsson-review", { priority: 0.85, changeFrequency: "weekly" }),
    ...entry("/1xbet-review",   { priority: 0.85, changeFrequency: "weekly" }),

    // Blog posts
    ...blogPosts.flatMap((slug) =>
      entry(slug, { priority: 0.75, changeFrequency: "monthly" })
    ),

    // Legal / info pages
    ...entry("/responsible-gambling", { priority: 0.4, changeFrequency: "monthly" }),
    ...entry("/privacy",              { priority: 0.3, changeFrequency: "yearly"  }),
  ];
}
