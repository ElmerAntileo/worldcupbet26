import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: { locale: string } };

const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";
const base = "https://www.worldcupbet26.com";
const locales = ["en", "es", "pt", "de", "fr", "it"];

function bonusUrl(l: string) {
  return l === "en" ? `${base}/1xbet-bonus` : `${base}/${l}/1xbet-bonus`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  return {
    title: "1xBet Welcome Bonus 2026 — 100% Up to €100 | WorldCupBet26",
    description:
      "Claim the 1xBet 100% welcome bonus up to €100 for World Cup 2026. No promo code needed. Register in 60 seconds and bet on 200+ markets per match.",
    alternates: {
      canonical: bonusUrl("en"),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, bonusUrl(l)])),
        "x-default": bonusUrl("en"),
      },
    },
    openGraph: {
      title: "1xBet Welcome Bonus 2026 — 100% Up to €100 | WorldCupBet26",
      description:
        "Claim the 1xBet 100% welcome bonus up to €100 for World Cup 2026. 200+ markets per match. No promo code needed.",
      url: bonusUrl("en"),
      siteName: "WorldCupBet26",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "1xBet Welcome Bonus 2026 — 100% Up to €100 | WorldCupBet26",
      description:
        "Claim the 1xBet 100% welcome bonus up to €100 for World Cup 2026. No promo code needed.",
    },
    // Mark page as locale-independent (same content per locale)
    robots: locale === "en" ? "index,follow" : "noindex,follow",
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const pros = [
  "200+ betting markets per World Cup match",
  "Best in-play odds in our daily comparison",
  "Huge live betting selection — bet while the match is live",
  "Fast, modern mobile app (iOS & Android)",
  "Early cashout available on all major markets",
  "130+ sports covered beyond football",
  "100% welcome bonus up to €100 — no promo code needed",
];

const cons = [
  "VPN may be required in some European regions (UK, DE, FR, ES, etc.)",
  "Interface can feel complex for first-time bettors",
];

const bonusTable = [
  { label: "Bonus type", value: "100% matched deposit" },
  { label: "Maximum bonus", value: "€100" },
  { label: "Minimum deposit", value: "€10" },
  { label: "Wagering requirement", value: "See 1xBet T&Cs" },
  { label: "Valid for", value: "New customers only" },
  { label: "Promo code", value: "Not required" },
];

const steps = [
  {
    n: "1",
    icon: "🎯",
    title: "Click the button below",
    desc: "Opens 1xBet in a new tab via our verified affiliate link",
  },
  {
    n: "2",
    icon: "📝",
    title: "Fill in your details",
    desc: "Name, email, date of birth — takes about 60 seconds",
  },
  {
    n: "3",
    icon: "💳",
    title: "Make your first deposit",
    desc: "Minimum €10 to activate the welcome bonus",
  },
  {
    n: "4",
    icon: "🎁",
    title: "Bonus credited instantly",
    desc: "100% matched up to €100 — ready to bet on any market",
  },
];

const faqs = [
  {
    q: "Do I need a promo code for 1xBet?",
    a: "No promo code is needed. The welcome bonus applies automatically when you register through our link and make your first qualifying deposit.",
  },
  {
    q: "Which countries can access 1xBet?",
    a: "1xBet is available in 100+ countries worldwide. A VPN may be required in some European regions including the UK, Germany, France, Spain and the Netherlands due to local regulations.",
  },
  {
    q: "What is 1xBet's minimum deposit?",
    a: "The minimum deposit to activate the 100% welcome bonus is €10. Your deposit is matched 100% up to a maximum of €100.",
  },
  {
    q: "How many markets does 1xBet offer per match?",
    a: "1xBet offers 200+ markets per World Cup match, including match result, in-play, Asian handicap, correct score, both teams to score, goalscorer, and many more.",
  },
  {
    q: "Is 1xBet safe?",
    a: "1xBet has been operating since 2007 under an international gaming licence. Always gamble responsibly and only bet what you can afford to lose.",
  },
];

// Reusable CTA button used multiple times on the page
function CTAButton({ label = "🎯 Claim 100% Bonus Now →", large = false }: { label?: string; large?: boolean }) {
  return (
    <a
      href={ONEXBET_URL}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      data-affiliate="1xBet"
      style={{
        display: "inline-block",
        background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
        color: "#fff",
        padding: large ? "18px 44px" : "14px 32px",
        borderRadius: "10px",
        fontWeight: 900,
        fontSize: large ? "17px" : "15px",
        textDecoration: "none",
        boxShadow: "0 6px 24px rgba(59,130,246,0.4)",
        letterSpacing: "0.01em",
      }}
    >
      {label}
    </a>
  );
}

export default function OnexBetBonusPage({ params }: Props) {
  const locale = params.locale;

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>

      {/* ── AFFILIATE DISCLOSURE ── */}
      <div style={{
        background: "rgba(59,130,246,0.06)",
        borderBottom: "1px solid rgba(59,130,246,0.15)",
        padding: "9px 20px",
        textAlign: "center",
        fontSize: "11px",
        color: "var(--muted)",
      }}>
        This page contains affiliate links. We may earn a commission if you register through our links, at no extra cost to you.
      </div>

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #040c18 0%, #0d1a2e 60%, #040c18 100%)",
        borderBottom: "1px solid var(--card-border)",
        padding: "52px 20px 44px",
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>

          {/* Badges */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "18px", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.35)", color: "#60a5fa", borderRadius: "4px", padding: "3px 11px", fontSize: "11px", fontWeight: 700 }}>
              🎯 BEST IN-PLAY ODDS
            </span>
            <span style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", borderRadius: "4px", padding: "3px 11px", fontSize: "11px", fontWeight: 700 }}>
              ✅ VERIFIED AFFILIATE LINK
            </span>
            <span style={{ background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.3)", color: "#ffd700", borderRadius: "4px", padding: "3px 11px", fontSize: "11px", fontWeight: 700 }}>
              🏆 WORLD CUP 2026
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 900, margin: "0 0 14px", lineHeight: 1.15 }}>
            Claim Your 1xBet World Cup Bonus<br />
            <span style={{ color: "#60a5fa" }}>100% Up to €100</span>
          </h1>

          <p style={{ color: "var(--muted)", fontSize: "16px", marginBottom: "28px", lineHeight: 1.6 }}>
            200+ markets per match&nbsp;·&nbsp;Best in-play odds&nbsp;·&nbsp;Register in 60 seconds
          </p>

          {/* Stat pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
            {[
              { label: "Welcome Bonus", val: "100% up to €100" },
              { label: "Min Deposit",   val: "€10" },
              { label: "Markets / Match", val: "200+" },
              { label: "Promo Code",    val: "Not required" },
            ].map((s) => (
              <div key={s.label} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "12px 18px" }}>
                <div style={{ color: "var(--muted)", fontSize: "10px", fontWeight: 600, marginBottom: "3px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
                <div style={{ fontWeight: 800, fontSize: "15px", color: "#60a5fa" }}>{s.val}</div>
              </div>
            ))}
          </div>

          <CTAButton label="🎯 Claim 100% Bonus Now →" large />
          <div style={{ color: "var(--muted)", fontSize: "11px", marginTop: "10px" }}>
            18+ · New customers only · T&Cs apply · Gamble responsibly
          </div>
        </div>
      </section>

      {/* ── QUICK VERDICT ── */}
      <section style={{ padding: "44px 20px 0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{
            background: "rgba(59,130,246,0.07)",
            border: "2px solid rgba(59,130,246,0.3)",
            borderRadius: "12px",
            padding: "28px 32px",
          }}>
            <div style={{ fontWeight: 800, fontSize: "13px", color: "#60a5fa", letterSpacing: "0.08em", marginBottom: "10px" }}>
              🎯 QUICK VERDICT — WorldCupBet26 Editorial
            </div>
            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--foreground)", marginBottom: "20px" }}>
              1xBet is our top pick for in-play World Cup betting. With <strong>200+ markets per match</strong>, the best live odds in our daily comparison, and a <strong>100% welcome bonus up to €100</strong> for new customers, it delivers maximum value for serious bettors. If 1xBet is available in your region, this is the bonus to claim.
            </p>
            <CTAButton label="🎯 Claim Bonus Now →" />
          </div>
        </div>
      </section>

      {/* ── 4-STEP CLAIM GUIDE ── */}
      <section style={{ padding: "44px 20px 0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "8px" }}>
            How to Claim Your 1xBet Bonus — 4 Steps
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "13px", marginBottom: "24px" }}>
            The entire process takes under 5 minutes.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", marginBottom: "28px" }}>
            {steps.map((s) => (
              <div key={s.n} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "22px 18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                    color: "#fff", display: "flex", alignItems: "center",
                    justifyContent: "center", fontWeight: 900, fontSize: "14px", flexShrink: 0,
                  }}>
                    {s.n}
                  </div>
                  <span style={{ fontSize: "20px" }}>{s.icon}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{s.title}</div>
                <div style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.55 }}>{s.desc}</div>
              </div>
            ))}
          </div>
          <CTAButton label="🎯 Get My Bonus — Start Step 1 →" />
        </div>
      </section>

      {/* ── BONUS DETAILS TABLE ── */}
      <section style={{ padding: "44px 20px 0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>
            1xBet Bonus Details
          </h2>
          <div style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", overflow: "hidden" }}>
            {bonusTable.map((row, i) => (
              <div key={row.label} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 20px",
                borderBottom: i < bonusTable.length - 1 ? "1px solid var(--card-border)" : "none",
                background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                gap: "16px",
                flexWrap: "wrap",
              }}>
                <span style={{ color: "var(--muted)", fontSize: "13px", fontWeight: 600 }}>{row.label}</span>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--foreground)" }}>{row.value}</span>
              </div>
            ))}
          </div>
          <p style={{ color: "var(--muted)", fontSize: "11px", marginTop: "10px" }}>
            Always read the full Terms &amp; Conditions on 1xBet before claiming any bonus.
          </p>
        </div>
      </section>

      {/* ── PROS / CONS ── */}
      <section style={{ padding: "44px 20px 0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>
            1xBet Pros &amp; Cons
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div style={{ background: "var(--card-bg)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "10px", padding: "24px" }}>
              <div style={{ fontWeight: 700, fontSize: "14px", color: "var(--accent)", marginBottom: "16px" }}>✅ Pros</div>
              {pros.map((p) => (
                <div key={p} style={{ display: "flex", gap: "8px", marginBottom: "10px", fontSize: "13px", lineHeight: 1.5 }}>
                  <span style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0 }}>✓</span>
                  {p}
                </div>
              ))}
            </div>
            <div style={{ background: "var(--card-bg)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "10px", padding: "24px" }}>
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#ef4444", marginBottom: "16px" }}>❌ Cons</div>
              {cons.map((c) => (
                <div key={c} style={{ display: "flex", gap: "8px", marginBottom: "10px", fontSize: "13px", lineHeight: 1.5 }}>
                  <span style={{ color: "#ef4444", marginTop: "2px", flexShrink: 0 }}>✗</span>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "44px 20px 0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {faqs.map((item, i) => (
              <div key={i} style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: i === 0 ? "10px 10px 4px 4px" : i === faqs.length - 1 ? "4px 4px 10px 10px" : "4px",
                padding: "18px 22px",
              }}>
                <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "8px", color: "var(--foreground)" }}>
                  {item.q}
                </div>
                <div style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.65 }}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "52px 20px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.10) 0%, rgba(29,78,216,0.06) 100%)",
            border: "2px solid rgba(59,130,246,0.3)",
            borderRadius: "14px",
            padding: "40px 36px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "36px", marginBottom: "12px" }}>🎯</div>
            <h2 style={{ fontSize: "clamp(20px, 4vw, 30px)", fontWeight: 900, marginBottom: "10px" }}>
              Ready to Claim Your Bonus?
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "28px", maxWidth: "440px", margin: "0 auto 28px", lineHeight: 1.65 }}>
              Register through our link, deposit €10 or more, and your 100% bonus — up to €100 — is credited instantly. No promo code needed.
            </p>
            <CTAButton label="🎯 Get 100% Bonus — Up to €100 →" large />
            <div style={{ color: "var(--muted)", fontSize: "11px", marginTop: "14px" }}>
              New customers only · Min deposit €10 · T&Cs apply
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSIBLE GAMBLING DISCLAIMER ── */}
      <div style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid var(--card-border)",
        padding: "20px",
        textAlign: "center",
        fontSize: "11px",
        color: "var(--muted)",
        lineHeight: 1.8,
      }}>
        <strong>18+ | Gambling involves risk | 1xBet T&Cs apply | Please gamble responsibly</strong>
        <br />
        <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)", textDecoration: "underline" }}>BeGambleAware.org</a>
        {" · "}
        <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)", textDecoration: "underline" }}>GamCare.org.uk</a>
        <br />
        WorldCupBet26.com is an affiliate website. We earn a commission on qualifying sign-ups at no extra cost to you.{" "}
        <Link href="/responsible-gambling" style={{ color: "var(--muted)", textDecoration: "underline" }}>
          Responsible Gambling Policy
        </Link>
        {" · "}
        <Link href="/choose-betting" style={{ color: "var(--muted)", textDecoration: "underline" }}>
          Compare All Bookmakers
        </Link>
      </div>

    </div>
  );
}
