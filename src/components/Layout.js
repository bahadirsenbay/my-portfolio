import React from "react";
import Image from "../Image/01_left.png";
import { TbDiamond } from "react-icons/tb";

const Layout = ({reverse, children}) => {
  return (
    <div id="whatwedo">
      <div className={`flex flex-col lg:flex-row lg:${reverse} content-container`}>
        <div className="flex-auto sm:h-2/6 lg:h-full lg:w-2/6 bg-yellow-300">
        <div className="flex items-center xs:py-4 xs:px-4 md:px-8 lg:justify-center lg:content-container">
          <div className="flex flex-col relative h-[65%]">
            <div className="flex flex-col sticky top-24">
              <img src={Image} className="h-1/2 w-1/4 hidden lg:block" />
              <img src={Image} className="w-[15%] my-3 lg:hidden" />
              <p className="text-[80px] leading-none font-light hidden lg:block">
                WHAT <br /> WE <br /> DO
              </p>
              <p className="text-5xl lg:text-[80px] leading-none font-light lg:hidden">
                WHAT WE DO
              </p>
              <p className="text-xl hidden lg:block">
                Our modest <br /> list of services
              </p>{" "}
              <p className="text-xl lg:hidden ">
                Our modest list of services
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className="flex-auto sm:h-2/3 lg:h-full lg:w-2/3 bg-yellow-600">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
