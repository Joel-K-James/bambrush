// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-600">Get in touch to learn more about BAMBRUSH.</p>
        <form className="mt-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          ></textarea>
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
