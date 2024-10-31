import React, { useEffect } from 'react';
import { MapPin, Mail, Phone, Globe, MessageSquare } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideIn');
            entry.target.classList.remove('opacity-0', '-translate-x-20');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-green-50">
        <div className="md:pt-24 pt-16 pb-16">
          <div className="flex items-center justify-center mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 text-center mb-3 animate-fadeIn">
            CONTACT US
          </h2>
          <div className="w-32 h-1 bg-green-500 mx-auto rounded-full animate-scaleIn" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-2 md:px-8">
          <div className="space-y-4">
            <div className="animate-on-scroll opacity-0 -translate-x-20 transition-all duration-700 delay-[100ms]">
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email:</h3>
                    <a href="mailto:abhinavdasv@bambrush.co.in" className="text-green-600 hover:text-green-700">
                      abhinavdasv@bambrush.co.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 -translate-x-20 transition-all duration-700 delay-[200ms]">
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">WhatsApp:</h3>
                    <a href="tel:9497349844" className="text-green-600 hover:text-green-700">
                      949 734 9844
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 -translate-x-20 transition-all duration-700 delay-[300ms]">
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone:</h3>
                    <a href="tel:8921025070" className="text-green-600 hover:text-green-700">
                      892 102 5070
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 -translate-x-20 transition-all duration-700 delay-[400ms]">
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Website:</h3>
                    <a href="https://www.bambrush.co.in" 
                       className="text-green-600 hover:text-green-700"
                       target="_blank" 
                       rel="noopener noreferrer">
                      www.bambrush.co.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 -translate-x-20 transition-all duration-700 delay-[500ms]">
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Address:</h3>
                    <p className="text-green-600">
                      bambrush, Rosscote Ln, Nandavanam,<br />
                      Vazhuthacaud Thiruvanathapuram, Kerala<br />
                      695033
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:pl-8 animate-on-scroll opacity-0 -translate-x-20 transition-all duration-700">
            <h2 className="text-2xl font-bold text-green-600 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="transform transition-all duration-300 hover:-translate-y-1">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-shadow duration-300 hover:shadow-md"
                  required
                />
              </div>
              
              <div className="transform transition-all duration-300 hover:-translate-y-1">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-shadow duration-300 hover:shadow-md"
                  required
                />
              </div>
              
              <div className="transform transition-all duration-300 hover:-translate-y-1">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-shadow duration-300 hover:shadow-md"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:scale-[1.02] hover:shadow-lg active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;