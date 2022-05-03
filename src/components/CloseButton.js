import React from "react";
import { navigate } from "gatsby";
import isBrowser from "../utils/isBrowser";
import { useContext } from "react";
import AppContext from "../utils/AppContext";

const CloseButton = () => {
  const { theme } = useContext(AppContext);
  if (!isBrowser) {
    return;
  }

  return (
    <div
      className="icon-close"
      style={{
        cursor: "pointer",
        marginLeft: "auto",
        marginRight: "0",
        content:
          theme.condition === "forecast--moderate"
            ? 'url("https://icons.simplesvg.com/fa-close.svg?color=%black&height=24&inline=true")'
            : "",
      }}
      onClick={() => {
        const drawer = document.getElementById("mobile-drawer");
        if (drawer) {
          document.getElementById("mobile-drawer").style.display = "";
        }
        navigate("/");
      }}
    />
  );
};

export default CloseButton;
