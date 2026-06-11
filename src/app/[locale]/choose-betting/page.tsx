/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';

const affiliateLink1xBet = 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97';
const bypassLink1xBet = `/api/geo-bypass/${encodeURIComponent(affiliateLink1xBet)}`;
const affiliateLinkPinnacle = 'https://www.pinnacle.com';

export default function ChooseBetting() {
  const [country, setCountry] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Detect user's country
    fetch('/api/detect-country')
      .then((res) => res.json())
      .then((data) => {
        setCountry(data.country);
        setLoading(false);
      })
      .catch(() => {
        setCountry('UNKNOWN');
        setLoading(false);
      });
  }, []);

  const handleGeoBypass = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(bypassLink1xBet, '_blank');
  };

  const handlePinnacle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(affiliateLinkPinnacle, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <p className="text-xl text-gray-600">Detecting your location...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">⚡ World Cup 2026 Betting</h1>
          <p className="text-2xl text-gray-600 mb-4">Choose Your Betting Option</p>
          <p className="text-lg text-gray-500">Detected location: <strong>{country}</strong></p>
        </div>

        {/* OPTION 1: Pinnacle - Works Everywhere */}
        <div className="bg-green-50 border-4 border-green-600 rounded-lg p-8 my-8 text-center">
          <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full mb-4 font-bold">
            ✅ INSTANT ACCESS - WORKS EVERYWHERE
          </div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">🌍 Pinnacle</h2>
          <p className="text-gray-700 text-lg mb-6">
            <strong>Works in 180+ countries</strong> | No VPN/Proxy needed | Instant access
          </p>
          <ul className="text-gray-700 mb-6 space-y-2 max-w-md mx-auto">
            <li>✅ Available worldwide (no geo-restrictions)</li>
            <li>✅ Great World Cup odds</li>
            <li>✅ Fast payouts</li>
            <li>✅ Works on any device immediately</li>
          </ul>
          <a
            href={affiliateLinkPinnacle}
            onClick={handlePinnacle}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-lg text-xl shadow-lg"
          >
            ➜ START BETTING WITH PINNACLE NOW ←
          </a>
          <p className="text-green-600 font-bold mt-4">✨ EASIEST OPTION - NO SETUP NEEDED</p>
        </div>

        {/* DIVIDER */}
        <div className="text-center my-8">
          <p className="text-gray-400 font-bold">OR</p>
        </div>

        {/* OPTION 2: 1xBet with VPN Instructions */}
        <div className="bg-blue-50 border-4 border-blue-600 rounded-lg p-8 my-8 text-center">
          <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full mb-4 font-bold">
            💰 BETTER ODDS (VPN Required*)
          </div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">1xBet*</h2>
          <p className="text-gray-700 text-lg mb-6">
            <strong>200+ markets & best odds</strong> | Higher limits | Live betting
          </p>
          <ul className="text-gray-700 mb-6 space-y-2 max-w-md mx-auto">
            <li>✅ 200+ World Cup markets</li>
            <li>✅ Live in-play betting</li>
            <li>✅ Best odds on the market</li>
            <li>✅ Highest payout limits</li>
            <li>⚠️ Requires VPN for your region*</li>
          </ul>
          <a
            href={bypassLink1xBet}
            onClick={handleGeoBypass}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg text-xl shadow-lg"
          >
            ➜ SIGN UP AT 1xBET ←
          </a>
          <p className="text-blue-700 font-bold mt-4 text-sm">* See VPN instructions below</p>
        </div>

        {/* VPN INSTRUCTIONS */}
        <div className="bg-yellow-50 border-4 border-yellow-600 rounded-lg p-8 mt-12">
          <h3 className="text-2xl font-bold text-yellow-700 mb-6 text-center">🔓 Using 1xBet? Here&apos;s How to Access It</h3>
          <p className="text-gray-700 text-center mb-6 font-bold">1xBet requires a VPN for access from restricted regions (Germany, UK, USA, Canada, Ireland, etc.)</p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded border-2 border-yellow-400">
              <div className="text-3xl mb-2">📥</div>
              <h4 className="font-bold mb-2">Step 1: Get a VPN</h4>
              <p className="text-sm">Download free Tor Browser or ProtonVPN from your app store</p>
            </div>
            <div className="bg-white p-4 rounded border-2 border-yellow-400">
              <div className="text-3xl mb-2">⚙️</div>
              <h4 className="font-bold mb-2">Step 2: Connect</h4>
              <p className="text-sm">Launch VPN and select a country where 1xBet operates (Canada, US, etc.)</p>
            </div>
            <div className="bg-white p-4 rounded border-2 border-yellow-400">
              <div className="text-3xl mb-2">🌐</div>
              <h4 className="font-bold mb-2">Step 3: Open 1xBet</h4>
              <p className="text-sm">Visit 1xBet link while connected to your VPN</p>
            </div>
            <div className="bg-white p-4 rounded border-2 border-yellow-400">
              <div className="text-3xl mb-2">✅</div>
              <h4 className="font-bold mb-2">Step 4: Sign Up</h4>
              <p className="text-sm">Create account and start betting on World Cup</p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-6 text-sm">
            <strong>Recommended free option:</strong> Tor Browser is completely free and safe. Download from torproject.org
          </p>
        </div>

        {/* COMPARISON */}
        <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 mt-12">
          <h3 className="text-xl font-bold mb-4 text-center">Pinnacle vs 1xBet</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-green-700 mb-3">Pinnacle ✅</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>✅ Works immediately - no VPN needed</li>
                <li>✅ Available in 180+ countries</li>
                <li>✅ Great World Cup odds</li>
                <li>✅ Perfect for most users</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-700 mb-3">1xBet 🎯</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>⚠️ Requires VPN for restricted regions</li>
                <li>✅ More betting markets (200+)</li>
                <li>✅ Better odds on some matches</li>
                <li>✅ Higher betting limits</li>
              </ul>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-12 grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-blue-100 p-6 rounded-lg">
            <div className="text-4xl font-bold text-blue-700 mb-2">200+</div>
            <p className="text-gray-700">World Cup Markets</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <div className="text-4xl font-bold text-green-700 mb-2">180+</div>
            <p className="text-gray-700">Countries Supported</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg">
            <div className="text-4xl font-bold text-purple-700 mb-2">2 min</div>
            <p className="text-gray-700">Time to Sign Up</p>
          </div>
        </div>

        {/* FOOTNOTE */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>* VPN required for: Germany, UK, France, Netherlands, Spain, Sweden, Finland, Iceland, and other restricted regions</p>
        </div>
      </div>
    </div>
  );
}
