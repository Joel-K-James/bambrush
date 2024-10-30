import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Shield, CreditCard, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ Icon, title, description }) => (
  <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
    <div className="flex items-start space-x-4">
      <div className="p-2 rounded-full bg-green-800/10 group-hover:bg-green-800/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-green-800" />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-green-800">{title}</h2>
        <p className="text-gray-700 mt-2 break-words">{description}</p>
      </div>
    </div>
  </div>
);

const Why = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const features = gsap.utils.toArray('.feature-card');
    
    features.forEach((feature) => {
      gsap.fromTo(feature, 
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: feature,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play reverse play reverse",
            scrub: 1
          }
        }
      );
    });

    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play reverse play reverse",
          scrub: 1
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#f5f5dc_0%,#93c47d_100%)] p-4 sm:p-8">
      <div 
        ref={containerRef}
        className="w-full max-w-3xl mx-auto p-4 sm:p-8 rounded-2xl backdrop-blur-md bg-white/20 shadow-xl border border-white/20"
      >
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center mb-6 sm:mb-8">
            <h1 ref={titleRef} className="text-4xl sm:text-5xl font-bold text-green-800 tracking-wider">
              <span className="sm:hidden inline-block">
                WHY
                <br />
                BAMBRUSH?
              </span>
              <span className="hidden sm:inline-block">
                WHY&nbsp;BAMBRUSH?
              </span>
            </h1>
          </div>
          
          <div className="grid gap-4 sm:gap-6">
            <div className="feature-card">
              <FeatureCard
                Icon={Leaf}
                title="Sustainability"
                description="Our toothbrushes are made from sustainably sourced bamboo, reducing the use of plastic."
              />
            </div>
            
            <div className="feature-card">
              <FeatureCard
                Icon={Shield}
                title="Quality"
                description="High-quality materials ensure a comfortable and effective brushing experience."
              />
            </div>
            
            <div className="feature-card">
              <FeatureCard
                Icon={CreditCard}
                title="Affordability"
                description="Competitive pricing for both individual and bulk purchases."
              />
            </div>
            
            <div className="feature-card">
              <FeatureCard
                Icon={Users}
                title="Community"
                description="By choosing BamBrush, you are contributing to a greener planet."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;