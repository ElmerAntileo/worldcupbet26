'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    // Unregister service worker - not needed for Tor-based geo-bypass approach
    // Service worker was intercepting affiliate links and routing through proxy
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
          console.log('[SW] Unregistered old service worker');
        });
      });
    }
  }, []);

  return null;
}
