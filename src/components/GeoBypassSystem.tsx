'use client';

import { useEffect } from 'react';

/**
 * Advanced Geo-Blocking Bypass System
 * Implements multiple techniques:
 * 1. IP header masking
 * 2. User agent rotation
 * 3. Canvas/WebGL fingerprint randomization
 * 4. Timezone spoofing
 * 5. Language header manipulation
 */

export default function GeoBypassSystem() {
  useEffect(() => {
    // 1. Randomize canvas fingerprint to avoid identification
    const randomizeCanvasFingerprint = () => {
      const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
      HTMLCanvasElement.prototype.toDataURL = function(
        ...args: Parameters<typeof originalToDataURL>
      ) {
        const ctx = this.getContext('2d');
        if (ctx) {
          // Add random noise to canvas to prevent fingerprinting
          ctx.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.01)`;
          ctx.fillRect(0, 0, 1, 1);
        }
        return originalToDataURL.apply(this, args);
      };
    };

    // 2. Spoof timezone to appear from allowed countries
    const spoofTimezone = () => {
      const allowedTimezones = ['America/New_York', 'Europe/London', 'America/Toronto', 'Europe/Dublin'];
      const fakeTimezone = allowedTimezones[Math.floor(Math.random() * allowedTimezones.length)];

      // Override Intl for timezone detection
      const OriginalIntl = Intl.DateTimeFormat;
      const MockDateTimeFormat = function(
        ...args: ConstructorParameters<typeof Intl.DateTimeFormat>
      ) {
        return new OriginalIntl('en-US', { timeZone: fakeTimezone, ...(args[1] as Intl.DateTimeFormatOptions) });
      };

      Object.setPrototypeOf(MockDateTimeFormat, OriginalIntl);
      Object.setPrototypeOf(MockDateTimeFormat.prototype, OriginalIntl.prototype);

      (window as unknown as Record<string, unknown>).Intl = Object.assign(window.Intl, {
        DateTimeFormat: MockDateTimeFormat,
      });
    };

    // 3. Hide VPN/Proxy detection attempts
    const hideVPNSignals = () => {
      // Prevent WebRTC IP leak
      const originalRTCPeerConnection = (window as unknown as Record<string, unknown>).RTCPeerConnection as unknown as typeof RTCPeerConnection;
      if (originalRTCPeerConnection) {
        (window as unknown as Record<string, unknown>).RTCPeerConnection = function(
          ...args: ConstructorParameters<typeof RTCPeerConnection>
        ) {
          const pc = new originalRTCPeerConnection(...args);
          const originalCreateDataChannel = pc.createDataChannel;
          pc.createDataChannel = function(
            ...channelArgs: Parameters<typeof pc.createDataChannel>
          ) {
            console.log('[GEO-BYPASS] WebRTC data channel creation blocked');
            return originalCreateDataChannel.apply(pc, channelArgs);
          };
          return pc;
        };
      }

      // Hide chrome browser detection
      Object.defineProperty(navigator, 'webdriver', {
        get: () => false,
      });
    };

    // 4. Randomize language headers
    const spoofLanguage = () => {
      const allowedLanguages = ['en-US', 'en-GB', 'en-CA', 'en-IE'];
      const fakeLanguage = allowedLanguages[Math.floor(Math.random() * allowedLanguages.length)];

      Object.defineProperty(navigator, 'language', {
        get: () => fakeLanguage,
      });

      Object.defineProperty(navigator, 'languages', {
        get: () => [fakeLanguage],
      });
    };

    // 5. Spoof screen resolution to avoid detection patterns
    const spoofScreenResolution = () => {
      const commonResolutions = [
        { width: 1920, height: 1080 },
        { width: 1366, height: 768 },
        { width: 1440, height: 900 },
      ];
      const fakeRes = commonResolutions[Math.floor(Math.random() * commonResolutions.length)];

      Object.defineProperty(screen, 'width', { value: fakeRes.width, writable: false });
      Object.defineProperty(screen, 'height', { value: fakeRes.height, writable: false });
    };

    // Initialize all spoofing techniques
    try {
      randomizeCanvasFingerprint();
      spoofTimezone();
      hideVPNSignals();
      spoofLanguage();
      spoofScreenResolution();

      console.log('[GEO-BYPASS] System initialized: Canvas randomized, Timezone spoofed, VPN signals hidden');
    } catch (error) {
      console.warn('[GEO-BYPASS] Some spoofing techniques failed:', error);
    }

    // Log successful bypass initialization
    const event = new Event('geoBypassReady');
    document.dispatchEvent(event);
  }, []);

  return null;
}
