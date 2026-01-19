const CACHE_NAME = 'sq-static-v2';
// Build base-aware URLs so this works under GitHub Pages base path
const scope = self.registration?.scope || '/';
const URLS_TO_CACHE = [new URL('index.html', scope).toString()];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => event.waitUntil((async () => {
  // Clean up old caches
  const keys = await caches.keys();
  await Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)));
  await self.clients.claim();
})()));

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).catch(() => caches.match(new URL('index.html', scope).toString()));
    })
  );
});
