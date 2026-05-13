import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

/** Production URL from env; localhost only when unset or blank after trim. */
function getSiteBase(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return "http://localhost:3000";
  return raw.replace(/\/$/, "");
}

const base = getSiteBase();

function homeUrl(locale: string): string {
  if (locale === routing.defaultLocale) {
    return base;
  }
  return `${base}/${locale}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = [...routing.locales];

  return locales.map((locale) => ({
    url: homeUrl(locale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, homeUrl(l)])),
    },
  }));
}
