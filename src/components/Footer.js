import React from "react";
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black footer-container flex flex-col items-center justify-center text-center gap-28">
      <div>
        <h3 className="text-white text-xl sm:text-2xl lg:text-4xl font-Poppins font-bold hover:text-red-500 hover:transition-colors hover:duration-500 cursor-pointer mb-4">
          bahadirsenbay@outlook.com
        </h3>
        <p className="text-white text-2xl font-Poppins font-bold hover:text-red-500 hover:transition-colors hover:duration-500 cursor-pointer mb-2">
          987.654.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="gap-3">
          <p className="text-gray-500 font-Poppins text-lg">Bursa/Nilüfer</p>
          <p className="text-gray-500 font-Poppins text-lg">Türkiye</p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-5">
            <a href="https://twitter.com/bhdrsnby" target='blank'><AiOutlineTwitter className="text-white text-3xl hover:text-red-500 transition-colors hover:duration-500 cursor-pointer" /></a>
            <a href="https://www.instagram.com/bhdrsnby/" target='blank'><AiOutlineInstagram className="text-white text-3xl hover:text-red-500 transition-colors hover:duration-500 cursor-pointer" /></a>
            <a href="https://github.com/bahadirsenbay" target="blank"><AiFillGithub className="text-white text-3xl hover:text-red-500 transition-colors hover:duration-500 cursor-pointer" /></a>
            <a href="bahadirsenbay@outlook.com" target="blank"><AiOutlineMail className="text-white text-3xl hover:text-red-500 transition-colors hover:duration-500 cursor-pointer" /></a>
          </div>
          <p>© 2022 Created by Bahadır Şenbay</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
