import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
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
    <div className="home">
      {/* Slideshow Section */}
      <div className="slider-container mx-auto mb-8 w-3/4">
        <Slider {...settings}>
          <div>
            <img src="/images/slide1.jpg" alt="Slide 1" className="w-full h-96 object-cover" />
          </div>
          <div>
            <img src="/images/slide2.jpg" alt="Slide 2" className="w-full h-96 object-cover" />
          </div>
          <div>
            <img src="/images/slide3.jpg" alt="Slide 3" className="w-full h-96 object-cover" />
          </div>
        </Slider>
      </div>

      {/* Services Section */}
      <div className="services text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
          <div className="service-card bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
            <p>24/7 emergency services available for all critical conditions.</p>
          </div>
          <div className="service-card bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Outpatient Services</h3>
            <p>Comprehensive outpatient services including diagnostics and treatment.</p>
          </div>
          <div className="service-card bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Surgical Care</h3>
            <p>World-class surgical facilities with experienced surgeons.</p>
          </div>
        </div>
      </div>

      {/* Need Assistance Section */}
      <div className="assistance text-center py-6 bg-gray-900 text-white">
        <h2 className="text-2xl font-bold">Need Assistance?</h2>
        <p className="text-lg">Contact us for any inquiries or to schedule an appointment.</p>
      </div>
    </div>
  );
};

export default Home;
