import React from 'react';
import Button from "./button";

const Hero = () => {
  return (
    <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-r from-green-50/50 via-teal-50 to-green-50/50 dark:from-gray-400 dark:via-gray-600 dark:to-gray-500">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-800 dark:text-gray-200 sm:text-5xl md:text-6xl lg:text-7xl">
        “Empowering Talent for a Brighter Future”
      </h1>
      <h2 className="mx-auto mt-12 max-w-xl text-lg leading-7 text-gray-700 dark:text-gray-300">
        Our innovative HR solutions are designed to enhance talent, promote a positive workplace culture, and support each employee’s journey toward personal and professional success. Discover how we can help you build a thriving, engaged workforce ready to take on the future.
      </h2>
      <Button />
    </div>
  );
};

export default Hero;
