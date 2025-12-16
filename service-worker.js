/* Pocket Groove PWA Service Worker */
const CACHE_VERSION = "pocket-groove-v1";
const APP_SHELL = [
  "/pocket-groove/",
  "/pocket-groove/index.html",
  "/pocket-groove/manifest.webmanifest",
  "/pocket-groove/service-worker.js",
  "/pocket-groove/icons/icon-192.png",
  "/pocket-groove/icons/icon-512.png",
  "/pocket-groove/icons/icon-512-maskable.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_VERSION)
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Solo GET
  if (req.method !== "GET") return;

  // Stale-while-revalidate
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((networkRes) => {
          // Cachea anche risposte ok
          if (networkRes && networkRes.status === 200) {
            const copy = networkRes.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          }
          return networkRes;
        })
        .catch(() => cached || caches.match("/pocket-groove/"));

      return cached || fetchPromise;
    })
  );
});
