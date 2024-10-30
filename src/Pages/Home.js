import React, { useState } from 'react';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import Loader from '../Components/Loader';

import Features from '../Components/Features';
import Cycle from '../Components/Cycle';
import Why from '../Components/Why';




function Home() {
  const [isLoading, setIsLoading] = useState(true);
 
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  
  return (
    <>
      <Loader onLoadingComplete={handleLoadingComplete} />
      <Navbar isLoading={isLoading} />
      <Hero isLoading={isLoading} />
      <Features />
      <Cycle />
      <Why />

    </>
  );
}

export default Home;