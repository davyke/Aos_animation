import "./styles.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./Componets/hero";
import Body from "./Componets/Body";

import HarryCharacters from "./Componets/Harrycharacters";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className="App">
      <Hero />
      <HarryCharacters />
    </div>
  );
};
export default App;
