'use client';

import { useEffect } from 'react';

/**
 * COMPREHENSIVE GEO-BYPASS SYSTEM
 * Multiple layers:
 * 1. Complete browser environment spoofing
 * 2. IP masking via WebRTC interception
 * 3. Device fingerprint randomization
 * 4. Aggressive location spoofing
 * 5. Cookie/Storage manipulation
 */

export default function GeoBypassSystem() {
  useEffect(() => {
    // 1. AGGRESSIVE TIMEZONE SPOOFING
    const spoofTimezone = () => {
      const timezones = ['America/New_York', 'Europe/London', 'America/Toronto', 'Europe/Dublin'];
      const tz = timezones[Math.floor(Math.random() * timezones.length)];

      const OriginalDateTimeFormat = Intl.DateTimeFormat;
      class SpoofedDateTimeFormat extends OriginalDateTimeFormat {
        constructor(...args: any[]) {
          super('en-US', { ...(args[1] || {}), timeZone: tz });
        }
      }
      Object.setPrototypeOf(SpoofedDateTimeFormat, OriginalDateTimeFormat);
      Object.setPrototypeOf(SpoofedDateTimeFormat.prototype, OriginalDateTimeFormat.prototype);
      (window as any).Intl.DateTimeFormat = SpoofedDateTimeFormat;
    };

    // 2. SPOOF LANGUAGE/NAVIGATOR
    const spoofNavigator = () => {
      const languages = ['en-US', 'en-GB', 'en-CA', 'en-IE'];
      const lang = languages[Math.floor(Math.random() * languages.length)];

      Object.defineProperty(navigator, 'language', {
        get: () => lang,
        configurable: true,
      });
      Object.defineProperty(navigator, 'languages', {
        get: () => [lang],
        configurable: true,
      });
      Object.defineProperty(navigator, 'webdriver', {
        get: () => false,
        configurable: true,
      });
    };

    // 3. SPOOF GEOLOCATION API
    const spoofGeolocation = () => {
      const coords = [
        { latitude: 40.7128, longitude: -74.0060 }, // NY
        { latitude: 51.5074, longitude: -0.1278 },   // London
        { latitude: 43.6629, longitude: -79.3957 },  // Toronto
        { latitude: 53.3498, longitude: -6.2603 },   // Dublin
      ];
      const fakeCoord = coords[Math.floor(Math.random() * coords.length)];

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition = (success: any) => {
          success({
            coords: {
              latitude: fakeCoord.latitude,
              longitude: fakeCoord.longitude,
              accuracy: 50,
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              speed: null,
            },
            timestamp: Date.now(),
          });
        };
      }
    };

    // 4. PREVENT WEBRTC LEAKS
    const blockWebRTC = () => {
      const originalRTC = (window as any).RTCPeerConnection;
      if (originalRTC) {
        (window as any).RTCPeerConnection = class RTCPeerConnection extends originalRTC {
          createDataChannel(...args: any[]) {
            console.log('[GEO] WebRTC blocked');
            throw new Error('WebRTC disabled');
          }
        };
      }
    };

    // 5. SPOOF SCREEN RESOLUTION
    const spoofScreen = () => {
      const resolutions = [
        { width: 1920, height: 1080 },
        { width: 1366, height: 768 },
        { width: 1440, height: 900 },
      ];
      const res = resolutions[Math.floor(Math.random() * resolutions.length)];

      Object.defineProperty(screen, 'width', { value: res.width, writable: false, configurable: true });
      Object.defineProperty(screen, 'height', { value: res.height, writable: false, configurable: true });
    };

    // 6. RANDOMIZE CANVAS FINGERPRINT
    const spoofCanvas = () => {
      const origCanvas = HTMLCanvasElement.prototype.toDataURL;
      HTMLCanvasElement.prototype.toDataURL = function(...args: any[]) {
        const ctx = this.getContext('2d');
        if (ctx) {
          ctx.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.01)`;
          ctx.fillRect(0, 0, 1, 1);
        }
        return origCanvas.apply(this, args);
      };
    };

    // 7. SPOOF HEADERS (inject via fetch)
    const spoofFetchHeaders = () => {
      const originalFetch = window.fetch;
      window.fetch = function(url: any, options: any = {}) {
        const headers = new Headers(options.headers || {});
        const languages = ['en-US', 'en-GB', 'en-CA', 'en-IE'];
        const lang = languages[Math.floor(Math.random() * languages.length)];

        headers.set('Accept-Language', lang);
        headers.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');

        return originalFetch.call(this, url, { ...options, headers });
      };
    };

    // 8. MANIPULATE STORAGE TO HIDE LOCATION HINTS
    const spoofStorage = () => {
      const origSetItem = localStorage.setItem;
      localStorage.setItem = function(key: string, value: string) {
        if (key.includes('geo') || key.includes('location') || key.includes('country')) {
          return; // Silently ignore
        }
        return origSetItem.call(this, key, value);
      };
    };

    // 9. INJECT FAKE IP DETECTION
    const spoofIPDetection = () => {
      (window as any).__PUBLIC_IP__ = '162.125.18.133'; // Random US IP
      (window as any).getClientIP = () => '162.125.18.133';
    };

    // 10. RANDOMIZE USER AGENT
    const spoofUserAgent = () => {
      const agents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
      ];
      const agent = agents[Math.floor(Math.random() * agents.length)];
      Object.defineProperty(navigator, 'userAgent', { value: agent, configurable: true });
    };

    try {
      // APPLY ALL SPOOFING TECHNIQUES
      spoofTimezone();
      spoofNavigator();
      spoofGeolocation();
      blockWebRTC();
      spoofScreen();
      spoofCanvas();
      spoofFetchHeaders();
      spoofStorage();
      spoofIPDetection();
      spoofUserAgent();

      console.log('[GEO-BYPASS] ✅ All spoofing techniques activated');
      document.dispatchEvent(new Event('geoBypassReady'));
    } catch (error) {
      console.warn('[GEO-BYPASS] Error applying spoofing:', error);
    }
  }, []);

  return null;
}
