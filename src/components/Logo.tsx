
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', showText = true }) => {
  const sizes = {
    small: { logo: 48, text: 'text-2xl' },
    medium: { logo: 86, text: 'text-4xl' },
    large: { logo: 200, text: 'text-6xl' } // Significantly increased from 160 to 200
  };

  return (
    <Link to="/" className="flex flex-col items-center no-underline">
      <div className={`${showText ? '-mb-8 animate-float' : ''}`}>
        <img 
          src={logo}
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
