import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const loaderRef = useRef(null);
  const textRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timeline = gsap.timeline();

    // Step 1: Slide in the beige overlay
    timeline.to(loaderRef.current, {
      x: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Step 2: Animate text appearance with stagger
    timeline.to(
      textRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.3, // Staggering each sentence by 0.3 seconds
      },
      "-=0.5" // Starts 0.5 seconds before the previous animation ends
    );

    // Step 3: Slide out the beige overlay
    timeline.to(loaderRef.current, {
      x: "100%",
      duration: 1,
      ease: "power3.inOut",
      delay: 0.5,
    });

    // Navigate to home after 10 seconds
    const timer = setTimeout(() => {
      navigate("/home");
    }, 10000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-screen bg-beige-300">
      {/* Beige overlay for loader */}
      <div
        ref={loaderRef}
        className="fixed inset-0 bg-beige-300 translate-x-full flex items-center justify-center"
      >
        <div className="text-center text-green-700 text-5xl font-bold space-y-4">
          <p ref={(el) => (textRef.current[0] = el)} className="opacity-0">
            Discover
          </p>
          <p ref={(el) => (textRef.current[1] = el)} className="opacity-0">
            the Eco-Friendly
          </p>
          <p ref={(el) => (textRef.current[2] = el)} className="opacity-0">
            Toothbrush
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;


