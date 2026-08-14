const CACHE_NAME = 'typing-app-v5'; // ყოველი მნიშვნელოვანი ცვლილებისას ეს ციფრი (v4) გაზარდეთ
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './words.js',
  './ant.png'
];

// 1. ინსტალაციისას ახალი ვერსია მაშინვე აქტიურდება
self.addEventListener('install', event => {
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. ძველი (წინა ვერსიის) ფაილების წაშლა მეხსიერებიდან
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. ლოგიკა: ჯერ ეძებს ინტერნეტში ახალ ვერსიას, უინტერნეტობისას კი ხსნის შენახულს
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
