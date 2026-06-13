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
