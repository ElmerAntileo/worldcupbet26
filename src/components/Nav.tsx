"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";

const LOCALE_LABEL: Record<string, string> = {
  en: "EN", es: "ES", pt: "PT", de: "DE", fr: "FR", it: "IT",
};

export function Nav() {
  const pathname = usePathname();
  const locale = useLocale();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header style={{
      background: "rgba(4,12,24,0.96)",
      borderBottom: "1px solid rgba(0,208,132,0.2)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      position: "sticky",
      top: 0,
      zIndex: 50,
    }}>
      {/* Tournament announcement bar */}
      <div style={{
        background: "linear-gradient(90deg, #040c18 0%, #071525 40%, #040c18 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "5px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        fontSize: "11px",
        color: "var(--muted-light)",
        fontWeight: 600,
        letterSpacing: "0.04em",
      }}>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ color: "var(--gold)" }}>🏆</span>
          FIFA WORLD CUP 2026™
        </span>
        <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
        <span>🇺🇸 USA · 🇨🇦 CANADA · 🇲🇽 MEXICO</span>
        <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
        <span>JUN 11 – JUL 19, 2026</span>
      </div>

      {/* Main nav */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "58px",
      }}>
        {/* Left: logo + links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            <span style={{
              fontSize: "22px",
              fontWeight: 900,
              letterSpacing: "-0.5px",
              background: "linear-gradient(135deg, #00d084, #00f09a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              WorldCupBet26
            </span>
          </Link>

          <nav style={{ display: "flex", gap: "4px" }}>
            {[
              { href: "/matches", label: "Matches" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  color: isActive(href) ? "var(--accent)" : "var(--muted-light)",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  background: isActive(href) ? "rgba(0,208,132,0.1)" : "transparent",
                  border: `1px solid ${isActive(href) ? "rgba(0,208,132,0.25)" : "transparent"}`,
                  transition: "all 0.15s",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: locale switcher */}
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          {routing.locales.map((loc) => (
            <Link
              key={loc}
              href={pathname}
              locale={loc}
              style={{
                padding: "3px 8px",
                borderRadius: "5px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                background: loc === locale
                  ? "linear-gradient(135deg, #00d084, #00b870)"
                  : "rgba(255,255,255,0.04)",
                color: loc === locale ? "#040c18" : "var(--muted)",
                border: `1px solid ${loc === locale ? "transparent" : "rgba(255,255,255,0.07)"}`,
                transition: "all 0.15s",
              }}
            >
              {LOCALE_LABEL[loc]}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Nav;
