import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import leaf from "../Assets/home_asset_1.webp";
import leaf2 from "../Assets/home_asset_2.webp";
import cup from "../Assets/DSC01711.webp";

gsap.registerPlugin(ScrollTrigger);

const Shopnow = ({ onShopClick }) => {
  const containerRef = useRef(null);
  const bambooLeftRef = useRef(null);
  const bambooRightRef = useRef(null);
  const brushRef = useRef(null);
  const textRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([bambooLeftRef.current, bambooRightRef.current], {
        opacity: 0,
        scale: 0.8,
        x: 0
      });
      
      gsap.set(textRef.current, {
        opacity: 0,
        y: 30
      });

      gsap.set(brushRef.current, {
        opacity: 0,
        scale: 0.9
      });

      gsap.set(overlayRef.current, {
        scaleY: 1
      });

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      introTl
        .to(overlayRef.current, {
          scaleY: 0,
          duration: 1.2,
          ease: 'power2.inOut',
          transformOrigin: 'top'
        })
        .from(imageWrapperRef.current, {
          clipPath: 'inset(100% 0 0 0)',
          duration: 1,
          ease: 'power4.out'
        }, '-=0.5')
        .to(brushRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out'
        }, '-=0.5')
        .to([bambooLeftRef.current, bambooRightRef.current], {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        }, '-=0.8')
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        }, '-=0.5');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 1.2,
        }
      });

      scrollTl
        .to(bambooLeftRef.current, {
          x: '-20vw',
          rotate: -5,
          duration: 1,
          ease: 'power1.inOut'
        }, 0)
        .to(bambooRightRef.current, {
          x: '20vw',
          rotate: 5,
          duration: 1,
          ease: 'power1.inOut'
        }, 0)
        .to(brushRef.current, {
          y: -20,
          scale: 1.05,
          duration: 1,
          ease: 'power1.inOut'
        }, 0);

      gsap.to('.glow-effect', {
        boxShadow: '0 0 30px rgba(45, 106, 79, 0.6)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div ref={containerRef} className="relative min-h-screen bg-[#f5f9f5] max-w-[1920px] mx-auto">
        <div 
          ref={overlayRef} 
          className="absolute inset-0 bg-[#2D6A4F] transform-origin-top z-50"
        />
        
        <div className="relative h-screen flex items-center justify-center">
          <div 
            ref={bambooLeftRef} 
            className="absolute left-0 h-full flex items-center pointer-events-none" 
            style={{ width: '25%' }}
          >
            <img 
              src={leaf} 
              alt="" 
              className="w-full h-auto max-h-[80vh] object-contain object-right-center"
            />
          </div>

          <div ref={brushRef} className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto px-4">
            <div className="relative mb-8" ref={imageWrapperRef}>
              <div className="glow-effect relative bg-white rounded-[2rem] p-6 shadow-lg w-full aspect-video flex items-center justify-center overflow-hidden transition-shadow duration-300">
                <img 
                  src={cup} 
                  alt="Bamboo Toothbrush" 
                  className="w-full h-full object-cover rounded-[1.5rem]"
                />
              </div>
            </div>
            
            <div ref={textRef} className="text-center">
              <h2 className="text-[2.5rem] font-bold text-[#2D6A4F] mb-4 leading-tight">
                Eco-Friendly Bamboo Toothbrush
              </h2>
              <p className="text-lg text-[#2D6A4F] max-w-md mx-auto mb-8">
                Made from sustainable bamboo, our toothbrushes are 100% biodegradable and perfect for a plastic-free lifestyle.
              </p>
              <div className="flex justify-center mt-8" style={{ zIndex: 10 }}>
                <a
                  href="https://www.amazon.in"
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

          <div 
            ref={bambooRightRef} 
            className="absolute right-0 h-full flex items-center pointer-events-none" 
            style={{ width: '25%' }}
          >
            <img 
              src={leaf2} 
              alt="" 
              className="w-full h-auto max-h-[80vh] object-contain object-left-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopnow;
