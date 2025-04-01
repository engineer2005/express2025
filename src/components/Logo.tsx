
import React from 'react';
import { Mic } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', showText = true }) => {
  const sizes = {
    small: { icon: 36, text: 'text-2xl' },
    medium: { icon: 64, text: 'text-4xl' },
    large: { icon: 86, text: 'text-6xl' }
  };

  return (
    <Link to="/" className="flex flex-col items-center no-underline">
      <div className={`text-express-purple mb-2 ${showText ? 'animate-float' : ''}`}>
        <Mic size={sizes[size].icon} strokeWidth={1.5} />
      </div>
      {showText && (
        <>
          <h1 className={`text-express-purple font-bold tracking-wider ${sizes[size].text}`}>
            eXpress
          </h1>
          <p className="text-white text-sm tracking-wider mt-1 opacity-90">
            PUBLIC SPEAKING AND DEBATING COMMITTEE
          </p>
        </>
      )}
    </Link>
  );
};

export default Logo;
