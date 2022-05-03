import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { renderForecasts } from "../utils/renderForecast";
import "swiper/css";
import "swiper/css/navigation";
import AppContext from "../utils/AppContext";
import { Link } from "gatsby";
import isBrowser from "../utils/isBrowser";

const Forecast = () => {
  const { forecasts, images, language, theme } = useContext(AppContext);
  const [renderedForecasts, setRenderedForecasts] = useState([]);

  useEffect(() => {
    if (!isBrowser) {
      return;
    }

    setRenderedForecasts(renderForecasts(forecasts, language.isSpanish));
  }, [forecasts, images, language.isSpanish, theme.setCondition]);

  return (
    <div className={`forecast-grid ${theme.condition}`}>
      <div
        className="forecast-grid__content"
        style={{ display: "flex", margin: "0px" }}
      >
        <div className="left">
          {!language.isSpanish ? (
            <strong>YESTERDAY</strong>
          ) : (
            <strong className="spanish">EL DÍA DESPUÉS</strong>
          )}
          <span className="icon-left" />
        </div>
        <div className="right">
          {!language.isSpanish ? (
            <strong>TOMORROW</strong>
          ) : (
            <strong className="spanish">EL DÍA ANTES</strong>
          )}
          <span className="icon-right" />
        </div>
        <div
          className="swiper-container"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Swiper
            className="swiper-wrapper"
            initialSlide={1}
            navigation={{
              prevEl: ".left",
              nextEl: ".right",
            }}
            modules={[Navigation]}
            onSlideChange={(swiper) => {
              if (!isBrowser) {
                return;
              }

              if (images[swiper.activeIndex]) {
                document.body.className = images[swiper.activeIndex];
                theme.setCondition(images[swiper.activeIndex].slice(0, -1));
              }
            }}
          >
            {renderedForecasts.map((forecast) => {
              return (
                <SwiperSlide
                  key={forecast}
                  className="swiper-slide"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: forecast }} />
                  <Link
                    class="drawer-list-item"
                    to={!language.isSpanish ? "/TakeAction" : "/TomarAccion"}
                    style={{ marginTop: "-2%" }}
                    activeClassName="drawer-list-item"
                  >
                    {!language.isSpanish ? "Take Action" : "Tomar Acción"}
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
