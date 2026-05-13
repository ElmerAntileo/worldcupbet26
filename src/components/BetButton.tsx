"use client";

import { getAffiliateLink } from "../../lib/affiliate-router";

type Props = {
  bookmaker: string;
  geo: string;
  label?: string;
};

export function BetButton({ bookmaker, geo, label = "Bet" }: Props) {
  const href = getAffiliateLink(bookmaker, geo);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      onClick={() => {
        console.log("[BetButton] click", { bookmaker, geo, href });
      }}
    >
      {label}
    </a>
  );
}
