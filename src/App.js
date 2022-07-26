
import React from "react";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyle";
function App() {
  return (
    <>
    
    <GlobalStyle/>
      <Navbar />
      <Hero slides={SliderData}/>
    
    </>
  );
}

export default App;
