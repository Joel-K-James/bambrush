import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cup from "../Assets/DSC01711.webp";

gsap.registerPlugin(ScrollTrigger);

const Shopnow = ({ onShopClick }) => {
  const containerRef = useRef(null);
  const brushRef = useRef(null);
  const textRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRef.current, {
        opacity: 0,
        y: 50
      });

      gsap.set(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        rotationY: 45
      });

      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });

      mainTl
        .to(imageRef.current, {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "back.out(1.7)"
        })
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.5");

      imageWrapperRef.current.addEventListener('mouseenter', () => {
        gsap.to(imageRef.current, {
          scale: 1.05,
          duration: 0.5,
          ease: "power2.out"
        });
      });

      imageWrapperRef.current.addEventListener('mouseleave', () => {
        gsap.to(imageRef.current, {
          scale: 1,
          duration: 0.5,
          ease: "power2.inOut"
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div ref={containerRef} className="relative min-h-screen bg-white max-w-[1920px] mx-auto">
        <div className="relative h-screen flex items-center justify-center">
          <div ref={brushRef} className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto px-4">
            <div className="relative mb-8" ref={imageWrapperRef}>
              <div className="relative bg-white rounded-[2rem] p-6 shadow-lg w-full aspect-video flex items-center justify-center overflow-hidden">
                <img 
                  ref={imageRef}
                  src={cup} 
                  alt="Bamboo Toothbrush" 
                  className="w-full h-full object-cover rounded-[1.5rem]"
                />
              </div>
            </div>
            
            <div ref={textRef} className="text-center">
              <h2 className="text-[2.5rem] font-bold text-black mb-4 leading-tight">
                Eco-Friendly Bamboo Toothbrush
              </h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
                Made from sustainable bamboo, our toothbrushes are 100% biodegradable and perfect for a plastic-free lifestyle.
              </p>
              <div className="flex justify-center mt-8" style={{ zIndex: 10 }}>
                <a
                  href="https://amzn.in/d/0TyszWB"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ cursor: 'pointer', pointerEvents: 'auto' }}
                  className="px-8 py-3 bg-[#2D6A4F] hover:bg-[#1B4332] text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopnow;