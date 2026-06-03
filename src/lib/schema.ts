export const bettingOddsSchema = {
  '@context': 'https://schema.org',
  '@type': 'BettingOdds',
  '@id': 'https://www.worldcupbet26.com/#betting-odds',
  name: 'World Cup 2026 Betting Odds',
  description: 'Live World Cup 2026 betting odds comparison from all major bookmakers',
  url: 'https://www.worldcupbet26.com',
  sport: 'Soccer',
  eventName: 'FIFA World Cup 2026',
  eventDate: '2026-06-11',
  bettingMarket: [
    {
      '@type': 'BettingMarket',
      name: 'Tournament Winner',
      offers: [
        { '@type': 'BettingOffer', name: 'Spain', oddsDecimal: '5.75', bookmaker: 'Betsson' },
        { '@type': 'BettingOffer', name: 'France', oddsDecimal: '6.00', bookmaker: 'Betsson' },
        { '@type': 'BettingOffer', name: 'England', oddsDecimal: '7.50', bookmaker: 'Betsson' },
        { '@type': 'BettingOffer', name: 'Brazil', oddsDecimal: '9.50', bookmaker: 'Betsson' },
      ]
    }
  ],
  bookmaker: [
    { '@type': 'Organization', name: 'Betsson', url: 'https://record.betsson.com/' },
    { '@type': 'Organization', name: '1xBet', url: 'https://1xbet.com/' },
    { '@type': 'Organization', name: 'Bet365', url: 'https://bet365.com/' },
    { '@type': 'Organization', name: 'Betway', url: 'https://betway.com/' },
  ]
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.worldcupbet26.com/#local-business',
  name: 'WorldCupBet26',
  description: 'Independent World Cup betting odds comparison and analysis',
  url: 'https://www.worldcupbet26.com',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '2400'
  }
};
