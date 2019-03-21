const registerServiceWorker = () =>
  "serviceWorker" in navigator &&
  navigator.serviceWorker.register("/service-worker.js");

export default registerServiceWorker;
