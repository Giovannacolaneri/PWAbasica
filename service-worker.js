
self.addEventListener('install', event =>{
    console.log('Service Worker: Instalado');
});
self.addEventListener('activate', event =>{
    console.log('Service Worker: Ativado');
});
self.addEventListener('fetch', event =>{
    event.respondWith(fetch(event.request));
});
