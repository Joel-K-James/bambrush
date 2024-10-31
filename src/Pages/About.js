import React, { useEffect } from 'react';
import { Sprout, Recycle, Users, Heart, Target, Eye } from 'lucide-react';
import MissionImage from "../Assets/DSC01636.webp";
import ProblemImage from "../Assets/DSC01711.webp";
import VisionImage from "../Assets/5.webp";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Brushbio from '../Components/Brushbio';

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideIn');
            entry.target.classList.remove('opacity-0', '-translate-x-20');
          } else {
            entry.target.classList.remove('animate-slideIn');
            entry.target.classList.add('opacity-0', '-translate-x-20');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
};

const Card = ({ icon: Icon, title, content }) => (
  <div className="scroll-animate opacity-0 -translate-x-20 transition-all duration-700 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 mx-auto max-w-md w-full">
    <Icon className="w-12 h-12 mb-4 text-green-700" />
    <h3 className="text-xl font-bold mb-3 text-green-800">{title}</h3>
    <p className="text-green-700 leading-relaxed">{content}</p>
  </div>
);

const ImageSection = ({ image, alt, reverse, children }) => (
  <div className={`scroll-animate opacity-0 -translate-x-20 transition-all duration-700 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 w-full max-w-6xl mx-auto px-6 md:px-8`}>
    <div className="w-full md:w-1/2">
      <div className="block md:hidden">
        <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-xl">
          <img 
            src={image} 
            alt={alt} 
            className="absolute w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <div className="hidden md:block">
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-[400px] object-cover rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
        />
      </div>
    </div>
    <div className="w-full md:w-1/2 space-y-4">
      {children}
    </div>
  </div>
);

const About = () => {
  useScrollAnimation();

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-beige-300 to-green-50">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-beige-300 via-green-100 to-beige-300 relative overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center scroll-animate opacity-0 -translate-x-20 transition-all duration-700">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-800 break-words">
              About BamBrush
            </h1>
            <p className="text-xl md:text-2xl text-green-700 leading-relaxed px-4 sm:px-6 md:px-8">
              Leading the way in eco-friendly oral care solutions for a sustainable future
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/50">
        <div className="w-full">
          <ImageSection 
            image={MissionImage}
            alt="BamBrush Sustainable Products"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800">Our Mission</h2>
              <p className="text-lg text-green-700 leading-relaxed">
                At BamBrush, we're revolutionizing the oral care industry with sustainable alternatives 
                to plastic products. Our mission extends beyond just providing eco-friendly products – 
                we're creating a movement towards sustainable business practices worldwide.
              </p>
            </div>
          </ImageSection>
        </div>
      </section>

      <section className="py-20 bg-beige-300/20">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-800 scroll-animate opacity-0 -translate-x-20 transition-all duration-700">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card
              icon={Sprout}
              title="Sustainability First"
              content="Our commitment to sustainability drives every decision. From sourcing bamboo in Vietnam to our packaging choices, we ensure minimal environmental impact while maintaining affordability."
            />
            <Card
              icon={Recycle}
              title="Environmental Impact"
              content="Each bamboo product represents our dedication to reducing plastic waste. We're proud to help businesses reduce their environmental footprint while inspiring industry-wide change."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/50">
        <div className="w-full">
          <ImageSection 
            image={ProblemImage}
            alt="Plastic Pollution Impact"
            reverse
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800">The Plastic Problem</h2>
              <p className="text-lg text-green-700 leading-relaxed">
                With over 264 million plastic toothbrushes discarded yearly in the UK alone, 
                the environmental impact is staggering. We're changing this narrative by providing 
                sustainable alternatives that don't compromise on quality or affordability.
              </p>
            </div>
          </ImageSection>
        </div>
      </section>

      <section className="py-20 bg-beige-300/20">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-800 scroll-animate opacity-0 -translate-x-20 transition-all duration-700">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon={Users}
              title="Hotels & Resorts"
              content="We partner with hospitality leaders who are committed to reducing their environmental impact while providing premium experiences to their guests."
            />
            <Card
              icon={Heart}
              title="Eco-Retreats"
              content="Supporting eco-conscious destinations with products that align with their sustainable values and enhance their green initiatives."
            />
            <Card
              icon={Target}
              title="Local Businesses"
              content="Empowering local establishments to make a positive environmental impact through accessible sustainable solutions."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/50">
        <div className="w-full">
          <ImageSection 
            image={VisionImage}
            alt="BamBrush Vision"
          >
            <div className="space-y-6">
              <Eye className="w-16 h-16 text-green-700" />
              <h2 className="text-3xl font-bold text-green-800">Our Vision</h2>
              <p className="text-lg text-green-700 leading-relaxed">
                We envision a future where sustainable products are the norm, not the exception. 
                Through innovation and education, we're working to create a world where businesses 
                and consumers naturally choose eco-friendly alternatives, making plastic pollution 
                a thing of the past.
              </p>
            </div>
          </ImageSection>
        </div>
      </section>
    </div>
    <Brushbio />
    <Footer />
    </>
  );
};

export default About;