import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const waveRef = useRef(null);

  useEffect(() => {
    gsap.timeline({ repeat: -1 })
      .fromTo(
        waveRef.current,
        { x: '100%' },
        {
          x: '-150%',
          duration: 5,
          ease: 'linear'
        }
      );
  }, []);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-[#f5f5dc] to-[#8CC63F] text-[#2D6A4F] py-10 px-6">
      <div
        ref={waveRef}
        className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-[#f5f5dc] via-[#8CC63F] to-[#2D6A4F] opacity-50"
        style={{ transform: 'translateX(100%)' }}
      ></div>

      <div className="relative z-10 text-center space-y-4">
        <h2 className="text-2xl font-bold text-[#2D6A4F]">
          Get Your BamBrush Today!
        </h2>
        <p className="text-lg text-[#2D6A4F]">
          Join the movement towards a sustainable future.
        </p>
        <a
          href="https://amzn.in/d/0TyszWB"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold shadow-md transition-all duration-300"
        >
          Buy Now
        </a>

        <div className="flex justify-center space-x-8 mt-6 text-sm font-medium">
        <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="https://amzn.in/d/0TyszWB" className="hover:underline">Shop</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.instagram.com/bambrush.in?igsh=MTFkcGkwaWt2b21ydw==" target="_blank" rel="noopener noreferrer" className="text-[#2D6A4F] hover:text-green-600 transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#2D6A4F] hover:text-green-600 transition duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.linkedin.com/company/bambrush-india/" target="_blank" rel="noopener noreferrer" className="text-[#2D6A4F] hover:text-green-600 transition duration-300">
            <FaLinkedinIn size={24} />
          </a>
        </div>

        <p className="text-xs mt-6 opacity-70">
          © 2024 BamBrush. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
