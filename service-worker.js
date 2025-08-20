
self.addEventListener('install', (event )=>{
    console.log('Service Worker: Instalado');
    caches.open ("pwa").then((cache)=>{
        console.log("cache aberto")
        cache.addAll(["/PWAbasica/index.html",
          "/PWAbasica/manifest.json", "/PWAbasica/script.js", "/PWAbasica/service-worker.js"
        ]);
    });
});
self.addEventListener('activate', (event) =>{
    console.log('Service Worker: Ativado');
    
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request))
    caches.match(event.request).then((response) => {
        return response || fetch(event.request);
        })
   });