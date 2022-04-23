// import { BASE_URI } from './api/api.js';
const BASE_URI = 'http://localhost:8080';

const CACHE = 'cache-v1';

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((cache) => cache.matchAll('/static/')));
});

self.addEventListener('fetch', (e) => {
  // e
  //   .respondWith(fromNetwork(e.request, TIMEOUT)
  //   .catch((err) => {
  //     console.log(`Error: ${err.message()}`);
  //     return fromCache(e.request);
  //   }));
  e.respondWith((async () => {
    const cachedResponse = await caches.match(e.request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(e.request);

    if (e.request.url.startsWith(BASE_URI)) {
      const clonedResponse = networkResponse.clone();

      e.waitUntil((async () => {
        const cache = await caches.open(CACHE);
        await cache.put(e.request, clonedResponse);
      })());
    }

    return networkResponse;
  })());
});

// const fromNetwork = (request, TIMEOUT) => {
//   return new Promise((fulfill, reject) => {
//     const TIMEOUTId = setTimeout(reject, TIMEOUT);
//     fetch(request)
//       .then((response) => {
//         clearTimeout(TIMEOUTId);
//         fulfill(response);
//       }, reject);
//   });
// }

// const fromCache = (request) = {
//   return caches
//     .open(CACHE)
//     .then((cache) => cache.match(request).then((matching) => matching || Promise.reject('no-match')));
// }
