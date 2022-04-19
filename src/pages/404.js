import React, { useContext } from "react";
import EnglishLinks from "../components/EnglishLinks";
import SpanishLinks from "../components/SpanishLinks";
import "../css/index.css";
import AppContext from "../utils/AppContext";

const Error = () => {
  const { language } = useContext(AppContext);

  return (
    <div className="card">
      {!language.isSpanish ? <EnglishLinks /> : <SpanishLinks />}
    </div>
  );
};

export default Error;
