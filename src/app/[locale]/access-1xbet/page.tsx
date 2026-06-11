/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

const affiliateLinkPinnacle = 'https://www.pinnacle.com';

export default function Access1xBet() {
  const handleClickPinnacle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Direct access - Pinnacle works globally
    window.open(affiliateLinkPinnacle, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">⚡ 1xBet World Cup Betting</h1>
          <p className="text-2xl text-red-600 font-bold">🎯 WORLD CUP 2026 - START BETTING NOW!</p>
          <p className="text-lg text-gray-600 font-bold mt-4">⚠️ VPN REQUIRED FOR: Germany, UK, France, Netherlands, Spain, Sweden, Finland, Iceland</p>
        </div>

        {/* PRIMARY CTA: 1xBet */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 my-8 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">💰 SIGN UP AT 1xBet</h2>
          <p className="text-white text-lg mb-2">200+ World Cup markets • Live betting • Best odds</p>
          <p className="text-yellow-200 text-sm font-bold mb-6">⚠️ Restricted regions may need VPN (see below)</p>
          <a
            href={affiliateLinkPinnacle}
            onClick={handleClickPinnacle}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 font-bold py-4 px-12 rounded-lg text-2xl hover:bg-gray-100 shadow-lg"
          >
            ➜ CLICK HERE TO SIGN UP ←
          </a>
          <p className="text-white text-sm mt-4">Takes 2 minutes • Check VPN requirements for your region</p>
        </div>

        {/* BACKUP: Pinnacle */}
        <div className="bg-green-50 border-4 border-green-600 rounded-lg p-8 my-8 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">🌍 CAN&apos;T ACCESS 1xBet?</h2>
          <p className="text-gray-700 text-lg mb-6">Use <strong>Pinnacle</strong> - Works in 180+ countries, NO VPN needed</p>
          <a
            href={affiliateLinkPinnacle}
            onClick={handleClickPinnacle}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-bold py-4 px-12 rounded-lg text-xl hover:bg-green-700 shadow-lg"
          >
            ➜ CLICK HERE TO ACCESS PINNACLE ←
          </a>
        </div>

        {/* VPN REQUIREMENT */}
        <div className="bg-yellow-50 border-4 border-yellow-600 rounded-lg p-8 my-8">
          <h2 className="text-3xl font-bold text-yellow-700 mb-2 text-center">🔓 Using VPN to Access 1xBet</h2>
          <p className="text-center text-gray-600 mb-6 font-bold">If 1xBet is blocked in your region, use a VPN to connect through an allowed country</p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded border-2 border-yellow-400">
              <div className="text-3xl mb-2">📥</div>
              <h4 className="font-bold mb-2">Step 1</h4>
              <p className="text-sm"><strong>Get a free VPN:</strong></p>
              <p className="text-xs mt-1">• Tor Browser (torproject.org)</p>
              <p className="text-xs">• ProtonVPN (free)</p>
            </div>
            <div className="bg-white p-4 rounded border-2 border-yellow-400">
              <div className="text-3xl mb-2">⚙️</div>
              <h4 className="font-bold mb-2">Step 2</h4>
              <p className="text-sm">Install &amp; launch your VPN app</p>
            </div>
            <div className="bg-white p-4 rounded border-2 border-yellow-400">
              <div className="text-3xl mb-2">🌍</div>
              <h4 className="font-bold mb-2">Step 3</h4>
              <p className="text-sm">Select exit location: Canada, US, or other allowed country</p>
            </div>
            <div className="bg-white p-4 rounded border-2 border-yellow-400">
              <div className="text-3xl mb-2">✅</div>
              <h4 className="font-bold mb-2">Step 4</h4>
              <p className="text-sm">Visit 1xBet (keep VPN active while betting)</p>
            </div>
          </div>

          <div className="mt-6 bg-green-100 border-2 border-green-600 rounded p-4">
            <p className="text-green-800 text-center font-bold">💚 Prefer no VPN needed? <a href={affiliateLinkPinnacle} onClick={handleClickPinnacle} className="underline">Use Pinnacle instead</a></p>
          </div>
        </div>

        {/* Quick Stats */}
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
      </div>
    </div>
  );
}
