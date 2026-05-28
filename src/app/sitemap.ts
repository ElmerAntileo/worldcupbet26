import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const base = "https://www.worldcupbet26.com";
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

const teamPages = [
  "/world-cup-2026-odds/argentina",
  "/world-cup-2026-odds/brazil",
  "/world-cup-2026-odds/france",
  "/world-cup-2026-odds/england",
  "/world-cup-2026-odds/spain",
  "/world-cup-2026-odds/germany",
  "/world-cup-2026-odds/portugal",
  "/world-cup-2026-odds/usa",
  "/world-cup-2026-odds/netherlands",
  "/world-cup-2026-odds/italy",
  "/world-cup-2026-odds/mexico",
  "/world-cup-2026-odds/belgium",
  "/world-cup-2026-odds/croatia",
  "/world-cup-2026-odds/canada",
  "/world-cup-2026-odds/uruguay",
  "/world-cup-2026-odds/morocco",
  "/world-cup-2026-odds/japan",
  "/world-cup-2026-odds/colombia",
  "/world-cup-2026-odds/senegal",
  "/world-cup-2026-odds/ecuador",
  "/world-cup-2026-odds/australia",
  "/world-cup-2026-odds/switzerland",
];

const blogPosts = [
  "/blog/world-cup-2026-predictions",
  "/blog/golden-boot-odds-2026",
  "/blog/best-world-cup-2026-betting-odds",
  "/blog/top-favorites-to-win",
  "/blog/group-stage-preview",
  "/blog/best-value-bets",
  "/blog/how-to-bet-world-cup",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Home — highest priority
    ...entry("/", { priority: 1.0, changeFrequency: "daily" }),

    // Core pages
    ...entry("/matches",               { priority: 0.9,  changeFrequency: "daily" }),
    ...entry("/blog",                  { priority: 0.8,  changeFrequency: "daily" }),
    ...entry("/world-cup-2026-groups", { priority: 0.9,  changeFrequency: "daily" }),
    ...entry("/world-cup-2026-odds",   { priority: 0.95, changeFrequency: "daily" }),

    // Team odds pages — high-traffic keywords
    ...teamPages.flatMap((slug) =>
      entry(slug, { priority: 0.90, changeFrequency: "daily" })
    ),

    // Review pages
    ...entry("/bet365-review",  { priority: 0.85, changeFrequency: "weekly" }),
    ...entry("/betsson-review", { priority: 0.85, changeFrequency: "weekly" }),
    ...entry("/1xbet-review",   { priority: 0.85, changeFrequency: "weekly" }),

    // Blog posts
    ...blogPosts.flatMap((slug) =>
      entry(slug, { priority: 0.80, changeFrequency: "weekly" })
    ),

    // Legal / info pages
    ...entry("/responsible-gambling", { priority: 0.4, changeFrequency: "monthly" }),
    ...entry("/privacy",              { priority: 0.3, changeFrequency: "yearly"  }),
  ];
}
