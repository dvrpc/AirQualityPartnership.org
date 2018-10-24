import { logGA } from "./analytics";

const fetchPage = url => {
  history.pushState(null, "", url);
  fetch(`${url}?${+new Date()}`)
    .then(response => response.text())
    .then(response => {
      $(".content-panel")
        .html(
          "<button onclick=\"$('.content-panel--active').removeClass('content-panel--active');history.pushState(null, '', '/');window.ga('set', 'page', '/');window.ga('send', 'pageview');return false;\" class=\"forecast-details-panel__close-btn\" aria-label=\"close\"><span class=\"icon-close\"></span></button>" +
            response
        )
        .addClass("content-panel--active")
        .scrollTop(0);
      $(".forecast-details__panel--active").removeClass(
        "forecast-details__panel--active"
      );
      $(".drawer--active").removeClass("drawer--active");
    });
  logGA(url);
};

export default fetchPage;
