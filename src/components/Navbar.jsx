import React, { useState } from 'react';
import { RiCloseLine, RiMenu5Line } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Get current route
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-800 px-2 sm:px-4 md:px-6 w-full h-24 flex justify-between items-center">
        {/* Navbar brand centered */}
        <h1 className="text-white text-4xl font-bold">ABC Hospital</h1>

        {/* Navbar toggle button */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RiCloseLine size={28} /> : <RiMenu5Line size={24} />}
        </button>

        {/* Navbar links */}
        <ul className="hidden lg:flex flex-wrap gap-2 max-w-[700px]">
          <li className="nav-item">
            <Link className={`text-white p-3 rounded-md text-xl font-medium ${location.pathname === '/' ? 'bg-gray-900 dark:bg-slate-600' : '' }`} to="/" > Home </Link>
          </li>
          <li className="nav-item">
            <Link className={`text-white p-3 rounded-md text-xl font-medium ${location.pathname === '/about' ? 'bg-gray-900 dark:bg-slate-600' : '' }`} to="/about" > About </Link>
          </li>
          <li className="nav-item">
            <Link className={`text-white p-3 rounded-md text-xl font-medium ${location.pathname === '/booking' ? 'bg-gray-900 dark:bg-slate-600' : '' }`} to="/booking" > Booking </Link>
          </li>
          <li className="nav-item">
            <Link className={`text-white p-3 rounded-md text-xl font-medium ${location.pathname === '/doctors' ? 'bg-gray-900 dark:bg-slate-600' : '' }`} to="/doctors" > Doctors </Link>
          </li>
          <li className="nav-item">
            <Link className={`text-white p-3 rounded-md text-xl font-medium ${location.pathname === '/department' ? 'bg-gray-900 dark:bg-slate-600' : '' }`} to="/department" > Departments </Link>
          </li>
          <li className="nav-item">
            <Link className={`text-white p-3 rounded-md text-xl font-medium ${location.pathname === '/contact' ? 'bg-gray-900 dark:bg-slate-600' : '' }`} to="/contact" > Contact Us </Link>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div className='z-10 h-full w-full bg-gray-800 px-4 pb-6'>
          <div className='flex flex-wrap justify-center items-center h-full transform transition-transform duration-300 ease-in-out'>
            <Link onClick={() => setIsOpen(!isOpen)} className={`text-white p-3 rounded-md text-xl font-medium ${location.pathname === '/' ? 'bg-gray-900 dark:bg-slate-600' : '' }`} to="/" > Home </Link>
            <Link onClick={() => setIsOpen(!isOpen)} className={`text-white p-3 rounded-md text-xl font-medium ${location.pathname === '/about' ? 'bg-gray-900 dark:bg-slate-600' : '' }`} to="/about" > About </Link>
            <Link onClick={() => setIsOpen(!isOpen)} className={`text-white p-3 rounded-md text-xl font-medium ${location.pathname === '/booking' ? 'bg-gray-900 dark:bg-slate-600' : '' }`} to="/booking" > Booking </Link>
            <Link onClick={() => setIsOpen(!isOpen)} className={`text-white p-3 rounded-md text-xl font-medium ${location.pathname === '/doctors' ? 'bg-gray-900 dark:bg-slate-600' : '' }`} to="/doctors" > Doctors </Link>
            <Link onClick={() => setIsOpen(!isOpen)} className={`text-white p-3 rounded-md text-xl font-medium ${location.pathname === '/department' ? 'bg-gray-900 dark:bg-slate-600' : '' }`} to="/department" > Departments </Link>
            <Link onClick={() => setIsOpen(!isOpen)} className={`text-white p-3 rounded-md text-xl font-medium ${location.pathname === '/contact' ? 'bg-gray-900 dark:bg-slate-600' : '' }`} to="/contact" > Contact Us </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
