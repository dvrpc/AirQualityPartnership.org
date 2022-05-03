import React from "react";
import { AppProvider } from "./src/utils/AppContext";
import "./src/css/index.css";

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};
