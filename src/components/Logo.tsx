
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import { useIsMobile } from '../hooks/use-mobile';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', showText = true }) => {
  const isMobile = useIsMobile();
  
  const sizes = {
    small: { logo: isMobile ? 60 : 48, text: 'text-2xl' },
    medium: { logo: isMobile ? 90 : 86, text: isMobile ? 'text-3xl' : 'text-4xl' },
    large: { logo: isMobile ? 150 : 200, text: isMobile ? 'text-5xl' : 'text-6xl' }
  };

  return (
    <Link to="/" className="flex flex-col items-center no-underline">
      <div className={`${showText ? (isMobile ? '-mb-2' : '-mb-8') + ' animate-float' : ''}`}>
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
          <p className={`text-white ${isMobile ? 'text-xs' : 'text-sm'} tracking-wider mt-1 opacity-90`}>
            PUBLIC SPEAKING AND DEBATING COMMITTEE
          </p>
        </>
      )}
    </Link>
  );
};

export default Logo;
