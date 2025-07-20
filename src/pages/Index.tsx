
import React, { useEffect, useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Scene3D from '../components/Scene3D';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Index: React.FC = () => {
  const [show3D, setShow3D] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.title = 'eXpress - Public Speaking and Debating Committee';
  }, []);

  const handle3DComplete = () => {
    setShow3D(false);
    setShowContent(true);
  };

  return (
    <>
      {show3D && <Scene3D onComplete={handle3DComplete} />}
      
      {showContent && (
        <>
          <ParticleBackground />
          <div className="relative min-h-screen flex flex-col items-center justify-center z-10 px-6 pt-20">
            <div className="flex flex-col items-center justify-center text-center max-w-5xl animate-fade-in">
              {/* Logo Section */}
              <div className="transform mb-8">
                <img 
                  src="/lovable-uploads/e3a10d0d-4f1e-49a1-8b38-b48a1cefb127.png" 
                  alt="DJS eXpress" 
                  className="w-64 h-auto mx-auto"
                />
              </div>
              
              {/* Main Heading */}
              <div className="mb-8">
                <h1 className="text-6xl font-bold text-sherlock-gold mb-4 tracking-wider">
                  eXpress
                </h1>
                <h2 className="text-3xl text-sherlock-bronze mb-4">
                  eXpress to inspire
                </h2>
                <p className="text-xl text-sherlock-parchment">
                  Public Speaking and Debating Committee
                </p>
              </div>
              
              {/* Call to Action */}
              <div className="mt-8">
                <Link to="/about" className="sherlock-button group">
                  <span className="font-semibold tracking-wider">ENTER THE WORLD OF MYSTERIES</span>
                  <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              {/* Atmospheric Quote */}
              <div className="mt-12 max-w-2xl">
                <blockquote className="text-sherlock-parchment/90 text-lg italic font-light leading-relaxed">
                  "When you have eliminated the impossible, whatever remains, however improbable, must be the truth."
                </blockquote>
                <cite className="text-sherlock-gold text-sm mt-2 block">— Sherlock Holmes</cite>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
