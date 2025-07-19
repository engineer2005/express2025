
import React, { useEffect } from 'react';
import LondonStreetScene from '../components/LondonStreetScene';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = 'eXpress - Public Speaking and Debating Committee';
  }, []);

  return (
    <>
      <LondonStreetScene />
      <div className="relative min-h-screen flex flex-col items-center justify-center z-10 px-6">
        {/* Header with Logo and Title */}
        <div className="absolute top-8 left-8 flex items-center gap-4 z-20">
          <img 
            src="/lovable-uploads/e3a10d0d-4f1e-49a1-8b38-b48a1cefb127.png" 
            alt="eXpress Logo" 
            className="w-16 h-16 object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-sherlock-gold font-serif text-4xl font-bold tracking-wide">
              eXpress
            </h1>
            <p className="text-sherlock-parchment text-sm tracking-wider opacity-90 font-light">
              Public Speaking & Debating Committee
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl animate-fade-in mt-16">
          {/* Hero Title */}
          <div className="mb-12">
            <h2 className="text-6xl font-serif font-bold text-sherlock-gold mb-4 tracking-wide">
              The Art of Eloquence
            </h2>
            <p className="text-xl text-sherlock-parchment/80 font-light tracking-wider">
              Where words become weapons and silence speaks volumes
            </p>
          </div>

          {/* Decorative Victorian Element */}
          <div className="mb-12">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-sherlock-gold to-transparent"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-sherlock-bronze to-transparent mt-2"></div>
          </div>
          
          {/* Call to Action */}
          <div className="mb-12">
            <Link to="/about" className="sherlock-button group">
              <span className="font-semibold tracking-wider">ENTER THE WORLD OF MYSTERIES</span>
              <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          {/* Atmospheric Quote */}
          <div className="max-w-2xl">
            <blockquote className="text-sherlock-parchment/90 text-xl italic font-light leading-relaxed">
              "The game is afoot! Step into the shadows of Baker Street where every word carries weight and every debate unveils truth."
            </blockquote>
            <cite className="text-sherlock-gold text-sm mt-4 block font-light tracking-wide">
              — Inspired by Sir Arthur Conan Doyle
            </cite>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
