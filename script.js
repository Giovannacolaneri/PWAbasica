if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("/PWAbasica/service-worker.js").then(()=>{
        console.log("Service worker registrado!")
    });
}