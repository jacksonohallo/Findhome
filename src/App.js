
import React from "react";
import Hero from "./Component/Hero";
import InfoSection from "./Component/InfoSection";
import Navbar from "./Component/Navbar";
import { InfoData } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyle";
import Footer from "./Component/Footer";
import Property from "./Component/Properties";
function App() {
  return (
    <>
    
    <GlobalStyle/>
      <Navbar />
      <Hero slides={SliderData} />
      <InfoSection{...InfoData} />
      <Footer/>
    </>
  );
}

export default App;
