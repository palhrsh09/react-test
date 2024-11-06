import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import image from "../assets/view1.png"


const HeroSection = () => {
  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="bg-white py-4 px-1 md:px-[10%] flex items-center justify-between">
        <div className='flex justify-between gap-3 mr-2 items-center'>
        <div className="flex items-center">
          <span className="text-2xl font-bold text-indigo-900">Codersbay</span>
          <span className="text-sm ml-1 text-indigo-600">TECHNOLOGIES</span>
        </div>

            <div className='hidden sm:flex gap-3 items-center'>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Industries</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Services</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">About Us</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Resources</a>
            </div>

           
            </div>
        
        <div className="hidden md:flex items-center space-x-6">
        
          <button className="bg-indigo-900 text-white px-6 py-2 rounded-md hover:bg-indigo-800 transition-colors">
            Contact Us
          </button>
        </div>

        <div className='sm:flex md:hidden' >
            <GiHamburgerMenu />
            </div>


      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-indigo-900">
  <img src={image} className="w-full h-[350px] object-cover" />
  <div className="absolute max-w-3xl top-0 left-4 mx-auto px-6 py-24">
    <h1 className="text-5xl font-bold text-white mb-4 text-left">
      Crafting Solutions, Transforming Businesses
    </h1>
  </div>
</div>

    </div>
  );
};

export default HeroSection;