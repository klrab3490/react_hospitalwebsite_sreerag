import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-3 mt-auto">
      <div className="container mx-auto">
        <div className="mb-3">
          <a href="https://www.instagram.com" className="text-white mr-3">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com" className="text-white">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="mb-0">© 1990 ABC Hospital. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
