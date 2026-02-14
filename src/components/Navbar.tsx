import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    //{ title: "Upcoming Events", path: "/upcoming-events" },
    { title: "Previous Events", path: "/previous-events" },
    { title: "eXpresso", path: "/expresso" },
    { title: "Team", path: "/team" },
    { title: "Certificates", path: "/certificates" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "py-3 bg-express-dark/80 backdrop-blur"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-center items-center">
          {/* Desktop menu */}
          <nav className="flex justify-center space-x-12 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-express-purple" : "text-white"}`
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
      <div className="md:hidden h-0">
        {/* Sticky hamburger button */}
        <button
          className="fixed top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-3 z-50 text-foreground border border-border shadow-lg"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col z-40 transition-all duration-300 ease-in-out overflow-y-auto ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-start min-h-screen py-20 px-4">
            <Logo size="medium" showText={true} />
            <div className="flex flex-col items-center space-y-4 mt-8 w-full max-w-sm">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link text-lg px-6 py-3 rounded-lg transition-all duration-200 w-full text-center ${
                      isActive
                        ? "text-primary bg-primary/10 border border-primary/20"
                        : "text-foreground hover:bg-muted/50"
                    }`
                  }
                  onClick={closeMenu}
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
