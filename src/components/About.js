import React from "react";
import Image from "../Image/01_left.png";
import BgWho from "../Image/bg-who.jpg";

const About = () => {
  return (
    <div id="about" className="">
      <div className=" flex flex-col-reverse  lg:grid grid-cols-3 gap-4 bg-yellow-300">
        <div className="flex flex-col xs:px-4 md:px-8 lg:items-center justify-center col-span-2 bg-yellow-600 gap-8">
          <p className="text-white font-Poppins font-extralight text-xl lg:text-3xl lg:px-36 mt-9 lg:mt-28">
            Two ghostly white figures in coveralls and helmets are soflty
            dancing. Shores of the cosmic ocean permanence of the stars.
          </p>
          <img src={BgWho} className="md:w-[85%] lg:w-[70%] xs:mt-1 lg:mt-18" />
          <div className="grid grid-cols-2 lg:mx-32 gap-7 mb-20">
            <p className="text-sm text-white font-Poppins">
              As a patch of light. Euclid cosmic fugue very small stage in a
              vast cosmic arena brain is the seed of intelligence billions.
              <br />
              <br />
              Flatland! A very small stage in a vast cosmic arena great
              turbulent clouds encyclopaedia galactica star stuff harvesting
              star light the carbon in our apple pies. Realm of the galaxies,
              Cambrian explosion Flatland for tesserac
            </p>
            <p className="text-sm text-white font-Poppins font-extralight">
              A very small stage in a vast cosmic arena great turbulent clouds
              encyclopaedia galactica star stuff harvesting star light the
              carbon in our apple pies. Realm of the galaxies, Cambrian
              explosion Flatland for tesseract hundreds of thousands, cosmic
              ocean. Prime number cosmic ocean for blue resort white dwarf
              finite but unbounded. A very small stage in a vast cosmic arena
              great turbulent clouds encyclopaedia galactica star stuff
              harvesting star light the carbon
            </p>
          </div>
        </div>
        <div className="flex items-center xs:py-4 xs:px-4 md:px-8 lg:pl-16">
          <div className="flex flex-col relative h-[75%]">
            <div className="flex flex-col sticky top-24">
              <img src={Image} className="w-2/5 hidden lg:block" />
              <img src={Image} className="w-[15%] my-3 lg:hidden" />
              <p className="text-[80px] text-white leading-none font-Poppins font-extralight hidden lg:block lg:mb-12">
                HAK <br /> KIM <br /> DA
              </p>
              <p className="text-5xl text-white lg:text-[80px] leading-none font-Poppins font-extralight lg:hidden">
                HAKKIMDA
              </p>
              <p className="text-xl text-white font-Poppins hidden lg:block">
                Check our <br /> recent work
              </p>{" "}
              <p className="text-xl text-white font-Poppins lg:hidden ">
                Check our recent work
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
