import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <div className="relative ">
      <div className="absolute z-10 border-4 border-black  bottom-0 w-full h-40 bg-gradient-to-t from-gray-100 to-transparent " />
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <img src="/amazonBanner1.jpg" />
        </div>
        <div>
          <img src="/amazonBanner2.jpg" />
        </div>
        <div>
          <img src="/amazonBanner3.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
