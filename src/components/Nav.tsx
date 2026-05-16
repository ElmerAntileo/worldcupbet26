"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";

const LOCALE_LABEL: Record<string, string> = { en: "EN", es: "ES", pt: "PT", de: "DE", fr: "FR", it: "IT" };

export function Nav() {
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <header style={{background: "var(--nav-bg)", borderBottom: "2px solid var(--accent)"}}>
      <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "60px"}}>
        <div style={{display: "flex", alignItems: "center", gap: "2rem"}}>
          <Link href="/" style={{fontSize: "1.4rem", fontWeight: 800, color: "var(--accent)", letterSpacing: "-0.5px"}}>WorldCupBet26</Link>
          <nav style={{display: "flex", gap: "1.5rem"}}>
            <Link href="/matches" style={{color: "var(--foreground)", fontWeight: 600, fontSize: "0.95rem", opacity: 0.85}}>Matches</Link>
            <Link href="/blog" style={{color: "var(--foreground)", fontWeight: 600, fontSize: "0.95rem", opacity: 0.85}}>Blog</Link>
          </nav>
        </div>
        <div style={{display: "flex", gap: "0.5rem", alignItems: "center"}}>
          {routing.locales.map((loc) => (
            <Link key={loc} href={pathname} locale={loc} style={{padding: "3px 8px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, background: loc === locale ? "var(--accent)" : "transparent", color: loc === locale ? "#0d1117" : "var(--muted)", border: "1px solid", borderColor: loc === locale ? "var(--accent)" : "var(--card-border)"}}>
              {LOCALE_LABEL[loc]}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Nav;
