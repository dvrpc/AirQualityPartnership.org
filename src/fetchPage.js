import { logGA } from "./analytics";

const updatePage = response => {
  $(".content-panel")
    .html(
      "<button onclick=\"$('.content-panel--active').removeClass('content-panel--active');history.pushState(null, '', '/');window.ga('set', 'page', '/');window.ga('send', 'pageview');return false;\" class=\"forecast-details-panel__close-btn\" aria-label=\"close\"><span class=\"icon-close\"></span></button>" +
        response
    )
    .addClass("content-panel--active")
    .scrollTop(0);
  setTimeout(() => registerFetchPage(".content-panel"), 1);
  $(".forecast-details__panel--active").removeClass(
    "forecast-details__panel--active"
  );
  $(".drawer--active").removeClass("drawer--active");
  return response;
};

const fetchPage = (url, replaceState = false) => {
  fetch((url.length > 1 && url.endsWith("/") ? "/partials" : "") + url)
    .then(response => response.text())
    .then(updatePage)
    .then(response => {
      history[replaceState ? "replaceState" : "pushState"](
        { response },
        "",
        url
      );
      logGA(url);
    });
};

const registerFetchPage = (parent = "body") => {
  $(parent)
    .find(
      `a:not([href^="#"]):not([href^="http"]):not(href^="mailto"):not([data-root]):not([target=_blank]):not([href="${BASE_URL}"])`
    )
    .on("click", function(e) {
      e.preventDefault();
      fetchPage(new URL(this.href).pathname);
    });
};

export { fetchPage, updatePage, registerFetchPage };
