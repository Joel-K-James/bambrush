// src/components/Hero.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import brush from "../Assets/1.png";
import leaf from "../Assets/home_asset_1.png";
import leaf2 from "../Assets/home_asset_2.png";
import bamboo from "../Assets/side_bamboo_1.png";

const Hero = () => {
  const titleRef = useRef(null);
  const brushRef = useRef(null);
  const leafRef = useRef(null);
  const leaf2Ref = useRef(null);
  const bambooRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Step 1: Title animation (fade in)
    timeline.from(titleRef.current, { opacity: 0, y: -50 });

    // Step 2: Brush animation (drops from above)
    timeline.from(brushRef.current, { opacity: 0, y: -200, duration: 1.2, ease: "bounce.out" }, "+=0.5");

    // Step 3: Leaves and bamboo appear sequentially
    timeline.from(leafRef.current, { opacity: 0, x: -100 }, "-=0.5");
    timeline.from(leaf2Ref.current, { opacity: 0, x: 100 }, "-=0.5");
    timeline.from(bambooRef.current, { opacity: 0, x: 100 }, "-=0.5");
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-[#d2dbbf] to-[#3e9c30] relative overflow-hidden">
      {/* Title */}
      <h1
        ref={titleRef}
        className="absolute text-white text-[15vw] font-bold font-sans z-20"
      >
        BAMBRUSH
      </h1>

      {/* Brush */}
      <img
        ref={brushRef}
        className="absolute w-1/2 z-30"
        src={brush}
        alt="Bambrush Main Brush"
      />

      {/* Leaf decorations */}
      <img
        ref={leafRef}
        className="absolute top-10 left-0 w-[18%] rotate-60"
        src={leaf}
        alt="Leaf Decoration"
      />

      <img
        ref={leaf2Ref}
        className="absolute top-[70%] left-[80%] w-[12%] -rotate-90"
        src={leaf2}
        alt="Leaf Decoration"
      />

      {/* Bamboo decoration */}
      <img
        ref={bambooRef}
        className="absolute bottom-0 right-0 h-full z-10"
        src={bamboo}
        alt="Side Bamboo"
      />
    </div>
  );
};

export default Hero;

