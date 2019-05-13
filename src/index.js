import $ from "./jquery";
import inject from "./inject";
import { fetchPage, updatePage } from "./fetchPage";
import { initGA, logGA } from "./analytics";
import onLoad from "./app";
import * as OfflinePluginRuntime from "offline-plugin/runtime";
import "./css/index.css";

OfflinePluginRuntime.install({
  onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
  onUpdated: () => location.reload()
});

function init() {
  initGA();

  onLoad();

  if (location.pathname === "/") {
    logGA(location.pathname);
  } else {
    fetchPage(location.pathname, true);
  }

  window.addEventListener("popstate", function(event) {
    if (location.pathname === "/") {
      $(".content-panel--active").removeClass("content-panel--active");
      logGA(location.pathname);
    } else {
      updatePage(event.state.response);
    }
  });
}

if ("Promise" in window && "fetch" in window) {
  init.call(window);
} else {
  inject(
    "https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise,fetch,Element.prototype.classList,URL&flags=gated,always",
    init
  );
}

if ("ActiveXObject" in window) {
  const css = document.createElement("link");
  css.setAttribute("rel", "stylesheet");
  css.href = "/ie.css";
  document.head.appendChild(css);
}

inject("https://www.google-analytics.com/analytics.js");

function tipsLink(e) {
  e.preventDefault();
  $(".forecast-details__panel").addClass("forecast-details__panel--active");
}
window["tipsLink"] = tipsLink;
window["$"] = $;
