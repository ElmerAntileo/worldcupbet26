'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then((registration) => {
          console.log('[SW] Registered:', registration);
        })
        .catch((error) => {
          console.log('[SW] Registration failed:', error);
        });
    }
  }, []);

  return null;
}
