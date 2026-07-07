/**
 * Countries where 1xBet is geo-restricted and typically requires a VPN.
 * Visitors from any country NOT in this list see a green "Available in your
 * region" message instead of the blanket VPN warning — improving conversions
 * for the majority of the world where 1xBet works without a VPN.
 *
 * Source: 1xBet Terms of Service & known regulatory restrictions (June 2026).
 * Update this list if 1xBet's geo policy changes.
 */
export const RESTRICTED_COUNTRIES_1XBET: readonly string[] = [
  'DE', // Germany
  'GB', // United Kingdom
  'FR', // France
  'NL', // Netherlands
  'ES', // Spain
  'SE', // Sweden
  'FI', // Finland
  'IS', // Iceland
  'US', // United States
  'AU', // Australia
  'IT', // Italy
  'BE', // Belgium
  'PT', // Portugal
  'CY', // Cyprus
  'CZ', // Czech Republic
  'DK', // Denmark
  'EE', // Estonia
  'GR', // Greece
  'HU', // Hungary
  'IE', // Ireland
  'LT', // Lithuania
  'LV', // Latvia
  'MT', // Malta
  'PL', // Poland
  'RO', // Romania
  'SK', // Slovakia
  'SI', // Slovenia
] as const;

/**
 * Countries where Betsson's ROW affiliate link is blocked or geo-restricted.
 * Users from these countries should NOT be shown Betsson CTAs — they will hit
 * a country-blocked page and never convert.
 */
export const BLOCKED_COUNTRIES_BETSSON: readonly string[] = [
  'US', // United States — fully blocked
  'CA', // Canada — fully blocked
  'AU', // Australia — fully blocked
  'GB', // UK — separate license, ROW link doesn't apply
  'FR', // France — separate license
  'IL', // Israel — blocked
  'GH', // Ghana — blocked
  'NG', // Nigeria — blocked
] as const;

/**
 * Countries where Betway operates a locally licensed brand via Super Partners.
 * Visitors from these countries should be shown Betway as primary CTA since
 * both Betsson ROW and/or 1xBet may be restricted.
 * Links route through /api/redirect/betway which geo-selects the right brand.
 */
export const BETWAY_PRIORITY_COUNTRIES: readonly string[] = [
  'GB', // UK — betway.com/bwp/bet10get60 (World Cup page); 1xBet & Betsson both unavailable
  'ES', // Spain — betway.es; 1xBet restricted, Betsson partially blocked
  'CA', // Canada — betway.ca (Ontario market); Betsson fully blocked
  'MX', // Mexico — betway.mx; adds a licensed local alternative
  'DE', // Germany — betway.de; 1xBet restricted, Betway DE adds local licensed option
] as const;
