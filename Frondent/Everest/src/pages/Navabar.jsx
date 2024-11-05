import  { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/Images/main logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Everest Traders Inc. Logo" className="h-[20%] w-[20%]" />
          <div className="text-xl font-bold hidden sm:block">
            <span>EVEREST</span> <br />
            <span className="text-sm">TRADERS INC.</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-700">
          <a href="#home" className="text-blue-600 font-bold hover:scale-105 transition duration-200">Home</a>
          <a href="#about" className="font-bold hover:scale-105 transition duration-200">About Us</a>
          <a href="#brands" className="font-bold hover:scale-105 transition duration-200">Brands</a>
          <a href="#categories" className="font-bold hover:scale-105 transition duration-200">Product Category</a>
          <a href="#media" className="font-bold hover:scale-105 transition duration-200">Media</a>
          <a href="#contact" className="font-bold hover:scale-105 transition duration-200">Contact Us</a>
        </div>

        {/* Country Selection & Mobile Menu Toggle */}
        <div className="flex items-center space-x-2">
         
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-50 bg-blue-800 bg-opacity-90 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-start p-8 space-y-6 text-white text-lg font-bold">
          <button
            className="self-end text-white text-3xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiX />
          </button>
          <a href="#home" className="hover:scale-105 transition duration-200">Home</a>
          <a href="#about" className="hover:scale-105 transition duration-200">About Us</a>
          <a href="#brands" className="hover:scale-105 transition duration-200">Brands</a>
          <a href="#categories" className="hover:scale-105 transition duration-200">Product Category</a>
          <a href="#media" className="hover:scale-105 transition duration-200">Media</a>
          <a href="#contact" className="hover:scale-105 transition duration-200">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
