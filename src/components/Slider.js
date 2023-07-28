import React, {memo} from "react";
import Slick from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slider = ({images}) => {
  return (
    <div className="w-full">
      <Slick {...settings}>
        {images.length > 0 &&
          images?.map((item, index) => (
            <div
              key={index}
              className="bg-black flex items-center justify-center h-[320px]"
            >
              <img
                src={item}
                alt=""
                className="h-full object-contain mx-auto"
              />
            </div>
          ))}
      </Slick>
    </div>
  );
};

export default memo(Slider);
