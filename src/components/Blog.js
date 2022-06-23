import React from "react";
import Image from "../Image/01_left.png";
import BlogItem from "./BlogItem";

const Blog = () => {
  return (
    <div id="blog" className="">
      <div className=" flex flex-col-reverse  lg:grid grid-cols-3 gap-4 bg-pink-600">
        <div className="xs:px-4 md:px-8 lg:items-center justify-center col-span-2 bg-pink-700 gap-3">
         <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:px-32 gap-8 pt-24">
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
         </div>
        </div>
        <div className="flex items-center xs:py-4 xs:px-4 md:px-8 lg:pl-16 lg:content-container">
          <div className="flex flex-col relative h-[65%]">
            <div className="flex flex-col sticky top-24">
              <img src={Image} className="w-2/5 hidden lg:block" />
              <img src={Image} className="w-[15%] my-3 lg:hidden" />
              <p className="text-[80px] text-white leading-none font-Poppins font-extralight hidden lg:block lg:mb-12">
                BL <br /> OG
              </p>
              <p className="text-5xl text-white lg:text-[80px] leading-none font-Poppins font-extralight lg:hidden">
                HAKKIMDA
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
