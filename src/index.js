import $ from "./jquery.js";
import inject from "./inject";
import Forecasts from "./Forecasts";
import preloadImages from "./preloadImages";
import fetchPage from "./fetchPage";
import { initGA, logGA } from "./analytics";
import Swiper from "./Swiper";
import registerServiceWorker from "./serviceWorker.js";

import "./css/index.css";

function init() {
  initGA();
  window.onload = function() {
    const swiper = new Swiper(".swiper-container", {
      mousewheelControl: true,
      initialSlide: 1
    });

    const forecasts = new Forecasts(BASE_URL + "forecasts_live.aspx");

    forecasts.on("load", function() {
      $("body").addClass(
        "forecast--" + this[1]["index"] + " forecast--" + this[1]["index"] + "1"
      );

      renderForecasts(this, swiper);
      renderForecastDetails(this[1]);

      preloadImages(
        this.map(function(f, i) {
          return f["index"] + i;
        })
      );
    });

    forecasts.on("change", function(data) {
      $("body")
        .removeClass("forecast--*")
        .addClass(
          "forecast--" +
            this.active["index"] +
            " forecast--" +
            this.active["index"] +
            this.activeIndex
        );
      renderForecastDetails(forecasts.active);
    });

    $(".demo-menu").on("click", function() {
      $(".drawer").addClass("drawer--active");
    });

    $(".drawer__close-btn").on("click", function(e) {
      e.preventDefault();
      $(".drawer").removeClass("drawer--active");
    });

    $(".forecast__link--prev").on("click", function(e) {
      e.preventDefault();
      swiper.slidePrev();
    });

    $(".forecast__link--next").on("click", function(e) {
      e.preventDefault();
      swiper.slideNext();
    });

    $('.forecast-details__link[href="#"]').on("click", function(e) {
      e.preventDefault();
      $(".forecast-details__panel").addClass("forecast-details__panel--active");
    });

    $(".forecast-details-panel__close-btn").on("click", function(e) {
      e.preventDefault();
      $(".forecast-details__panel--active").removeClass(
        "forecast-details__panel--active"
      );
    });

    swiper.on("onSlideChangeStart", function(swiper) {
      forecasts.set(swiper.activeIndex);
      $(".forecast__link--prev").toggleClass("hidden", swiper.isBeginning);
      $(".forecast__link--next").toggleClass("hidden", swiper.isEnd);
    });

    window.addEventListener("resize", function() {
      swiper.update();
    });

    $(
      `a:not([href="#"]):not([href^="http"]):not([data-root]):not([target=_blank]):not([href="${BASE_URL}"])`
    ).on("click", function(e) {
      e.preventDefault();
      fetchPage(new URL(this.href).pathname);
    });

    $(".current-year").html(new Date().getFullYear());
    $(".last-updated").html(document.lastModified.split(" ")[0]);
  };

  if (location.hash.length) {
    fetchPage(location.hash.slice(1));
  } else {
    logGA(location.pathname);
  }

  registerServiceWorker();
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

inject(
  "https://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&ActivityID=1038527&rnd=" +
    +new Date()
);

inject("https://www.google-analytics.com/analytics.js");

function renderForecasts(forecasts, swiper) {
  const dateString = ["Yesterday", "Today", "Tomorrow"];
  forecasts.forEach(function(forecast, i) {
    $(".swiper-wrapper").append(
      '<div class="swiper-slide"><p><small>Greater Philadelphia</small></p><h1>' +
        dateString[i] +
        "'s Air Quality<br/>" +
        (i === 2 ? "will be " : (i === 0 ? "wa" : "i") + "s ") +
        (forecast.index.indexOf("sensitive") > -1
          ? "Unhealthy for Sensitive Groups"
          : forecast.index.substr(0, 1).toUpperCase() +
            forecast.index.slice(1)) +
        ".</h1>" +
        (window.innerWidth > 641
          ? $(".forecast-details__link--action")[0].outerHTML
          : "") +
        "</div>"
    );
  });

  swiper.update();
  swiper.slideTo(1);
  //$('.swiper-slide').css('height', $('.forecast-grid__content')[0].offsetHeight + 'px');
}

function renderForecastDetails(forecast) {
  $(".forecast-details-panel__content").html(forecast["forecast"]);
}

function tipsLink(e) {
  e.preventDefault();
  $(".forecast-details__panel").addClass("forecast-details__panel--active");
}
window["tipsLink"] = tipsLink;
window["$"] = $;
