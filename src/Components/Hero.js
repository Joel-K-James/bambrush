import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import brush from "../Assets/1.webp";
import bamboo from "../Assets/side_bamboo_1.webp";
import leaf from "../Assets/home_asset_1.webp";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ isLoading }) => {
  const mainTextRef = useRef(null);
  const brushRef = useRef(null);
  const bambooRef = useRef(null);
  const leftBambooRef = useRef(null);
  const timelineRef = useRef(null);
  const sectionRef = useRef(null);
  const aboutContentRef = useRef(null);
  const aboutTitleRef = useRef(null);

  useEffect(() => {
    gsap.set([mainTextRef.current, brushRef.current], {
      opacity: 0
    });
    
    gsap.set([aboutContentRef.current, aboutTitleRef.current], {
      opacity: 0,
      y: 50
    });
    
    gsap.set(leftBambooRef.current, {
      opacity: 0,
      y: "-100%",
      x: "-100%",
      rotation: -15
    });
    
    gsap.set(bambooRef.current, {
      opacity: 0,
      y: "-100%",
      x: "100%",
      rotation: 15
    });
    
    timelineRef.current = gsap.timeline({ paused: true });

    timelineRef.current
      .to(mainTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        from: { y: 100 }
      })
      .to(brushRef.current, {
        opacity: 1,
        rotation: 0,
        x: "-50%",
        y: "-50%",
        duration: 1.5,
        ease: "power3.out",
        from: { 
          rotation: 10,
          x: "50%",
          y: "-50%"
        }
      }, "-=0.5")
      .to([leftBambooRef.current, bambooRef.current], {
        opacity: 1,
        y: 0,
        x: 0,
        rotation: 0,
        duration: 1.8,
        ease: "bounce.out"
      }, "-=1");

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: ".about-section",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        pin: false,
        onEnter: () => {
          gsap.to(brushRef.current, {
            rotation: 90,
            x: "calc(100% - 200px)",
            y: "30%",
            scale: 1,
            duration: 1,
            ease: "power2.inOut"
          });
        },
        onLeaveBack: () => {
          gsap.to(brushRef.current, {
            rotation: 0,
            x: "-50%",
            y: "-50%",
            scale: 1,
            duration: 1,
            ease: "power2.inOut"
          });
        },
        onEnterBack: () => {
          gsap.to(brushRef.current, {
            opacity: 1,
            duration: 0.3
          });
        }
      });

      ScrollTrigger.create({
        trigger: ".about-section",
        start: "bottom 80%",
        end: "bottom top",
        onEnter: () => {
          gsap.to(brushRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              gsap.set(brushRef.current, { display: 'none' });
            }
          });
        },
        onLeaveBack: () => {
          gsap.set(brushRef.current, { display: 'block' });
          gsap.to(brushRef.current, {
            opacity: 1,
            duration: 0.3
          });
        }
      });
    });

    mm.add("(max-width: 767px)", () => {
      ScrollTrigger.create({
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
        pin: false,
        onEnter: () => {
          gsap.to(brushRef.current, {
            rotation: 0,
            x: "50%",
            y: "30vh",
            scale: 0.8,
            duration: 1,
            ease: "power2.inOut"
          });
        },
        onLeaveBack: () => {
          gsap.to(brushRef.current, {
            rotation: 0,
            x: "-50%",
            y: "-50%",
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut"
          });
        }
      });

      ScrollTrigger.create({
        trigger: ".about-section",
        start: "bottom 80%",
        end: "bottom top",
        onEnter: () => {
          gsap.to(brushRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              gsap.set(brushRef.current, { display: 'none' });
            }
          });
        },
        onLeaveBack: () => {
          gsap.set(brushRef.current, { display: 'block' });
          gsap.to(brushRef.current, {
            opacity: 1,
            duration: 0.3
          });
        }
      });
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 60%",
        end: "top 20%",
        scrub: false,
      }
    })
    .to([aboutTitleRef.current, aboutContentRef.current], {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!isLoading && timelineRef.current) {
      timelineRef.current.play();
    }
  }, [isLoading]);

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative h-screen overflow-hidden bg-gradient-to-br from-[rgb(249,253,241)] to-[rgb(83,147,73)]"
      >
        <div ref={leftBambooRef} className="absolute left-0 top-0 h-full w-auto z-[1]">
          <img
            src={leaf}
            alt="Left Bamboo Pattern"
            className="h-full w-auto object-contain transform rotate-90"
          />
        </div>

        <div className="relative z-[1] h-full flex items-center justify-center">
          <h1 ref={mainTextRef} className="text-[15vw] text-white font-bold">
            BAMBRUSH
          </h1>
        </div>

        <img
          ref={brushRef}
          src={brush}
          alt="Bamboo Toothbrush"
          className="fixed top-1/2 left-1/2 w-[60%] md:w-[40%] lg:w-[35%] z-50"
        />

        <div ref={bambooRef} className="absolute right-0 top-10 h-full w-1/4 z-[1] hidden md:block">
          <img
            src={bamboo}
            alt="Right Bamboo Pattern"
            className="h-full object-cover object-right pt-10"
          />
        </div>
      </section>

      <section className="about-section relative min-h-screen bg-[#f5f5f5] overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h2 
                ref={aboutTitleRef} 
                className="text-[#8AB660] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-16"
              >
                ABOUT
                <br />
                BAMBRUSH
              </h2>
              <div 
                ref={aboutContentRef} 
                className="text-gray-800 text-xl sm:text-2xl md:text-3xl leading-relaxed"
              >
                <p className="mb-6 md:mb-8">
                  Welcome to BamBrush,
                  <br />
                  your go-to brand for eco-friendly
                  <br />
                  bamboo toothbrushes.
                </p>
                <p>
                  Our mission is to reduce plastic waste
                  <br />
                  and promote sustainable living
                  <br />
                  by providing high-quality
                  <br />
                  bamboo toothbrushes
                  <br />
                  at affordable prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;