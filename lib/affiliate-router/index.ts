// Affiliate tracking links
export const AFFILIATE_LINKS: Record<string, string> = {
  betsson:  'https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/',
  onexbet:  'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97',
  '1xbet':  'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97',
  bet365:   'https://bet365.com',
  betway:   'https://betway.com',
  sport888: 'https://888sport.com',
  williamhill: 'https://williamhill.com',
  draftkings: 'https://draftkings.com',
  fanduel:  'https://fanduel.com',
  unibet:   'https://unibet.com',
  pinnacle: 'https://pinnacle.com',
};

// Returns the affiliate tracking URL for a bookmaker.
// geo is accepted for future geo-targeted links but currently unused.
export function getAffiliateLink(bookmaker: string, geo?: string): string {
  void geo; // reserved for future geo-targeted affiliate links
  const key = bookmaker.toLowerCase().replace(/[^a-z0-9]/g, '');
  return AFFILIATE_LINKS[key] ?? AFFILIATE_LINKS.betsson;
}

// Returns bookmaker keys in priority order for a given geo/country code.
// Approved partners (Betsson, 1xBet) always appear first.
export function rankBookmakers(geo: string): string[] {
  const base = ['betsson', 'onexbet', 'bet365', 'betway', 'draftkings',
    'fanduel', 'unibet', 'pinnacle', 'sport888', 'williamhill'];

  const geoBoosts: Record<string, string[]> = {
    US: ['draftkings', 'fanduel', 'betsson', 'onexbet', 'unibet'],
    UK: ['betsson', 'betway', 'williamhill', 'onexbet', 'bet365'],
    DE: ['betsson', 'onexbet', 'bet365', 'unibet', 'betway'],
    CA: ['betsson', 'onexbet', 'betway', 'bet365', 'unibet'],
    BR: ['betsson', 'onexbet', 'bet365', 'betway', 'sport888'],
    MX: ['betsson', 'onexbet', 'bet365', 'betway', 'sport888'],
  };

  const boosted = geoBoosts[geo.toUpperCase()] ?? [];
  const rest = base.filter((k) => !boosted.includes(k));
  return [...boosted, ...rest];
}
