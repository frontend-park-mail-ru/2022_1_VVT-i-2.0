const URI_ARRAY = [
  "https://unpkg.com/mustache@latest",
  "https://fonts.googleapis.com/css2",
  "https://fonts.gstatic.com/s/roboto",

  // Development environment
  "http://localhost:3000/graphics",
  "http://localhost:8080/static",

  // Production environment
  "http://tavide.xyz:3000/graphics",
  "http://tavide.xyz:8080/static",
];

const CACHE = "cache-v2";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => URI_ARRAY.forEach((uri) => cache.matchAll(uri)))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const cachedResponse = await caches.match(e.request);
      if (cachedResponse) {
        return cachedResponse;
      }

      const networkResponse = await fetch(e.request);

      if (URI_ARRAY.some((uri) => e.request.url.startsWith(uri))) {
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
