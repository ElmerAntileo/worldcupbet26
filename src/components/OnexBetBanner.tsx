"use client";

const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

// Banner image URLs from 1xBet affiliate media library (IDs 38053 = 728×90, 38049 = 300×600)
const BANNER_728x90 = "https://1x.partners/file-storage/img/AdAgent_1/b2895873-7961-4244-8211-369b38441f57.gif";
const BANNER_300x250 = "https://1x.partners/file-storage/img/AdAgent_1/54100ad2-6630-48e7-af14-3b834b15a257.gif";

export default function OnexBetBanner({ variant = "leaderboard" }: { variant?: "leaderboard" | "square" }) {
  if (variant === "square") {
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
        <a
          href={ONEXBET_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          style={{ display: "block", maxWidth: "300px", width: "100%" }}
        >
          <img
            src={BANNER_300x250}
            alt="Bet on the World Cup 2026 with 1xBet"
            width={300}
            height={250}
            style={{ width: "100%", height: "auto", borderRadius: "8px", display: "block" }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </a>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0", overflow: "hidden" }}>
      <a
        href={ONEXBET_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        style={{ display: "block", maxWidth: "728px", width: "100%" }}
      >
        <img
          src={BANNER_728x90}
          alt="Bet on the World Cup 2026 with 1xBet"
          width={728}
          height={90}
          style={{ width: "100%", height: "auto", borderRadius: "8px", display: "block" }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </a>
    </div>
  );
}
