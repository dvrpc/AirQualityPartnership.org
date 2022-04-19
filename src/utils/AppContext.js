import React, { createContext, useEffect, useState } from "react";
import { getLanguage } from "./getLanguage";

const initialState = {
  forecasts: [],
  images: [],
  language: { isSpanish: false, setIsSpanish: {} },
  theme: { condition: "", setCondition: {} },
};
const AppContext = createContext(initialState);
export const AppProvider = (props) => {
  const [forecasts, setForcasts] = useState([]);
  const [images, setImages] = useState([]);
  const [isSpanish, setIsSpanish] = useState(false);
  const [condition, setCondition] = useState("");

  useEffect(() => {
    async function fetchData() {
      const req = await fetch("https://alpha.dvrpc.org/aqp/");
      const res = await req.json();
      const urls = [];
      const index = shuffle();
      res.forEach((obj) => {
        urls.push("forecast--" + obj.index + index[index.length - 1]);
        index.pop();
      });
      setForcasts([...res]);
      setImages([...urls]);
      setIsSpanish(getLanguage());
    }

    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        forecasts: forecasts,
        images: images,
        language: { isSpanish: isSpanish, setIsSpanish: setIsSpanish },
        theme: { condition: condition, setCondition: setCondition },
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

// shuffle array of images to avoid any possibility of repeat images
function shuffle(array = [0, 1, 2]) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export default AppContext;
