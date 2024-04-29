import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = () => {
  return (
    <Carousel width="59%">
      <div className="h-80">
        <img src="/../images/hero/house.png" className="object-cover" />
      </div>
      <div className="h-80">
        <img src="/../images/hero/house.png" className="object-cover" />
      </div>
      <div className="h-80">
        <img src="/../images/hero/house.png" className="object-cover" />
      </div>
      <div className="h-80">
        <img src="/../images/hero/house.png" className="object-cover" />
      </div>
      <div className="h-80">
        <img src="/../images/hero/house.png" className="object-cover" />
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
