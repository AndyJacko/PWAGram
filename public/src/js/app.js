let deferredPrompt;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service Worker Registered...");
  });
}

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("Before Install Prompt Fired...");
  event.preventDefault();
  deferredPrompt - event;
  return false;
});
