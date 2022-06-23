import React from "react";
import Slider from "react-slick";
import InfoItems from "./InfoItems";
import InfoItem from "./InfoItem";

const InfoSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows:false,
    speed: 500,
    autoplaySpeed:3500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="lg:slider-container lg:pt-40 bg-bg-sec">
      <div>
        <Slider {...settings}>
          <div className="flex items-center justify-center">
                <InfoItems/>
          </div>
          <div className="flex items-center justify-center">
                <InfoItem/>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default InfoSection;
