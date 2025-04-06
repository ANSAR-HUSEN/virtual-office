import React from 'react';
import logo from '../assets/logo_nav.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="relative z-10  bg-transparent bg-opacity-80 text-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* Logo placeholder */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className='w-[100px]' />
      </div>

      {/* Navigation links */}
      <ul className="flex space-x-10 text-sm font-medium">
        <Link to={'/'}><li className="border-b-2 border-white pb-1">Home</li></Link>
        <Link to={'/feature'}><li className="hover:text-gray-300 cursor-pointer">Features</li></Link>
        <li className="hover:text-gray-300 cursor-pointer">About Us</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
      </ul>

      {/* Sign In button */}
      <Link to={"/auth"}>
        <button className="bg-amber-400 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded">
          Sign In
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
