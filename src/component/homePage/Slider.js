import React from 'react';
import { Link } from 'react-router-dom';
import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = ({slides}) => {

  // Slider Settings
  const settings = {
    dots: false,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  
  return ( 
  // <!-- SLIDER AREA -->
    <div class="slider_area">
        <SlickSlider {...settings}>
            {/* Single Slide */}
            {slides.map(slide=>{
              const background = `url(${slide.sliderImage.url}) center center /cover`
              return(
                <div className="singleSlide">
                    <div class="slider" style={{background}}>
                        <div class="slide_content">
                          {/* Title */}
                          <h1>{slide.sliderTitle}</h1>
                          {/* Description */}
                          <p>{slide.sliderDescription}</p>
                          {/* Button */}
                          <Link className="Btn whiteBtn" to={slide.buttonLink}>
                            {slide.sliderButtonText}
                          </Link>
                        </div>
                    </div>
                </div>
              )
            })}
        </SlickSlider>
    </div>      
  );
}
 
export default Slider;