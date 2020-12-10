/** An empty service worker! */
const cacheName = "cache-v1";
const staticAssets = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./jquery.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(staticAssets);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("activate");
});

self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request)
    .then(response => {
      return response || fetch(event.request)
    })
  );
});