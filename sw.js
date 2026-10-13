
const CACHE_NAME = "kpakpa-ia-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Ne pas intercepter les requêtes vers l'API ou les autres sites.
  if (event.request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }
});
