import React, { useContext } from "react";
import { Link } from "gatsby";
import AppContext from "../utils/AppContext";

const EnglishLinks = () => {
  const { language } = useContext(AppContext);

  return (
    <>
      <Link
        className="drawer-list-item"
        to="/About"
        activeClassName="drawer-list-item"
      >
        About
      </Link>
      <Link
        className="drawer-list-item"
        to="/CleanDriving"
        activeClassName="drawer-list-item"
      >
        Clean Driving Tips
      </Link>
      <Link
        className="drawer-list-item"
        to="/Resources"
        activeClassName="drawer-list-item"
      >
        Resources
      </Link>
      <a
        className="drawer-list-item"
        href="http://delawarevalley.enviroflash.info/signup.cfm"
        rel="noopener"
      >
        Sign Up for Alerts
      </a>
      <Link
        className="drawer-list-item"
        style={{ cursor: "pointer" }}
        onClick={() => language.setIsSpanish(!language.isSpanish)}
        to="/"
        activeClassName="drawer-list-item"
      >
        Para Español
      </Link>
    </>
  );
};

export default EnglishLinks;
