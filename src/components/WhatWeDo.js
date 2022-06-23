import React from "react";
import Image from "../Image/01_left.png";
import { TbDiamond } from "react-icons/tb";

const WhatWeDo = () => {
  return (
    <div id="whatwedo" className="lg:content-container ">
      <div className=" flex flex-col  lg:grid grid-cols-3 gap-4 bg-pink-700">
        <div className="flex items-center xs:py-4 xs:px-4 md:px-8 lg:justify-center lg:content-container">
          <div className="flex flex-col relative h-[65%]">
            <div className="flex flex-col sticky top-24">
              <img src={Image} className="h-1/2 w-1/4 hidden lg:block" />
              <img src={Image} className="w-[15%] my-3 lg:hidden" />
              <p className="text-[80px] font-Poppins text-white leading-none font-extralight hidden lg:block lg:mb-12">
                WHAT <br /> WE <br /> DO
              </p>
              <p className="text-5xl text-white lg:text-[80px]  leading-none font-Poppins font-extralight lg:hidden">
                WHAT WE DO
              </p>
              <p className="text-xl text-white font-Poppins font-extralight hidden lg:block">
                Check our <br /> recent work
              </p>{" "}
              <p className="text-xl font-Poppins font-extralight text-white lg:hidden ">
                Check our recent work
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xs:px-4 md:px-8 lg:items-center justify-center col-span-2 content-container bg-pink-600">
          <div className="flex flex-col gap-10">
            <div className="px-2">
              <p className="font-light text-white text-3xl">
                Our modest list of services to <br /> suit all your digital
                needs
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 xl:gap-16">
              <div className="flex items-center justify-center gap-5">
                <TbDiamond className="text-white" fontSize={75} />
                <div className="flex flex-col gap-2">
                  <p className="text-white">Preciese</p>
                  <p className="text-white">
                    Phasellus vel est sem integer <br /> suscipit enim quis
                    dictum.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5">
                <TbDiamond className="text-white" fontSize={75} />
                <div className="flex flex-col gap-2">
                  <p className="text-white">Preciese</p>
                  <p className="text-white">
                    Phasellus vel est sem integer <br /> suscipit enim quis
                    dictum.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5">
                <TbDiamond className="text-white" fontSize={75} />
                <div className="flex flex-col gap-2">
                  <p className="text-white">Preciese</p>
                  <p className="text-white">
                    Phasellus vel est sem integer <br /> suscipit enim quis
                    dictum.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5">
                <TbDiamond className="text-white" fontSize={75} />
                <div className="flex flex-col gap-2">
                  <p className="text-white">Preciese</p>
                  <p className="text-white">
                    Phasellus vel est sem integer <br /> suscipit enim quis
                    dictum.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5">
                <TbDiamond className="text-white" fontSize={75} />
                <div className="flex flex-col gap-2">
                  <p className="text-white">Preciese</p>
                  <p className="text-white">
                    Phasellus vel est sem integer <br /> suscipit enim quis
                    dictum.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5">
                <TbDiamond className="text-white" fontSize={75} />
                <div className="flex flex-col gap-2">
                  <p className="text-white">Preciese</p>
                  <p className="text-white">
                    Phasellus vel est sem integer <br /> suscipit enim quis
                    dictum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
