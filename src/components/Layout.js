import React, { useContext, useEffect } from "react";
import Header from "./Header";
import DesktopDrawer from "./DesktopDrawer";
import "../css/index.css";
import { closeDrawer } from "../utils/drawer";
import EnglishLinks from "./EnglishLinks";
import SpanishLinks from "./SpanishLinks";
import AppContext from "../utils/AppContext";
import isBrowser from "../utils/isBrowser";

const Layout = ({ children }) => {
  const { images, language, theme } = useContext(AppContext);

  // make mobile drawer at bottom of page invisible if take action is selected
  useEffect(() => {
    if (!isBrowser) {
      return;
    }
    if (!document.body.className && images.length) {
      document.body.className = images[1];
      theme.setCondition(images[1].slice(0, -1));
    }

    const current = document.getElementById("mobile-drawer");
    if (
      current.style.display !== "none" &&
      current.previousSibling.className.includes("card")
    ) {
      current.style.display = "none";
    }
  }, [images, theme.setCondition]);

  return (
    <div className="body">
      <Header />
      <aside id="mobile-drawer-header" class="drawer">
        <nav class="drawer__drawer">
          <button
            class="drawer__close-btn"
            aria-label="close"
            onClick={closeDrawer}
          >
            <span class="icon-close"></span>
          </button>
          <div class="drawer-list">
            {!language.isSpanish ? (
              <EnglishLinks closeDrawer={closeDrawer} />
            ) : (
              <SpanishLinks closeDrawer={closeDrawer} />
            )}
          </div>
        </nav>
        <footer>
          <div>
            <p>
              <a href="mailto:sbartels@dvrpc.org">sbartels@dvrpc.org</a> |
              215.238.2861
              <br />
              <a
                rel="noopener"
                href="https://www.dvrpc.org/GetInvolved/TitleVI/"
              >
                Title VI Statement
              </a>
            </p>
            <p>
              <small>
                Copyright &copy; 2006- <span class="current-year"></span> Air
                Quality Partnership
                <br />
                <i>
                  Last Updated:
                  <span class="last-updated"></span>
                </i>
              </small>
            </p>
          </div>
        </footer>
      </aside>
      <div className="content">
        <DesktopDrawer />
        <main>
          {children}
          <div id="mobile-drawer" class="mobile-drawer">
            <a
              class="drawer-list-item"
              href="http://delawarevalley.enviroflash.info/signup.cfm"
              rel="noopener"
            >
              {!language.isSpanish
                ? "Sign Up for Alerts"
                : "Inscríbase para alertas"}
            </a>
          </div>
        </main>
      </div>
      <footer style={{ display: "static" }}>
        <div>
          <p className="adjust-col">
            <a href="mailto:sbartels@dvrpc.org">sbartels@dvrpc.org</a> |
            215.238.2861 |
            <a rel="noopener" href="https://www.dvrpc.org/GetInvolved/TitleVI/">
              {" "}
              Title VI Statement
            </a>
            <br />
            <small>
              Copyright © 2006-<span>{new Date().getFullYear()}</span> Air
              Quality Partnership
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
