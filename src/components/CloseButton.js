import React from "react";
import { navigate } from "gatsby";
import isBrowser from "../utils/isBrowser";

const CloseButton = () => {
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
