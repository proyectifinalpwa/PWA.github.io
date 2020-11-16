registraServiceWorker();
async function registraServiceWorker() {
  try {
  const registro = await navigator.serviceWorker.register("sw.js");
  console.log("Service Worker registrado.");
    console.log(registro);
  } catch (e) {
  muestraError(e);
  }
}
function muestraError(e) {
  console.log(e);
  alert(e.message);
}
