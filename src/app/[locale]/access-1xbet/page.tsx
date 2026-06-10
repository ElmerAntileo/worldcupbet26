/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import AccessGuide from '@/components/AccessGuide';

const affiliateLink = 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97';

export default function Access1xBet() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(affiliateLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">1xBet World Cup Betting</h1>
          <p className="text-xl text-gray-600">
            Get instant access to 1xBet betting markets for World Cup 2026
          </p>
        </div>

        {/* Access Guide */}
        <AccessGuide program="1xbet" affiliateLink={affiliateLink} />

        {/* Info Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">Why 1xBet?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ 200+ World Cup match markets</li>
              <li>✅ Live betting during matches</li>
              <li>✅ Best odds in the market</li>
              <li>✅ Fast payouts</li>
              <li>✅ Mobile app available</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">About Tor Browser</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ 100% Free & Open Source</li>
              <li>✅ Completely Anonymous</li>
              <li>✅ Used by millions worldwide</li>
              <li>✅ No logs or tracking</li>
              <li>✅ Works on Windows, Mac, Linux</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-2">Is Tor Browser safe?</h4>
              <p className="text-gray-700">
                Yes. Tor is used by journalists, activists, and millions of people worldwide. It&apos;s completely legal and safe.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Will Tor slow down my betting?</h4>
              <p className="text-gray-700">
                Tor only needs to be open during signup. Once your account is created, you can close Tor and log in normally from your location.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Can I withdraw my winnings?</h4>
              <p className="text-gray-700">
                Yes. Once your account is verified, you can withdraw using the same payment method you used to deposit.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">How long does signup take?</h4>
              <p className="text-gray-700">
                Usually 5-10 minutes. You need to verify your email, phone, and documents. Some locations may require additional verification.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Which countries need Tor?</h4>
              <p className="text-gray-700">
                Countries with gambling restrictions: Germany, Austria, France, Netherlands, Italy, Spain, Switzerland, Poland, and others.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Betting?</h3>
          <p className="mb-6 text-lg">Follow the guide above and get access to 1xBet in under 5 minutes</p>
          <a
            href={affiliateLink}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg"
          >
            Sign Up at 1xBet →
          </a>
        </div>
      </div>
    </div>
  );
}
