import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Cycle = () => {
 const containerRef = useRef(null);

 const cycleSteps = [
   { title: 'Farmers grow Bamboo', icon: '👨‍🌾', description: 'Starting the cycle' },
   { title: 'Bamboo', icon: '🎋', description: 'Raw material' },
   { title: 'Processed Bamboo', icon: '⚙️', description: 'Manufacturing' },
   { title: 'Bambrush', icon: '🪥', description: 'Final product' },
   { title: 'Product Developed', icon: '📦', description: 'Ready for market' },
   { title: 'Customer use', icon: '🛍️', description: 'In consumer hands' },
   { title: 'Thrown out', icon: '🗑️', description: 'End of use' },
   { title: 'Turn manure', icon: '♻️', description: 'Processing waste' },
   { title: 'Manure to farmers', icon: '🌱', description: 'Completing the cycle' }
 ];

 useEffect(() => {
   const ctx = gsap.context(() => {
     // Heading animation with bounce effect
     gsap.from(".cycle-heading", {
       y: -100,
       opacity: 0,
       duration: 1.5,
       ease: "bounce.out",
     });

     // Heading continuous animation
     gsap.to(".cycle-heading", {
       y: 10,
       duration: 1.5,
       repeat: -1,
       yoyo: true,
       ease: "power1.inOut"
     });

     // Split heading text for letter animation
     const headingText = document.querySelector('.cycle-heading');
     const letters = headingText.textContent.split('');
     headingText.textContent = '';
     
     letters.forEach((letter, i) => {
       const span = document.createElement('span');
       span.textContent = letter;
       span.style.display = 'inline-block';
       headingText.appendChild(span);

       gsap.from(span, {
         opacity: 0,
         y: Math.random() * 100 - 50,
         duration: 0.5,
         delay: i * 0.1,
         ease: "power2.out"
       });
     });

     // Cards animations
     const topCards = gsap.utils.toArray('.top-card');
     topCards.forEach((card) => {
       gsap.from(card, {
         x: -50,
         opacity: 0,
         scrollTrigger: {
           trigger: card,
           start: "top 80%",
           end: "bottom 20%",
           toggleActions: "play reverse play reverse",
           scrub: 1
         }
       });
     });

     const bottomCards = gsap.utils.toArray('.bottom-card');
     bottomCards.forEach((card) => {
       gsap.from(card, {
         x: 50,
         opacity: 0,
         scrollTrigger: {
           trigger: card,
           start: "top 80%",
           end: "bottom 20%",
           toggleActions: "play reverse play reverse",
           scrub: 1
         }
       });
     });
   }, containerRef);

   return () => ctx.revert();
 }, []);

 return (
   <div ref={containerRef} className="min-h-screen bg-green-50 px-4 py-10 md:py-20 overflow-hidden">
     <h1 className="cycle-heading text-2xl md:text-4xl font-bold text-green-600 text-center mb-8 md:mb-16">
       BAMBRUSH CYCLE
     </h1>
     
     <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
         {cycleSteps.slice(0, 5).map((step, index) => (
           <div
             key={index}
             className="top-card bg-white rounded-lg shadow-lg p-4 md:p-6 transform hover:scale-105 transition-transform"
           >
             <div className="text-2xl md:text-4xl mb-3 md:mb-4">{step.icon}</div>
             <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">{step.title}</h3>
             <p className="text-gray-600 text-xs md:text-sm">{step.description}</p>
           </div>
         ))}
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
         {cycleSteps.slice(5).map((step, index) => (
           <div
             key={index + 5}
             className="bottom-card bg-white rounded-lg shadow-lg p-4 md:p-6 transform hover:scale-105 transition-transform"
           >
             <div className="text-2xl md:text-4xl mb-3 md:mb-4">{step.icon}</div>
             <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">{step.title}</h3>
             <p className="text-gray-600 text-xs md:text-sm">{step.description}</p>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
};

export default Cycle;