// import React from 'react'

// const Hero = () => {
//   return (
//     <section className='bg-hero h-screen'>
//       <div className='container'>hero section</div>
//     </section>
//   )
// }

// export default Hero

// components/Hero.js
'use client'; 
import React from 'react';

const Hero = () => {
  return (
    <section className='bg-hero h-screen flex items-center justify-center h-screen'>
      <div className='container mx-auto text-center'>
        <h1 className="text-4xl font-bold text-white mb-4">Hero Section</h1>
        <p className="text-lg text-white">Your hero section content goes here.</p>
      </div>
    </section>
  );
};

export default Hero;
