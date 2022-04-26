const BASE_URI = "http://localhost:8080/static/";

const CACHE = "cache-v1";

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((cache) => cache.matchAll("/static/")));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const cachedResponse = await caches.match(e.request);
      if (cachedResponse) {
        return cachedResponse;
      }

      const networkResponse = await fetch(e.request);

      if (e.request.url.startsWith(BASE_URI)) {
        const clonedResponse = networkResponse.clone();

        e.waitUntil(
          (async () => {
            const cache = await caches.open(CACHE);
            await cache.put(e.request, clonedResponse);
          })()
        );
      }

      return networkResponse;
    })()
  );
});
