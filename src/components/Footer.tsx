import { Link } from "@/i18n/navigation";

export default function Footer() {
  return (
    <footer style={{background: "#090d12", borderTop: "1px solid var(--card-border)", marginTop: "4rem", padding: "2rem 1rem"}}>
      <div style={{maxWidth: "1200px", margin: "0 auto"}}>
        <div style={{display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", marginBottom: "1.5rem"}}>
          <div>
            <div style={{fontSize: "1.2rem", fontWeight: 800, color: "var(--accent)", marginBottom: "0.5rem"}}>WorldCupBet26</div>
            <p style={{color: "var(--muted)", fontSize: "0.85rem", maxWidth: "300px"}}>The best World Cup 2026 betting odds comparison. Updated live across 7 top bookmakers.</p>
          </div>
          <div style={{display: "flex", gap: "3rem"}}>
            <div>
              <div style={{color: "var(--foreground)", fontWeight: 700, marginBottom: "0.75rem", fontSize: "0.9rem"}}>Navigation</div>
              <div style={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                <Link href="/matches" style={{color: "var(--muted)", fontSize: "0.85rem"}}>Matches</Link>
                <Link href="/blog" style={{color: "var(--muted)", fontSize: "0.85rem"}}>Blog</Link>
              </div>
            </div>
            <div>
              <div style={{color: "var(--foreground)", fontWeight: 700, marginBottom: "0.75rem", fontSize: "0.9rem"}}>Legal</div>
              <div style={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                <Link href="/responsible-gambling" style={{color: "var(--muted)", fontSize: "0.85rem"}}>Responsible Gambling</Link>
                <Link href="/privacy" style={{color: "var(--muted)", fontSize: "0.85rem"}}>Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{borderTop: "1px solid var(--card-border)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center"}}>
          <p style={{color: "var(--muted)", fontSize: "0.8rem"}}>18+ Only. Gamble Responsibly. WorldCupBet26 contains affiliate links.</p>
          <p style={{color: "var(--muted)", fontSize: "0.8rem"}}>© 2026 WorldCupBet26. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
