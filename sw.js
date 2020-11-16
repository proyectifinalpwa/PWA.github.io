const CACHE = "proyectifinalpwa-1.00";

const ARCHIVOS = [
  "cmp/mi-footer.js",
  "estilos/colores.css",
  "img/icono256.png",
  "img/icono1024.png",
  "img/icono2048.png",
  "js/registraServiceWorker.js",
  "favicon.ico",
  "Formula.html",
  "manifest.json",
  '/'
];

self.addEventListener("install", evt => {
  console.log("Service Worker instalado.");
  evt.waitUntil(cargaCache());
});

self.addEventListener("fetch", evt => {
  if (evt.request.method === "GET") {
    evt.respondWith(usaCache(evt));
  }
});

self.addEventListener("activate", () => console.log("Service Worker activo."));

async function cargaCache() {
  console.log("Intentando cargar cache: " + CACHE);
  const cache = await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache cargado: " + CACHE);
}

async function usaCache(evt) {
  const cache = await caches.open(CACHE);
  const response = await cache.match(evt.request, { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}
