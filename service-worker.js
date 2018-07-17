var theCacheName = 'GeniusParty - v1.0.3';
var filesToCache = [
	// HTML
	'./index.html'
];


self.addEventListener('install', function(e) {
	console.log('[ServiceWorker] Install');
	e.waitUntil(
		caches.open(theCacheName).then(function(cache) {
			console.log('[ServiceWorker] Caching app shell');
			return cache.addAll(filesToCache);
		}).then(function(){	
			return self.skipWaiting();
		})
	);
});

	addEventListener('activate', activateEvent => {
		activateEvent.waitUntil(
		  caches.keys().then(keyList => Promise.all(keyList.map(key => {
			if (key !== theCacheName) {
			  return caches.delete(key);
			  
		}
			  }))).then(function(){
				return self.clients.claim();
			  })
		);
	});


self.addEventListener('fetch', event => {
	event.respondWith(
		// new Response('Pipe TOP'),
		// new Response('lalala')	
		fetch(event.request).then(function(response){
			if(response.status == 404){
				return new Response('Essa pagina nao existe');
			}
			return response;
		}).catch(function(){
			return new Response('Sem conexão');
			
		})
	);
});

