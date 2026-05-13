import type { NextRequest } from "next/server";
import type { GeoRegion } from "./types";

const COUNTRY_TO_REGION: Record<string, GeoRegion> = {
  US: "us",
  GB: "uk",
  CA: "ca",
  DE: "de",
};

/**
 * Infer monetization region from Vercel’s edge country header (`x-vercel-ip-country`).
 */
export function getGeo(request: NextRequest): string {
  const code = request.headers.get("x-vercel-ip-country")?.toUpperCase() ?? "";
  if (!code) return "row";
  return COUNTRY_TO_REGION[code] ?? "row";
}

/**
 * Rough default UI locale suggestion from monetization region (not a substitute for user preference).
 */
export function getLocaleFromGeo(geo: string): string {
  const g = geo.toLowerCase();
  if (g === "de") return "de";
  if (g === "uk") return "en";
  if (g === "us" || g === "ca") return "en";
  return "en";
}
