import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white text-center h-24 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
            <FaInstagram size={28} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
            <FaTwitter size={28} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-300">
            <FaFacebook size={28} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition duration-300">
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm">
          © 1990 ABC Hospital. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
