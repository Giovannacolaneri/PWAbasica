
self.addEventListener('install', (event )=>{
    console.log('Service Worker: Instalado');
    caches.open ("pwa").then((cache)=>{
        console.log("cache aberto")
        cache.add(index.html)
    });
});
self.addEventListener('activate', (event) =>{
    console.log('Service Worker: Ativado');
});
self.addEventListener('fetch', (event) =>{
    event.respondWith(fetch(event.request));
});
