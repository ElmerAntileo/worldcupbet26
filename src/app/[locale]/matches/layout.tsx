import type { Metadata } from "next";
import { OG_IMAGE, TWITTER_IMAGE } from "@/lib/og";

const locales = ["en", "es", "pt", "de", "fr", "it"];
const base = "https://www.worldcupbet26.com";
function url(l: string) {
  return l === "en" ? `${base}/matches` : `${base}/${l}/matches`;
}

export const metadata: Metadata = {
  title: "World Cup 2026 Match Odds — Compare All 48 Games",
  description:
    "Live 1X2 odds for every World Cup 2026 match. Compare Betsson, 1xBet, Bet365 & Betway side-by-side. Spot the best odds instantly — updated daily. Jun 11–Jul 19.",
  keywords: [
    "World Cup 2026 odds",
    "FIFA 2026 match betting",
    "World Cup 2026 matches",
    "World Cup betting odds comparison",
    "USA Canada Mexico 2026 odds",
  ],
  alternates: {
    canonical: url("en"),
    languages: Object.fromEntries(locales.map((l) => [l, url(l)])),
  },
  openGraph: {
    title: "World Cup 2026 Match Odds — Compare All 48 Games",
    description:
      "Compare live 1X2 betting odds for every 2026 FIFA World Cup match. Best odds highlighted. Updated daily.",
    type: "website",
    url: url("en"),
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Cup 2026 Match Odds Comparison",
    description:
      "Compare odds for all 48 World Cup 2026 matches. Betsson, 1xBet, Bet365 & Betway — best odds highlighted instantly.",
    images: [TWITTER_IMAGE],
  },
};

export default function MatchesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
