
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Upcoming Events', path: '/upcoming-events' },
    { title: 'Team', path: '/team' },
    { title: 'eXpresso', path: '/expresso' }
  ];

  return (
    <>
      {/* Desktop Header */}
      <header 
        className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? 'py-3 bg-express-dark/80 backdrop-blur' : 'py-6 bg-transparent'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Desktop menu */}
          <nav className="flex justify-center space-x-12 items-center">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'text-express-purple' : 'text-white'}`
                }
                onClick={closeMenu}
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Header - Only hamburger is sticky */}
      <div className="md:hidden">
        {/* Sticky hamburger button */}
        <button 
          className="fixed top-4 right-4 bg-express-dark/80 backdrop-blur rounded-full p-2 z-50 text-white"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Non-sticky mobile header shown at top of page */}
        <header className="w-full py-4 px-6 flex items-center justify-start">
          <Logo size="small" showText={false} />
        </header>

        {/* Mobile menu overlay */}
        <div 
          className={`fixed inset-0 bg-express-dark/95 flex flex-col items-center justify-center space-y-8 z-40 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <Logo size="medium" showText={true} />
          {navLinks.map((link) => (
            <NavLink 
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `nav-link text-lg ${isActive ? 'text-express-purple' : 'text-white'}`
              }
              onClick={closeMenu}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
