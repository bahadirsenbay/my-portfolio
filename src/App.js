import React from "react";
import Header from "./components/Header";
import "./index.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import WhatWeDo from "./components/WhatWeDo";
import Portfolio from "./components/Portfolio";
import InfoSection from "./components/InfoSection";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";

const App = () => {
  return (
    <>
      <Drawer>
        <Header/>
        <div>
          <HeroSection />
          <WhatWeDo />
          <Portfolio />
          <InfoSection />
          <About />
          <Blog />
          <Footer />
        </div>
      </Drawer>
    </>
  );
};

export default App;
