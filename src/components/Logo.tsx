
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', showText = true }) => {
  const sizes = {
    small: { logo: 48, text: 'text-2xl' },
    medium: { logo: 86, text: 'text-4xl' },
    large: { logo: 160, text: 'text-6xl' } // Increased from 120 to 160
  };

  return (
    <Link to="/" className="flex flex-col items-center no-underline">
      <div className={`mb-2 ${showText ? 'animate-float' : ''}`}>
        <img 
          src="/public/lovable-uploads/a5ed345f-50ed-4e84-9b02-9aecf1c7c76c.png" 
          alt="DJS Express Logo" 
          width={sizes[size].logo} 
          height={sizes[size].logo}
          className="text-express-purple" 
        />
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
