import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Bannar = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img
            className="max-h-96 h-80 brightness-75"
            src="https://i.ibb.co/x2hQTmx/hand-gc8aa9cd47-1920.jpg"
            alt=""
          />
          <p className="absolute bottom-32 md:bottom-40 right-7 md:right-16 text-3xl md:text-5xl ">
            Why did you choose us?
          </p>
        </div>
        <div>
          <img
            className="max-h-96 brightness-50"
            src="https://i.ibb.co/G2yKp31/banner-ge7176802e-1920.jpg"
            alt="banner-ge7176802e-1920"
          />
          <p className="absolute bottom-10 md:bottom-40 right-7 md:right-0 text-3xl md:text-5xl text-white md:w-1/2">
            Most of our customers are satisfied with our service.
          </p>
        </div>
        <div>
          <img
            className="max-h-96 brightness-75"
            src="https://i.ibb.co/1RBrT3w/mockup-g7045787e1-1920.jpg"
            alt="mockup-g7045787e1-1920"
          />
          <p className="absolute bottom-32 md:bottom-40 right-5 md:right-16 text-3xl md:text-5xl text-white">
            What's your thought?
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Bannar;
