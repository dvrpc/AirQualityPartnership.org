/**
 * takes in forecasts from AQP api and whether or not the forecasts should be in spanish and returns an array of html strings to be set as swiper slides
 * @param {Array} forecasts
 * @param {Boolean} isSpanish
 * @returns Array
 */
export const renderForecasts = (forecasts, isSpanish) => {
  const ret = [];
  const dateString = !isSpanish
    ? ["Yesterday", "Today", "Tomorrow"]
    : ["Ayer", "Hoy", "Mañana"];

  forecasts.forEach(function (forecast, i) {
    const day = !isSpanish ? dateString[i] + "'s " : "";
    const disclaimer = !isSpanish
      ? "Today's Air Quality is updated hourly to reflect available EPA data."
      : "La calidad del aire el día de hoy se actualiza cada hora para reflejar la información disponible de la Agencia de Protección Ambiental (EPA, por sus siglas en inglés) ";
    forecast =
      forecast.index.indexOf("sensitive") > -1
        ? "Unhealthy for Sensitive Groups"
        : forecast.index.substr(0, 1).toUpperCase() + forecast.index.slice(1);

    if (isSpanish) {
      switch (forecast) {
        case "Good":
          forecast = "Buena";
          break;
        case "Moderate":
          forecast = "Moderada";
          break;
        case "Unhealthy for Sensitive Groups":
          forecast = "Dañina para grupos sensibles";
          break;
        default:
          break;
      }
    }

    ret.push(
      `<div class="swiper-slide"><p><strong>${
        !isSpanish ? "Greater Philadelphia" : "Gran Filadelfia"
      }</strong><br/><small><em>${
        !isSpanish ? "as of " : "a partir de las "
      } ` +
        new Date()
          .toLocaleTimeString([], { hour: "numeric", minute: "numeric" })
          .toLocaleLowerCase() +
        "</em></small></p><h1>" +
        day +
        (i === 1 ? `${!isSpanish ? "Current " : ""}` : "") +
        `${
          !isSpanish
            ? "Air Quality: "
            : "La calidad del aire " + dateString[i] + ": "
        }<br/>` +
        // (i === 2 ? "will be " : (i === 0 ? "wa" : "i") + "s ") +
        forecast +
        "</h1>" +
        (i === 1
          ? '<p class="disclaimer"><em>' + disclaimer + "</em></p>"
          : "") +
        "</div>"
    );
  });

  return ret;
};
