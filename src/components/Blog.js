import React from "react";
import Image from "../Image/01_left.png";
import ProgressItem from "./ProgressItem";

const Blog = () => {
  return (
    <div id="blog" className="">
      <div className=" flex flex-col-reverse  lg:grid grid-cols-3 gap-4 bg-pink-600">
        <div className="flex items-center justify-center col-span-2 bg-pink-700 lg:px-10 py-14 gap-3">
          <div className="w-full grid grid-cols-1 lg:grid-cols-1 items-center justify-center px-10 lg:px-18 lg:py-10 lg:py-1  gap-10">
            <ProgressItem percent={"80"} name={"Javascript"} />
            <ProgressItem percent={"90"} name={"React JS"} />
            <ProgressItem percent={"90"} name={"ES6"} />
            <ProgressItem percent={"78"} name={"Redux"} />
            <ProgressItem percent={"68"} name={"Next JS"} />
            <ProgressItem percent={"95"} name={"Material UI"} />
            <ProgressItem percent={"80"} name={"Tailwind"} />
            <ProgressItem percent={"75"} name={"SASS"} />
          </div>
        </div>
        <div className="flex items-center xs:py-4 xs:px-4 md:px-8 lg:pl-16 lg:content-container">
          <div className="flex flex-col relative h-[110%] lg:top-[100px]">
            <div className="flex flex-col sticky top-24">
              <img src={Image} className="w-2/5 hidden lg:block" />
              <img src={Image} className="w-[15%] my-3 lg:hidden" />
              <p className="text-[80px] text-white leading-none font-Poppins font-extralight hidden lg:block lg:mb-12">
                YETE <br /> NEK
              </p>
              <p className="text-5xl text-white lg:text-[80px] leading-none font-Poppins font-extralight lg:hidden">
                YETENEK
              </p>
              <p className="text-xl text-white font-Poppins hidden lg:block">
                Check our <br /> recent work
              </p>{" "}
              <p className="text-xl text-white font-Poppins  lg:hidden ">
                Check our recent work
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
