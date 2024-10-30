import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../Assets/bambrush_logo.png'; 

const Navbar = ({ isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.set([logoRef.current, ...navItemsRef.current], {
      opacity: 0,
      y: -20
    });

    timelineRef.current = gsap.timeline({ paused: true });

    timelineRef.current
      .to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      })
      .to(navItemsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.3");

  }, []);

  useEffect(() => {
    if (!isLoading && timelineRef.current) {
      setTimeout(() => {
        timelineRef.current.play();
      }, 500);
    }
  }, [isLoading]);

  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    }
  }, [isOpen]);

  return (
    <header className="fixed w-full py-4 px-8 z-[100]">
      <nav className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between bg-transparent">
          <a 
            ref={logoRef}
            href="/" 
            className="flex items-center gap-3 text-green-800 relative z-[100]"
          >
            <img 
              src={logo} 
              alt="BamBrush Logo" 
              className="h-12 w-16"
            />
            <span className="text-3xl font-medium tracking-wide">
              BAMBRUSH
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-12 relative z-[100]">
            {['Home', 'About', 'View', 'Contact'].map((item, index) => (
              <a
                key={item}
                ref={el => navItemsRef.current[index] = el}
                href={`/${item.toLowerCase()}`}
                className="text-lg text-green-800 hover:text-green-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-green-800 relative z-[100]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div 
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden relative z-[100] bg-white/80 backdrop-blur-sm rounded-lg mt-2"
          style={{ height: 0, opacity: 0 }}
        >
          {['Home', 'About', 'View', 'Contact'].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block py-2 px-4 text-lg text-green-800 hover:text-green-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;