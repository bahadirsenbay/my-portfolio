import React from "react";
import Image from "../Image/01_left.png";
import MyJob from "../Image/portfolio.jpg"
import { TbDiamond } from "react-icons/tb";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className=" flex flex-col  lg:grid grid-cols-3 gap-4 bg-blue-700">
        <div className="flex items-center xs:py-4 xs:px-4 md:px-8 lg:justify-center">
          <div className="flex flex-col relative h-[86%]">
            <div className="flex flex-col sticky top-24">
              <img src={Image} className="w-2/6 hidden lg:block" />
              <img src={Image} className="w-[15%] my-3 lg:hidden" />
              <p className="text-[80px] text-white leading-none font-Poppins font-extralight hidden lg:block lg:mb-12">
                PORT <br /> FOL <br /> IO
              </p>
              <p className="text-5xl text-white lg:text-[80px] leading-none font-Poppins font-extralight lg:hidden">
                PORTFOLIO
              </p>
              <p className="text-xl text-white font-Poppins font-normal hidden lg:block">
                Check our <br /> recent work
              </p>{" "}
              <p className="text-xl text-white font-Poppins font-extralight lg:hidden ">
                Check our recent work
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xs:px-4 md:px-8 lg:items-center justify-center col-span-2 py-10 lg:py-32 bg-blue-600">
           <img src={MyJob}/> 
           <img src={MyJob}/> 
           <img src={MyJob}/> 

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
