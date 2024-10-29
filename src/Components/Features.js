// src/components/Features.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Features = () => {
  const featureItemsRef = useRef([]);

  useEffect(() => {
    gsap.from(featureItemsRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Features</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Biodegradable Materials', 'Plastic-Free Packaging', 'Eco-Friendly Design'].map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureItemsRef.current[index] = el)}
              className="bg-green-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-green-700">{feature}</h3>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
