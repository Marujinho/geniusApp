let cacheName = 'geniusPartyApp_v1.1.3';
let filesToCache = [
	// HTML
	'./',
	'index.html'
];

self.addEventListener('install', function(e) {
	console.log('[ServiceWorker] Install');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('[ServiceWorker] Caching app shell');
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener('activate',  event => {
	event.waitUntil(self.clients.claim());
	console.log('[ServiceWorker] activated');

});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request, {ignoreSearch:true}).then(response => {
			return response || fetch(event.request);
			console.log('[ServiceWorker] fetching');
		})
	);
});
