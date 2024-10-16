import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Get current route

  return (
    <nav className="bg-gray-800 p-2 w-full">
      <div className="container mx-auto px-4">
        {/* Navbar brand centered */}
        <div className="flex justify-center items-center">
          <h1 className="text-white text-2xl font-bold">ABC Hospital</h1>
        </div>

        {/* Navbar toggle button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navbar links */}
        <div className="hidden md:flex justify-center" id="navbarNav">
          <ul className="flex space-x-4">
            <li className="nav-item">
              <Link
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/' ? 'bg-gray-900' : ''
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/about' ? 'bg-gray-900' : ''
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/booking' ? 'bg-gray-900' : ''
                }`}
                to="/booking"
              >
                Booking
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/doctors' ? 'bg-gray-900' : ''
                }`}
                to="/doctors"
              >
                Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/department' ? 'bg-gray-900' : ''
                }`}
                to="/department"
              >
                Departments
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/contact' ? 'bg-gray-900' : ''
                }`}
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
