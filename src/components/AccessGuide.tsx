'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

interface AccessGuideProps {
  program: '1xbet' | 'betsson';
  affiliateLink: string;
}

export default function AccessGuide({ program, affiliateLink }: AccessGuideProps) {
  const [geoBlocked, setGeoBlocked] = useState(false);
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Check if user appears to be geo-blocked
    checkGeoBlock();
  }, []);

  const checkGeoBlock = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();

      // List of restricted countries
      const restrictedCountries = ['DE', 'AT', 'FR', 'NL', 'IT', 'ES', 'CH', 'PL'];
      if (restrictedCountries.includes(data.country_code)) {
        setGeoBlocked(true);
      }
    } catch (error) {
      console.error('Geo check failed:', error);
    }
  };

  const handleStepComplete = (stepNum: number) => {
    setStep(stepNum + 1);
    if (stepNum >= 3) {
      setCompleted(true);
    }
  };

  if (!geoBlocked) {
    // User is not blocked, show direct link
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 my-8">
        <h3 className="text-2xl font-bold text-green-700 mb-3">✅ Access Available</h3>
        <p className="text-gray-700 mb-4">Your location has access to {program.toUpperCase()}. Click below to sign up:</p>
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'affiliate_click', {
                event_category: 'Affiliate',
                event_label: program,
                event_value: 1,
              });
            }
          }}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
        >
          Sign Up at {program.toUpperCase()} →
        </a>
      </div>
    );
  }

  // User is geo-blocked, show Tor Browser guide
  return (
    <div className="bg-amber-50 border-2 border-amber-500 rounded-lg p-6 my-8">
      <h3 className="text-2xl font-bold text-amber-700 mb-4">🔓 Your Location Requires Tor Browser</h3>
      <p className="text-gray-700 mb-6">
        {program.toUpperCase()} is not available in your country due to local gambling regulations.
        You can use <strong>Tor Browser</strong> (free & anonymous) to access it.
      </p>

      <div className="space-y-4">
        {/* Step 1: Download Tor */}
        <div className={`p-4 rounded-lg ${step >= 0 ? 'bg-white border-2 border-amber-400' : 'bg-gray-100'}`}>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-lg">Step 1: Download Tor Browser</h4>
            {step > 0 && <span className="text-green-600 text-xl">✓</span>}
          </div>
          {step === 0 && (
            <div>
              <p className="text-gray-700 mb-3">Go to: <code className="bg-gray-200 px-2 py-1 rounded">torproject.org</code></p>
              <button
                onClick={() => {
                  window.open('https://www.torproject.org', '_blank');
                  handleStepComplete(0);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Download Tor Browser
              </button>
            </div>
          )}
        </div>

        {/* Step 2: Install Tor */}
        <div className={`p-4 rounded-lg ${step >= 1 ? 'bg-white border-2 border-amber-400' : 'bg-gray-100'}`}>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-lg">Step 2: Install & Launch Tor</h4>
            {step > 1 && <span className="text-green-600 text-xl">✓</span>}
          </div>
          {step === 1 && (
            <div>
              <p className="text-gray-700 mb-3">Install Tor Browser and click &quot;Connect&quot;</p>
              <button
                onClick={() => handleStepComplete(1)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                I&apos;ve Launched Tor ✓
              </button>
            </div>
          )}
        </div>

        {/* Step 3: Wait for Connection */}
        <div className={`p-4 rounded-lg ${step >= 2 ? 'bg-white border-2 border-amber-400' : 'bg-gray-100'}`}>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-lg">Step 3: Wait for Connection</h4>
            {step > 2 && <span className="text-green-600 text-xl">✓</span>}
          </div>
          {step === 2 && (
            <div>
              <p className="text-gray-700 mb-3">Wait for the green onion icon (takes 10-30 seconds)</p>
              <button
                onClick={() => handleStepComplete(2)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Connected! ✓
              </button>
            </div>
          )}
        </div>

        {/* Step 4: Sign Up */}
        <div className={`p-4 rounded-lg ${step >= 3 ? 'bg-white border-2 border-green-400' : 'bg-gray-100'}`}>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-lg">Step 4: Sign Up at {program.toUpperCase()}</h4>
            {completed && <span className="text-green-600 text-xl">✓</span>}
          </div>
          {step >= 3 && (
            <div>
              <p className="text-gray-700 mb-4">
                Now that Tor is connected, click the button below to sign up. You&apos;ll now have full access!
              </p>
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'affiliate_click_with_tor', {
                      event_category: 'Affiliate',
                      event_label: `${program}_tor`,
                      event_value: 1,
                    });
                  }
                }}
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
              >
                Sign Up at {program.toUpperCase()} with Tor →
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-300">
        <p className="text-sm text-gray-700">
          <strong>⚠️ Important:</strong> Keep Tor Browser open while signing up. Once you create your account, you can close Tor.
          You&apos;ll be able to log in and place bets even without Tor after account creation.
        </p>
      </div>
    </div>
  );
}
