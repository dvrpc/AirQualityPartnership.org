import React, { useContext } from "react";
import AppContext from "../utils/AppContext";
import { Link } from "gatsby";

const SpanishLinks = ({ closeDrawer }) => {
  const { language } = useContext(AppContext);

  return (
    <>
      <Link
        className="drawer-list-item"
        to="/Arcera"
        activeClassName="drawer-list-item"
      >
        Acerca
      </Link>
      <Link
        className="drawer-list-item"
        to="/ConduccionLimpia"
        activeClassName="drawer-list-item"
      >
        Conducción Limpia
      </Link>
      <Link
        className="drawer-list-item"
        to="/Recursos"
        activeClassName="drawer-list-item"
      >
        Recursos
      </Link>
      <a className="drawer-list-item" href="https://m.enviroflash.info/">
        Inscríbase para alertas
      </a>
      <Link
        className="drawer-list-item"
        style={{ cursor: "pointer" }}
        onClick={() => {
          language.setIsSpanish(false);
          if (closeDrawer) {
            closeDrawer();
          }
        }}
        to="/"
        activeClassName="drawer-list-item"
      >
        For English
      </Link>
    </>
  );
};

export default SpanishLinks;
