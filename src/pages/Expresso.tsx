
import React, { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { ExternalLink } from 'lucide-react';

const Expresso: React.FC = () => {
  useEffect(() => {
    document.title = 'eXpresso - express';
  }, []);

  const handleRedirect = () => {
    window.open("https://drive.google.com/drive/folders/1KjIO9516cGAybD3FmYcm9z3Nqw_G0TdN", "_blank");
  };

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen flex flex-col items-center justify-center z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-express-purple mb-6 md:mb-8 font-playfair">
            eXpresso
          </h1>
          
          <p className="text-base md:text-xl text-center text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12">
            Our literary magazine featuring articles, stories, poems, and insights about public speaking, debating, and communication skills.
          </p>
          
          <button 
            onClick={handleRedirect}
            className="express-button group text-base md:text-lg px-6 py-3 md:px-10 md:py-4"
          >
            <span>VIEW eXpresso</span>
            <ExternalLink size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Expresso;
