import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onLoadingComplete }) => {
  const loaderRef = useRef(null);
  const circleRef = useRef(null);
  const stemRef = useRef(null);
  const leftLeafRef = useRef(null);
  const rightLeafRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: onLoadingComplete
          });
        }, 500);
      }
    });

    gsap.set([leftLeafRef.current, rightLeafRef.current], {
      scale: 0,
      opacity: 0
    });
    gsap.set(stemRef.current, {
      scaleY: 0,
      transformOrigin: 'bottom'
    });
    gsap.set(circleRef.current, {
      scale: 0,
      opacity: 0
    });
    gsap.set(textRef.current, {
      opacity: 0,
      y: 20
    });

    tl.to(circleRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.75)"
    })
    .to(stemRef.current, {
      scaleY: 1,
      duration: 1,
      ease: "power4.out"
    }, "-=0.3")
    .to([leftLeafRef.current, rightLeafRef.current], {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.4")
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");

  }, [onLoadingComplete]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
    >
      <div className="w-32 h-32 md:w-40 md:h-40 relative">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
        >
          <circle
            ref={circleRef}
            cx="50"
            cy="50"
            r="50"
            fill="#8CC63F"
          />
          
          <path
            ref={stemRef}
            d="M50 75 L50 35"
            stroke="white"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          
          <path
            ref={leftLeafRef}
            d="M50 35 Q40 25 35 35"
            stroke="white"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          
          <path
            ref={rightLeafRef}
            d="M50 35 Q60 25 65 35"
            stroke="white"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div 
        ref={textRef}
        className="mt-6 text-2xl md:text-3xl font-bold tracking-wider text-green-600"
      >
        BAMBRUSH
      </div>
    </div>
  );
};

export default Loader;

