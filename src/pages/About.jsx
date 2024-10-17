import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto pt-28 px-4 bg-gray-100 min-h-screen">
      {/* Introduction Section */}
      <section id="introduction" className="mb-16">
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-center text-5xl font-extrabold mb-6 text-indigo-600">
              About ABC Hospital
            </h2>
            <p className="text-justify text-gray-700 text-lg leading-relaxed">
              ABC Hospital has been at the forefront of healthcare in the community, providing comprehensive and compassionate care to patients. Our state-of-the-art facility is equipped with the latest technology and staffed by a dedicated team of professionals committed to ensuring the well-being of every patient who walks through our doors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section id="mission" className="mb-16">
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3 bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-center text-4xl font-semibold mb-6 text-indigo-600">
              Our Mission
            </h3>
            <p className="text-justify text-gray-700 text-lg leading-relaxed">
              Our mission is to deliver high-quality, patient-centered healthcare that meets the needs of our community. We are dedicated to fostering an environment of excellence, compassion, and innovation in medicine. Our goal is to improve the health and well-being of those we serve through outstanding clinical care, education, and research.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="mb-16">
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3 bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-center text-4xl font-semibold mb-6 text-indigo-600">
              Our History
            </h3>
            <p className="text-justify text-gray-700 text-lg leading-relaxed">
              Founded in 1990, ABC Hospital has grown from a small clinic into a leading healthcare provider in the region. Over the years, we have expanded our services and facilities to better serve our patients. Our commitment to excellence in healthcare has remained steadfast, and we continue to strive for the highest standards in medical practice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
