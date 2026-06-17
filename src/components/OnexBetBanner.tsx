"use client";

const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

// Banner images from 1xBet affiliate Media section (publicly hosted CDN)
// 38053 = 728×90 "1st_dep_phone_DE", 38049 = 300×600 "1st_dep_phone_DE"
const BANNER_728x90 = "https://1x.partners/file-storage/img/AdAgent_1/b2895873-7961-4244-8211-369b38441f57.gif";
const BANNER_300x600 = "https://1x.partners/file-storage/img/AdAgent_1/ab920c90-3229-4d87-a543-9a0d9bc9a03d.gif";

export default function OnexBetBanner({ variant = "leaderboard" }: { variant?: "leaderboard" | "tall" }) {
  const src = variant === "tall" ? BANNER_300x600 : BANNER_728x90;
  const width = variant === "tall" ? 300 : 728;
  const height = variant === "tall" ? 600 : 90;

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
      <a
        href={ONEXBET_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        style={{ display: "block", maxWidth: width, width: "100%" }}
      >
        <img
          src={src}
          alt="1xBet — 100% Welcome Bonus, World Cup 2026 betting"
          width={width}
          height={height}
          style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
        />
      </a>
    </div>
  );
}
