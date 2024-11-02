import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import brush1 from "../Assets/5.webp";
import brush2 from "../Assets/2.webp";
import brush3 from "../Assets/3.webp";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const headingsRef = useRef([]);
  const textsRef = useRef([]);
  const listItemsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;
    const images = imagesRef.current;
    const headings = headingsRef.current;
    const texts = textsRef.current;
    const listItems = listItemsRef.current;
    
    gsap.set(images, {
      opacity: 0,
      scale: 0.5,
      rotation: 20,
    });

    gsap.set(headings, {
      opacity: 0,
      y: 50,
    });

    gsap.set(texts, {
      opacity: 0,
      y: 30,
    });

    gsap.set(listItems, {
      opacity: 0,
      x: -30,
    });

    sections.forEach((section, i) => {
      let mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      mainTl.to(headings[i], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(images[i], {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.4")

      if (i === 1) {
        let items = section.querySelectorAll('li');
        mainTl.to(items, {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.4");
      } else {
        mainTl.to(texts[i], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.4");
      }

      if (images[i]) {
        images[i].addEventListener('mouseenter', () => {
          gsap.to(images[i], {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        images[i].addEventListener('mouseleave', () => {
          gsap.to(images[i], {
            scale: 1,
            duration: 0.3,
            ease: "power2.inOut"
          });
        });
      }
    });

    const specItems = document.querySelectorAll('.spec-item');
    gsap.from(specItems, {
      scrollTrigger: {
        trigger: specItems[0],
        start: "top 75%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      images.forEach(img => {
        if (img) {
          img.removeEventListener('mouseenter', () => {});
          img.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      <section 
        ref={el => sectionsRef.current[0] = el}
        className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 
              ref={el => headingsRef.current[0] = el}
              className="text-5xl md:text-7xl font-bold text-black mb-8"
            >
              PRODUCT OVERVIEW
            </h1>
            <p 
              ref={el => textsRef.current[0] = el}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
            >
              BamBrush bamboo toothbrushes are made from 100% biodegradable bamboo. The bristles are soft and gentle on your gums while providing effective cleaning. Perfect for those who are environmentally conscious and want to reduce their carbon footprint.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[80%] md:w-[100%] max-w-[500px] group">
              <img
                ref={el => imagesRef.current[0] = el}
                src={brush1}
                alt="Bamboo Toothbrush"
                className="relative w-full h-full object-contain shadow-lg rounded-[12px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={el => sectionsRef.current[1] = el}
        className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <img
              ref={el => imagesRef.current[1] = el}
              src={brush2}
              alt="Bamboo Toothbrush Features"
              className="w-[80%] md:w-[100%] max-w-[500px] shadow-lg rounded-[12px]"
            />
          </div>
          <div className="order-1 md:order-2">
            <h1 
              ref={el => headingsRef.current[1] = el}
              className="text-5xl md:text-7xl font-bold text-black mb-12"
            >
              FEATURES
            </h1>
            <ul className="space-y-6 text-xl md:text-2xl text-gray-600">
              {[
                "Eco-friendly and biodegradable",
                "Soft bristles for gentle cleaning",
                "Ergonomically designed handle",
                "Durable and long-lasting",
                "Available in multiple colors"
              ].map((feature, index) => (
                <li 
                  key={index}
                  ref={el => listItemsRef.current[index] = el}
                  className="flex items-center space-x-4 transform-gpu hover:translate-x-2 transition-transform duration-300"
                >
                  <span className="w-3 h-3 bg-[#8AB660] rounded-full"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section 
        ref={el => sectionsRef.current[2] = el}
        className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 
              ref={el => headingsRef.current[2] = el}
              className="text-[2rem] md:text-7xl font-bold text-black mb-12 leading-tight"
            >
              SPECIFICATIONS
            </h1>
            <div 
              ref={el => textsRef.current[2] = el}
              className="space-y-6 text-xl md:text-2xl text-gray-600"
            >
              {[
                ["Handle Material", "Bamboo"],
                ["Bristle Material", "Castor Bean Oil"],
                ["Length", "19 cm"],
                ["Weight", "10 grams"]
              ].map((spec, index) => (
                <p 
                  key={index}
                  className="spec-item flex justify-between border-b border-gray-300 pb-2 hover:bg-gray-50 transition-colors duration-300 px-2 rounded"
                >
                  <span className="font-medium">{spec[0]}:</span>
                  <span>{spec[1]}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[80%] md:w-[100%] max-w-[500px] p-8 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl">
              <img
                ref={el => imagesRef.current[2] = el}
                src={brush3}
                alt="Bamboo Toothbrush Specifications"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;