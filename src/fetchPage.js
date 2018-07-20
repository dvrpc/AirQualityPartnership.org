import { logGA } from "./analytics";

const fetchPage = url => {
  history.pushState(null, "", url);
  fetch(`${url}?${+new Date()}`)
    .then(response => response.text())
    .then(response => {
      $(".content-panel")
        .html(
          "<a href=\"#\" onclick=\"$('.content-panel--active').removeClass('content-panel--active');history.pushState(null, '', '/');return false;\" class=\"forecast-details-panel__close-btn material-icons\">close</a>" +
            response
        )
        .addClass("content-panel--active")
        .scrollTop(0);
      $(".drawer--active").removeClass("drawer--active");
    });
  logGA(url);
};

export default fetchPage;
