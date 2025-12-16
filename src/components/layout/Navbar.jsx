import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'About', to: 'about' },
    { name: 'Activities', to: 'activities' },
    { name: 'Contact', to: 'contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md py-1 shadow-lg bg-[#0a1f2e]/80' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="cursor-pointer">
          <Link to="hero" smooth={true} duration={500}>
            <img 
              src="/logo.png" 
              alt="Monwar Hossan Himel" 
              className="h-16 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white cursor-pointer text-sm font-medium transition-colors"
              activeClass="text-white font-semibold"
              spy={true}
              offset={-70}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side icons - Desktop */}
        <div className="hidden md:flex items-center space-x-5 text-xl">
          
          {/* Email */}
          <a 
            href="mailto:monwarhossanhimel@gmail.com"
            className="hover:text-primary transition-colors"
          >
            <FaEnvelope />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/monwar-hossan-himel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin />
          </a>

            <a
              href="https://github.com/himel2535"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaGithub />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/+8801782255880"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaWhatsapp />
            </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-md ${
          isMobileMenuOpen ? 'border-t border-white/10' : ''
        }`}
      >
        <div className="container mx-auto px-6 py-6 space-y-4">
          {/* Mobile Nav Links */}
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="block text-gray-300 hover:text-white cursor-pointer text-base font-medium transition-colors py-2"
              activeClass="text-white font-semibold"
              spy={true}
              offset={-70}
              onClick={closeMobileMenu}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex items-center space-x-6 pt-4 border-t border-white/10">
            <a 
              href="mailto:monwarhossanhimel@gmail.com"
              className="hover:text-primary transition-colors text-xl"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/monwar-hossan-himel/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/himel2535"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/+8801782255880"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors text-xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
