export const metadata = {
  title: "Responsible Gambling",
  description: "WorldCupBet26 is committed to responsible gambling. Set budgets, know the risks, and access support resources. 18+ only.",
  alternates: {
    canonical: "https://www.worldcupbet26.com/responsible-gambling",
  },
  openGraph: {
    title: "Responsible Gambling",
    description: "Bet safely with WorldCupBet26. Tips for responsible gambling, budget setting, and support resources. 18+ only.",
    url: "https://www.worldcupbet26.com/responsible-gambling",
    siteName: "WorldCupBet26",
    type: "website" as const,
  },
  twitter: {
    card: "summary" as const,
    title: "Responsible Gambling",
    description: "Bet safely. Tips for responsible gambling and support resources. 18+ only.",
  },
};

export default function ResponsibleGamblingPage() {
  return (
    <div style={{maxWidth: "900px", margin: "0 auto", padding: "2rem 1rem"}}>
      <div style={{background: "var(--accent)", color: "#0d1117", padding: "1rem 1.5rem", borderRadius: "8px", marginBottom: "2rem", fontWeight: 700, fontSize: "1.1rem"}}>
        18+ Only — Please gamble responsibly
      </div>
      <h1 className="section-title">Responsible Gambling</h1>
      <p style={{color: "var(--muted)", marginBottom: "2rem", lineHeight: 1.8}}>WorldCupBet26 is committed to promoting responsible gambling. Gambling should always be fun and entertaining — never a way to make money or solve financial problems.</p>
      <div style={{display: "grid", gap: "1rem", marginBottom: "2rem"}}>
        {[
          {title: "Set a Budget", text: "Decide how much you can afford to lose before you start. Never exceed that limit."},
          {title: "Never Chase Losses", text: "If you lose, accept it and walk away. Chasing losses leads to bigger losses."},
          {title: "Take Breaks", text: "Set time limits on your betting sessions. Take regular breaks."},
          {title: "Keep it Fun", text: "Gambling is entertainment, not income. Stop if it stops being fun."},
        ].map((item) => (
          <div key={item.title} className="card" style={{padding: "1.25rem"}}>
            <div style={{color: "var(--accent)", fontWeight: 700, marginBottom: "0.25rem"}}>{item.title}</div>
            <div style={{color: "var(--muted)", fontSize: "0.9rem"}}>{item.text}</div>
          </div>
        ))}
      </div>
      <h2 className="section-title">Get Help</h2>
      <div style={{display: "grid", gap: "0.75rem", marginBottom: "2rem"}}>
        {[
          {name: "GamCare (UK)", url: "https://www.gamcare.org.uk", desc: "Free support, information and counselling"},
          {name: "Gamblers Anonymous", url: "https://www.gamblersanonymous.org", desc: "Worldwide fellowship for problem gamblers"},
          {name: "BZgA (Germany)", url: "https://www.bzga.de", desc: "German Federal Centre for Health Education"},
          {name: "NCPG Helpline (US)", url: "tel:1-800-522-4700", desc: "1-800-522-4700 — Free, confidential helpline"},
        ].map((item) => (
          <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="card" style={{padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div>
              <div style={{fontWeight: 700, color: "var(--foreground)"}}>{item.name}</div>
              <div style={{color: "var(--muted)", fontSize: "0.85rem"}}>{item.desc}</div>
            </div>
            <div style={{color: "var(--accent)", fontSize: "1.2rem"}}>→</div>
          </a>
        ))}
      </div>
      <h2 className="section-title">Affiliate Disclosure</h2>
      <p style={{color: "var(--muted)", lineHeight: 1.8}}>WorldCupBet26 contains affiliate links. We may earn a commission when you click bookmaker links and register an account. This does not affect the odds or offers you receive. We only recommend licensed and regulated bookmakers.</p>
    </div>
  );
}
