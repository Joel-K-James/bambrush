import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import logo from "../Assets/bambrush_logo.webp";

const Loader = ({ onLoadingComplete }) => {
  const loaderRef = useRef(null);
  const sproutRef = useRef(null);
  const textRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (!loaderRef.current || !sproutRef.current || !textRef.current) {
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              setIsHidden(true);
              onLoadingComplete();
            }
          });
        }, 500);
      }
    });

    gsap.set(sproutRef.current, {
      scale: 0,
      opacity: 0,
      rotation: -10,
      transformOrigin: "center bottom"
    });
    
    gsap.set(textRef.current, {
      opacity: 0,
      y: 20
    });

    tl.to(sproutRef.current, {
      scale: 0.3,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    })
    .to(sproutRef.current, {
      scale: 1,
      rotation: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    })
    .to(sproutRef.current, {
      y: -10,
      duration: 0.5,
      ease: "power2.out",
      yoyo: true,
      repeat: 1
    }, "-=0.5")
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.8");

  }, [onLoadingComplete]);

  if (isHidden) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
    >
      <div className="w-32 h-32 md:w-40 md:h-40 relative overflow-visible">
        <img
          ref={sproutRef}
          src={logo}
          alt="Loading sprout logo"
          className="w-full h-full"
        />
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



