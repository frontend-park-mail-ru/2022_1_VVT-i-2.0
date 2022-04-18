const CACHE = 'network-or-cache-v1';
const TIMEOUT = 400;

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.matchAll('/static/')));
});

self.addEventListener('fetch', (event) => {
  event
    .respondWith(fromNetwork(event.request, TIMEOUT)
    .catch((err) => {
      console.log(`Error: ${err.message()}`);
      return fromCache(event.request);
    }));
});

const fromNetwork = (request, TIMEOUT) => {
  return new Promise((fulfill, reject) => {
    const TIMEOUTId = setTimeout(reject, TIMEOUT);
    fetch(request)
      .then((response) => {
        clearTimeout(TIMEOUTId);
        fulfill(response);
      }, reject);
  });
}

const fromCache = (request) = {
  return caches
    .open(CACHE)
    .then((cache) => cache.match(request).then((matching) => matching || Promise.reject('no-match')));
}
