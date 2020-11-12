import $ from "./jquery";
import Forecasts from "./Forecasts";
import preloadImages from "./preloadImages";
import Swiper from "./Swiper";
import { registerFetchPage } from "./fetchPage";

const onLoad = () => {
  window.onload = function () {
    const swiper = new Swiper(".swiper-container", {
      mousewheelControl: true,
      initialSlide: 1,
    });

    const forecasts = new Forecasts("https://alpha.dvrpc.org/aqp/");

    forecasts.on("load", function () {
      $("body").addClass(
        "forecast--" + this[1]["index"] + " forecast--" + this[1]["index"] + "1"
      );

      renderForecasts(this, swiper);
      renderForecastDetails(this[1]);

      preloadImages(
        this.map(function (f, i) {
          return f["index"] + i;
        })
      );
    });

    forecasts.on("change", function (data) {
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

    $(".demo-menu").on("click", function () {
      $(".drawer").addClass("drawer--active");
    });

    $(".drawer__close-btn").on("click", function (e) {
      e.preventDefault();
      $(".drawer").removeClass("drawer--active");
    });

    $(".forecast__link--prev").on("click", function (e) {
      e.preventDefault();
      swiper.slidePrev();
    });

    $(".forecast__link--next").on("click", function (e) {
      e.preventDefault();
      swiper.slideNext();
    });

    $('.forecast-details__link[href="#"]').on("click", function (e) {
      e.preventDefault();
      $(".forecast-details__panel").addClass("forecast-details__panel--active");
    });

    $(".forecast-details-panel__close-btn").on("click", function (e) {
      e.preventDefault();
      $(".forecast-details__panel--active").removeClass(
        "forecast-details__panel--active"
      );
    });

    swiper.on("onSlideChangeStart", function (swiper) {
      forecasts.set(swiper.activeIndex);
      $(".forecast__link--prev").toggleClass("hidden", swiper.isBeginning);
      $(".forecast__link--next").toggleClass("hidden", swiper.isEnd);
    });

    window.addEventListener("resize", function () {
      swiper.update();
    });

    registerFetchPage();

    $(".current-year").html(new Date().getFullYear());
    $(".last-updated").html(document.lastModified.split(" ")[0]);
  };
};

function renderForecasts(forecasts, swiper) {
  const dateString = ["Yesterday", "Today", "Tomorrow"];
  forecasts.forEach(function (forecast, i) {
    $(".swiper-wrapper").append(
      '<div class="swiper-slide"><p><strong>Greater Philadelphia</strong><br/><small><em>as of ' +
        new Date(forecast.updated)
          .toLocaleTimeString([], { hour: "numeric", minute: "numeric" })
          .toLocaleLowerCase() +
        "</em></small></p><h1>" +
        dateString[i] +
        "'s " +
        (i === 1 ? "Current " : "") +
        "Air Quality<br/>" +
        (i === 2 ? "will be " : (i === 0 ? "wa" : "i") + "s ") +
        (forecast.index.indexOf("sensitive") > -1
          ? "Unhealthy for Sensitive Groups"
          : forecast.index.substr(0, 1).toUpperCase() +
            forecast.index.slice(1)) +
        ".</h1>" +
        (window.innerWidth > 641
          ? $(".forecast-details__link--action")[0].outerHTML
          : "") +
        (i === 1
          ? '<p class="disclaimer"><em>Today\'s Air Quality is updated hourly to reflect available EPA data.</em></p>'
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

export default onLoad;
