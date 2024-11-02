import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import brush from "../Assets/1.webp";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ isLoading }) => {
  const mainTextRef = useRef(null);
  const brushRef = useRef(null);
  const aboutBrushRef = useRef(null);
  const timelineRef = useRef(null);
  const sectionRef = useRef(null);
  const aboutContentRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const animationsRef = useRef([]);

  const cleanupAnimations = () => {
    animationsRef.current.forEach(anim => anim.kill());
    animationsRef.current = [];
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };

  useEffect(() => {
    gsap.set([mainTextRef.current, brushRef.current, aboutBrushRef.current], {
      opacity: 0
    });
    
    gsap.set([aboutContentRef.current, aboutTitleRef.current], {
      opacity: 0,
      y: 30
    });

    timelineRef.current = gsap.timeline({
      paused: true,
      onComplete: () => {
        initScrollAnimations();
      }
    });

    timelineRef.current
      .to(mainTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        from: { y: 50 }
      })
      .to(brushRef.current, {
        opacity: 1,
        rotation: 0,
        x: "-50%",
        y: window.innerWidth < 768 ? "-20px" : "-50%",
        duration: 0.8,
        ease: "power3.out",
        from: { 
          rotation: 10,
          x: "50%",
          y: window.innerWidth < 768 ? "-20px" : "-50%"
        }
      }, "-=0.3");

    const initScrollAnimations = () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const brushScrollTrigger = ScrollTrigger.create({
          trigger: ".about-section",
          start: "top 80%",
          end: "top 20%",
          scrub: false,
          onEnter: () => {
            const tl = gsap.timeline({
              onComplete: () => {
                gsap.to(aboutBrushRef.current, {
                  opacity: 1,
                  rotation: 90,
                  duration: 0.5,
                  ease: "power2.inOut"
                });
              }
            });

            tl.to(brushRef.current, {
              x: "calc(100% - 200px)",
              duration: 0.4,
              ease: "power2.inOut"
            })
            .to(brushRef.current, {
              rotation: 90,
              opacity: 0,
              duration: 0.3,
              ease: "power2.inOut",
              onComplete: () => {
                gsap.set(brushRef.current, { display: 'none' });
              }
            });

            animationsRef.current.push(tl);
          },
          onLeaveBack: () => {
            gsap.set(brushRef.current, { display: 'block' });
            
            const tl = gsap.timeline();
            tl.to(brushRef.current, {
              rotation: 0,
              opacity: 1,
              duration: 0.3,
              ease: "power2.inOut"
            })
            .to(brushRef.current, {
              x: "-50%",
              duration: 0.4,
              ease: "power2.inOut"
            });

            gsap.to(aboutBrushRef.current, {
              opacity: 0,
              duration: 0.2,
              ease: "power2.inOut"
            });

            animationsRef.current.push(tl);
          }
        });

        animationsRef.current.push(brushScrollTrigger);
      });

      mm.add("(max-width: 767px)", () => {
        const mobileBrushTrigger = ScrollTrigger.create({
          trigger: ".about-section",
          start: "top 80%",
          end: "bottom 80%",
          onEnter: () => {
            const tl = gsap.timeline();
            tl.to(brushRef.current, {
              rotation: 0,
              x: "-50%",
              y: "45vh",
              scale: 0.8,
              duration: 0.3,
              ease: "power2.inOut"
            });
            animationsRef.current.push(tl);
          },
          onLeaveBack: () => {
            const tl = gsap.timeline();
            tl.to(brushRef.current, {
              rotation: 0,
              x: "-50%",
              y: "-20px",
              scale: 1,
              opacity: 1,
              duration: 0.3,
              ease: "power2.inOut"
            });
            animationsRef.current.push(tl);
          }
        });

        const mobileHideTrigger = ScrollTrigger.create({
          trigger: ".about-section",
          start: "bottom 80%",
          end: "bottom top",
          onEnter: () => {
            gsap.to(brushRef.current, {
              opacity: 0,
              duration: 0.2,
              onComplete: () => {
                gsap.set(brushRef.current, { display: 'none' });
              }
            });
          },
          onLeaveBack: () => {
            gsap.set(brushRef.current, { display: 'block' });
            gsap.to(brushRef.current, {
              opacity: 1,
              duration: 0.2
            });
          }
        });

        animationsRef.current.push(mobileBrushTrigger, mobileHideTrigger);
      });

      const contentTrigger = ScrollTrigger.create({
        trigger: ".about-section",
        start: "top 60%",
        end: "top 20%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to([aboutTitleRef.current, aboutContentRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out"
          });
          animationsRef.current.push(tl);
        }
      });

      animationsRef.current.push(contentTrigger, mm);
    };

    return () => {
      cleanupAnimations();
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
        className="relative h-screen overflow-hidden"
      >
        <div className="relative z-[1] h-full flex items-center justify-center">
          <h1 ref={mainTextRef} className="text-[15vw] text-black font-bold">
            BAMBRUSH
          </h1>
        </div>

        <img
          ref={brushRef}
          src={brush}
          alt="Bamboo Toothbrush"
          className="fixed top-[55%] md:top-1/2 left-1/2 w-[60%] md:w-[45%] lg:w-[40%] z-50"
        />
      </section>

      <section className="about-section relative min-h-screen bg-[#fafafa] overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 
                ref={aboutTitleRef} 
                className="text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-16"
              >
                ABOUT
                BAMBRUSH
              </h2>
              <div 
                ref={aboutContentRef} 
                className="text-gray-600 max-w-[600px] space-y-8 text-xl sm:text-2xl md:text-3xl leading-relaxed font-medium"
              >
                <p className="mb-8">
                  Welcome to BamBrush, your go-to brand for eco-friendly bamboo toothbrushes.
                </p>
                <p>
                  Our mission is to reduce plastic waste and promote sustainable living by providing high-quality bamboo toothbrushes at affordable prices.
                </p>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                ref={aboutBrushRef}
                src={brush}
                alt="Bamboo Toothbrush"
                className="w-[60%] md:w-[65%] lg:w-[80%] md:transform md:rotate-90"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;