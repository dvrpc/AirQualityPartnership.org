import React, { useContext } from "react";
import EnglishLinks from "./EnglishLinks";
import SpanishLinks from "./SpanishLinks";
import AppContext from "../utils/AppContext";

const DesktopDrawer = () => {
  const { language } = useContext(AppContext);

  return (
    <aside id="desktop-drawer" className="drawer">
      <nav className="drawer__drawer">
        <button className="drawer__close-btn" aria-label="close">
          <span className="icon-close"></span>
        </button>
        <div className="drawer-list">
          {!language.isSpanish ? <EnglishLinks /> : <SpanishLinks />}
        </div>
      </nav>
    </aside>
  );
};

export default DesktopDrawer;
