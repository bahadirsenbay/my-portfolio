import React from "react";
import HeroSection from "./HeroSection";
import WhatWeDo from "./WhatWeDo";
import Portfolio from "./Portfolio";
import InfoSection from "./InfoSection";
import About from "./About";
import Blog from "./Blog";
import Footer from "./Footer";
import Drawer from "./Drawer";

const Home = () => {
  return (
    <>
      <Drawer>
        {" "}
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

export default Home;
