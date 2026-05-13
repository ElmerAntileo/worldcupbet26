import type { GeoRegion } from "../types";

const ALL_BOOKMAKERS = [
  "bet365",
  "draftkings",
  "fanduel",
  "betway",
  "unibet",
  "bwin",
  "888sport",
] as const;

type BookmakerSlug = (typeof ALL_BOOKMAKERS)[number];

function placeholderUrl(slug: string, region: GeoRegion): string {
  return `https://affiliate-placeholder.example/${region}/${slug}`;
}

/** Affiliate landing URLs per bookmaker and region (replace with real tracked links). */
const AFFILIATE_BY_BOOKMAKER: Record<
  BookmakerSlug,
  Record<GeoRegion, string>
> = {
  bet365: {
    us: placeholderUrl("bet365", "us"),
    uk: placeholderUrl("bet365", "uk"),
    ca: placeholderUrl("bet365", "ca"),
    de: placeholderUrl("bet365", "de"),
    row: placeholderUrl("bet365", "row"),
  },
  draftkings: {
    us: placeholderUrl("draftkings", "us"),
    uk: placeholderUrl("draftkings", "uk"),
    ca: placeholderUrl("draftkings", "ca"),
    de: placeholderUrl("draftkings", "de"),
    row: placeholderUrl("draftkings", "row"),
  },
  fanduel: {
    us: placeholderUrl("fanduel", "us"),
    uk: placeholderUrl("fanduel", "uk"),
    ca: placeholderUrl("fanduel", "ca"),
    de: placeholderUrl("fanduel", "de"),
    row: placeholderUrl("fanduel", "row"),
  },
  betway: {
    us: placeholderUrl("betway", "us"),
    uk: placeholderUrl("betway", "uk"),
    ca: placeholderUrl("betway", "ca"),
    de: placeholderUrl("betway", "de"),
    row: placeholderUrl("betway", "row"),
  },
  unibet: {
    us: placeholderUrl("unibet", "us"),
    uk: placeholderUrl("unibet", "uk"),
    ca: placeholderUrl("unibet", "ca"),
    de: placeholderUrl("unibet", "de"),
    row: placeholderUrl("unibet", "row"),
  },
  bwin: {
    us: placeholderUrl("bwin", "us"),
    uk: placeholderUrl("bwin", "uk"),
    ca: placeholderUrl("bwin", "ca"),
    de: placeholderUrl("bwin", "de"),
    row: placeholderUrl("bwin", "row"),
  },
  "888sport": {
    us: placeholderUrl("888sport", "us"),
    uk: placeholderUrl("888sport", "uk"),
    ca: placeholderUrl("888sport", "ca"),
    de: placeholderUrl("888sport", "de"),
    row: placeholderUrl("888sport", "row"),
  },
};

const RANK_BY_REGION: Record<GeoRegion, BookmakerSlug[]> = {
  us: ["draftkings", "fanduel", "bet365", "betway", "unibet", "bwin", "888sport"],
  uk: ["bet365", "unibet", "betway", "bwin", "888sport", "draftkings", "fanduel"],
  ca: ["betway", "draftkings", "fanduel", "bet365", "unibet", "bwin", "888sport"],
  de: ["bwin", "unibet", "bet365", "betway", "888sport", "draftkings", "fanduel"],
  row: ["bet365", "888sport", "unibet", "betway", "bwin", "draftkings", "fanduel"],
};

function normalizeGeo(geo: string): GeoRegion {
  const g = geo.toLowerCase();
  if (g === "us" || g === "uk" || g === "ca" || g === "de" || g === "row") {
    return g;
  }
  return "row";
}

function normalizeSlug(bookmaker: string): BookmakerSlug | null {
  const s = bookmaker.trim().toLowerCase() as BookmakerSlug;
  return (ALL_BOOKMAKERS as readonly string[]).includes(s)
    ? (s as BookmakerSlug)
    : null;
}

export function getAffiliateLink(bookmaker: string, geo: string): string {
  const slug = normalizeSlug(bookmaker);
  const region = normalizeGeo(geo);
  if (!slug) {
    return placeholderUrl(bookmaker.trim().toLowerCase() || "unknown", region);
  }
  return AFFILIATE_BY_BOOKMAKER[slug][region];
}

export function rankBookmakers(geo: string): string[] {
  const region = normalizeGeo(geo);
  return [...RANK_BY_REGION[region]];
}
