
import React, { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Index: React.FC = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    document.title = 'eXpress - Public Speaking and Debating Committee';
  }, []);

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen flex flex-col items-center justify-center z-10 px-4 py-0">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl">
          <div className="transform">
            <Logo size="large" showText={true} />
          </div>
          
          <div className="mt-4">
            <Link to="/about" className="express-button group">
              <span>LEARN MORE</span>
              <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
