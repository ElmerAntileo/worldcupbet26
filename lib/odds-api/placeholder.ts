/** True when we should not call The Odds API (missing or template key). */
export function isOddsApiPlaceholder(): boolean {
  const k = process.env.ODDS_API_KEY?.trim() ?? "";
  return !k || k === "your_odds_api_key_here";
}
