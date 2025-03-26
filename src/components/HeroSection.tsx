import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
const HeroSection = () => {
  return <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              Software Engineer
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            KAVINDU MADHUSANKA
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Crafting digital experiences through innovative full-stack
            development and creative problem-solving.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              View My Work
              <ArrowDownIcon size={18} />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-50 transition-all border-2 border-blue-600 transform hover:scale-105">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownIcon size={24} className="text-blue-600" />
      </div>
    </section>;
};
export default HeroSection;