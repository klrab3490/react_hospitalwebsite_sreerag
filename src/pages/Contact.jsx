import React from 'react';
import { IoMdMailOpen } from "react-icons/io";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="mx-auto px-4 pt-6"> {/* Added pt-20 for top padding */}
      {/* Contact Information Section */}
      <section id="contact-info" className="mb-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white"> Contact Information </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-slate-400">
            Contact ABC Hospital for any inquiries. Our dedicated staff is here to assist you with your healthcare needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-2 justify-center">
                <FaMapMarkerAlt className='text-blue-500' size={28} />
                <h3 className="text-xl font-semibold text-blue-500">Address</h3>
              </div>
              <address className="text-blue-500">123 Main Street, Onigashima, Wano Country</address>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-2 justify-center">
                <FaPhoneAlt className='text-blue-500' size={28}  />
                <h3 className="text-xl font-semibold text-blue-500">Phone</h3>
              </div>
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">+123 456 7890</a>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-2 justify-center">
                <IoMdMailOpen className='text-blue-500' size={28}  />
                <h3 className="text-xl font-semibold text-blue-500">Email</h3>
              </div>
              <a href="mailto:info@abchospital.com" className="text-blue-600 hover:underline">info@abchospital.com</a>
              </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact-form" className="mb-10">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Send Us a Message
          </h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-left mb-2 text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left mb-2 text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-left mb-2 text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}