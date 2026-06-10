/**
 * SERVICE WORKER: Client-Side Request Proxy
 * Intercepts ALL network requests and routes through proxy with spoofing
 * Works because service worker runs IN the browser context
 */

const PROXY_BASE = 'https://www.worldcupbet26.com/api/proxy/';

self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Don't proxy our own proxy requests
  if (url.hostname === 'www.worldcupbet26.com' && url.pathname.includes('/api/proxy/')) {
    return;
  }

  // Don't proxy our own domain
  if (url.hostname === 'www.worldcupbet26.com' || url.hostname === 'worldcupbet26.com') {
    return;
  }

  // Don't proxy extensions, blobs, data URLs
  if (event.request.url.startsWith('chrome-extension:') ||
      event.request.url.startsWith('blob:') ||
      event.request.url.startsWith('data:')) {
    return;
  }

  // Proxy the request
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    // Create proxied URL
    const targetUrl = request.url;
    const proxyUrl = PROXY_BASE + encodeURIComponent(targetUrl);

    // Make request through proxy
    const response = await fetch(proxyUrl, {
      method: request.method,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      credentials: 'include',
      redirect: 'follow',
    });

    // Clone and return response
    return response.clone();

  } catch (error) {
    console.error('[SW] Proxy error:', error);
    // Fall through to original request as fallback
    return fetch(request);
  }
}
