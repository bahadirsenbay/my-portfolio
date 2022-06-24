import React from "react";

const ProgressItem = ({percent, name}) => {
  return (
    <div className="flex w-full items-center justify-center gap-12 mb-5">
      <p className="flex items-center justify-center text-white text-2xl lg:text-4xl font-Poppins font-extralight">
        {percent}%
      </p>
      <div className="flex flex-col w-full gap-2">
        <p className="text-white font-Poppins">{name}</p>
        <progress
          className="progress progress-primary w-full h-3"
          value="75"
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default ProgressItem;
