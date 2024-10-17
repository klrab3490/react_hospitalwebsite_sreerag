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
    <div className="bg-white">
      {/* Slideshow Section */}
      <div className="slider-container mx-auto mb-8 w-3/4">
        <Slider {...settings}>
          <div>
            <img src="/images/slide1.jpg" alt="Slide 1" className="w-full h-96 object-cover rounded-lg shadow-lg" />
          </div>
          <div>
            <img src="/images/slide2.jpg" alt="Slide 2" className="w-full h-96 object-cover rounded-lg shadow-lg" />
          </div>
          <div>
            <img src="/images/slide3.jpg" alt="Slide 3" className="w-full h-96 object-cover rounded-lg shadow-lg" />
          </div>
        </Slider>
      </div>

      {/* Services Section */}
      <div className="services text-center mb-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-card bg-gradient-to-r from-blue-100 to-blue-200 text-black p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Emergency Care</h3>
            <p>24/7 emergency services available for all critical conditions.</p>
          </div>
          <div className="service-card bg-gradient-to-r from-green-100 to-green-200 text-black p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Outpatient Services</h3>
            <p>Comprehensive outpatient services including diagnostics and treatment.</p>
          </div>
          <div className="service-card bg-gradient-to-r from-pink-100 to-pink-200 text-black p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Surgical Care</h3>
            <p>World-class surgical facilities with experienced surgeons.</p>
          </div>
        </div>
      </div>

      {/* Need Assistance Section */}
      <div className="assistance text-center py-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
        <p className="text-lg">Contact us for any inquiries or to schedule an appointment.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Home;
