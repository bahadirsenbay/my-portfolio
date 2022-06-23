import React from "react";

const HeroSection = () => {
  return (
    <div id="hero" className="bg-hero-bg content-container flex items-center justify-center flex-col gap-8 xl:gap-0">
      <p className="text-9xl md:text-[15rem] xl:text-[20rem] font-bold font-Kristi text-red-500">Merhaba</p>
      <p className="text-2xl xl:text-4xl text-center font-bold font-Poppins">Ben Bahadır Şenbay. <br/> Bursa'da yaşayan Front-End Tasarımcısıyım.</p>
    </div>
  );
};

export default HeroSection;
