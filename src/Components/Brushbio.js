import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import soilGrassImg from '../Assets/soil.webp';
import brushImg from '../Assets/1.webp';
import { Leaf } from 'lucide-react';

const Brushbio = () => {
  const bambooRef1 = useRef(null);
  const bambooRef2 = useRef(null);
  const bambooRef3 = useRef(null);

  useEffect(() => {
    gsap.set([bambooRef1.current, bambooRef2.current, bambooRef3.current], {
      opacity: 1,
      rotate: -30
    });

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2
    });

    tl.to(bambooRef1.current, {
      y: 40,
      opacity: 0.7,
      duration: 2,
      ease: "power1.inOut"
    })
    .to(bambooRef2.current, {
      y: 80,
      opacity: 0.4,
      duration: 2,
      ease: "power1.inOut"
    })
    .to(bambooRef3.current, {
      y: 120,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur rounded-xl shadow-2xl overflow-hidden border border-green-100">
          <div className="p-6 border-b border-green-100 bg-green-50">
            <h2 className="text-3xl font-semibold text-green-800 flex items-center gap-3">
              <Leaf className="w-8 h-8 text-green-600" />
              Natural Decomposition Process
            </h2>
          </div>
          <div className="p-6">
            <div className="relative w-full rounded-xl overflow-hidden">
              <div className="aspect-[16/9] md:aspect-[21/9] relative">
                <img 
                  src={soilGrassImg} 
                  alt="Natural Environment"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 w-full h-full">
                  <div ref={bambooRef1} className="absolute left-[20%] bottom-[40%] w-[25%] md:w-[20%] max-w-xs">
                    <img 
                      src={brushImg} 
                      alt="Bamboo Brush Initial"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div ref={bambooRef2} className="absolute left-[45%] bottom-[30%] w-[25%] md:w-[20%] max-w-xs">
                    <img 
                      src={brushImg} 
                      alt="Bamboo Brush Decomposing"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div ref={bambooRef3} className="absolute left-[70%] bottom-[20%] w-[25%] md:w-[20%] max-w-xs">
                    <img 
                      src={brushImg} 
                      alt="Bamboo Brush Final Stage"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Stage 1</h3>
                <p className="text-green-700">Fresh bamboo product begins its journey back to nature</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Stage 2</h3>
                <p className="text-green-700">Natural decomposition process begins after 22 days</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Stage 3</h3>
                <p className="text-green-700">Complete return to nature within 48 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brushbio;