import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Features from '../Components/Features';
import Contact from './Contact';

function Home() {
  return (
    <div className="font-sans">
 
    <Hero />
    <Features />
    <Contact />
</div>
  )
}

export default Home