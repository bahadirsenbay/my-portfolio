import React from "react";
import HeroSection from "./HeroSection";
import WhatWeDo from "./WhatWeDo";
import Portfolio from "./Portfolio";
import InfoSection from "./InfoSection";
import About from "./About";
import Blog from "./Blog";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhatWeDo />
      <Portfolio />
      <InfoSection />
      <About />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
