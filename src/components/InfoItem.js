import React from "react";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { FiTablet } from "react-icons/fi";

const InfoItem = () => {
  return (
    <div className="flex mt-8 lg:mx-52 grid-cols-4 items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center gap-3">
        <FiTablet  className="text-red-500 lg:text-9xl" />
        <p className="mb-2 text-white text-center">Response</p>
        <p className="text-white text-center">
          Lorem ipsum dolor sit amed, lorem ipsum dolor sit amed
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <AiOutlineMessage className="text-red-500 lg:text-9xl" />
        <p className="mb-2 text-white text-center">Response</p>
        <p className="text-white text-center">
          Lorem ipsum dolor sit amed, lorem ipsum dolor sit amed
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <MdOutlinePhotoCamera className="text-red-500 lg:text-9xl" />
        <p className="mb-2 text-white text-center">Response</p>
        <p className="text-white text-center">
          Lorem ipsum dolor sit amed, lorem ipsum dolor sit amed
        </p>
      </div>
    </div>
  );
};

export default InfoItem;
