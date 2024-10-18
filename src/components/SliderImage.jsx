import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Images
import slide1 from "../assets/Slider/Slider 1.jpg";
import slide2 from "../assets/Slider/Slider 2.jpg";
import slide3 from "../assets/Slider/Slider 3.jpg";

export default function SliderImage() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
        <div className="slider-container mx-auto mb-8 w-full px-8">
            <Slider {...settings}>
                <div>
                    <img src={slide1} alt="Slide 1" className="w-full h-96 object-cover rounded-3xl shadow-lg p-2" />
                </div>
                <div>
                    <img src={slide2} alt="Slide 2" className="w-full h-96 object-cover rounded-3xl shadow-lg p-2" />
                </div>
                <div>
                    <img src={slide3} alt="Slide 3" className="w-full h-96 object-cover rounded-3xl shadow-lg p-2" />
                </div>
            </Slider>
        </div>
    )
}
