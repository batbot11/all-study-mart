import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Basename from "../../utils/Basename";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  return (
    <div className="imagecarousel__container">
      <img
        className="imagecarousel__image"
        src={`${Basename}images/bba group 1.jpeg`}
        alt="group1"
      />
      {/* <Carousel infiniteLoop renderThumbs={() => null} autoPlay className="imagecarousel__carousel">
        <div>
          <img
            className="imagecarousel__image"
            src={`${Basename}images/bba group 1.jpeg`}
            alt="group1"
          />
        </div>
        <div>
          <img
            className="imagecarousel__image"
            src={`${Basename}images/bba group 2.jpeg`}
            alt="group2"
          />
        </div>
        <div>
          <img
            className="imagecarousel__image"
            src={`${Basename}images/bba group 3.jpeg`}
            alt="group3"
          />
        </div>
      </Carousel> */}
    </div>
  );
};

export default ImageCarousel;
