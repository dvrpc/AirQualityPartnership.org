import * as React from "react";
import DVRPC from "../images/dvrpc.png";
import AirQualityPartnership from "../images/aqp.png";
import { openDrawer } from "../utils/drawer";

const Header = () => (
  <header>
    <div>
      <section>
        <button className="demo-menu" aria-label="menu" onClick={openDrawer}>
          <span className="icon-menu"></span>
        </button>
      </section>
      <section className="logo">
        <a rel="noopener" href="https://www.dvrpc.org/">
          <img
            src={DVRPC}
            alt="Delaware Valley Regional Planning Commission"
            width="162"
            style={{ borderRight: "1px solid gray" }}
          />
        </a>
        <a href="/" data-root>
          <img src={AirQualityPartnership} alt="Air Quality Partnership" />
        </a>
      </section>
    </div>
  </header>
);

export default Header;
