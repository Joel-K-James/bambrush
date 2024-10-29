// src/components/Navbar.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <nav ref={navbarRef} className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-800">BAMBRUSH</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>
    </nav>
  );
};

export default Navbar;


