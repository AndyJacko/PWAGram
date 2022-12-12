let deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => {
      console.log("Service Worker Registered...");
    })
    .catch((err) => {
      console.log(err);
    });
}

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("Before Install Prompt Fired...");

  event.preventDefault();

  deferredPrompt = event;

  return false;
});
