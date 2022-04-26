import * as React from "react";
import DVRPC from "../images/dvrpc.svg";
import AirQualityPartnership from "../images/AQP.svg";
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
        <a
          id="DVRPC"
          rel="noopener"
          href="https://www.dvrpc.org/"
          style={{ borderRight: "1px solid gray", paddingRight: "5%" }}
        >
          <img
            src={DVRPC}
            alt="Delaware Valley Regional Planning Commission"
            width="162"
          />
        </a>
        <a id="AQP" href="/" style={{ paddingLeft: "5%" }}>
          <img
            src={AirQualityPartnership}
            alt="Air Quality Partnership"
            width="132"
          />
        </a>
      </section>
    </div>
  </header>
);

export default Header;
