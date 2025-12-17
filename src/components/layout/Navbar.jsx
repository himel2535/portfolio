import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
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
        isScrolled ? 'backdrop-blur-xl py-1 shadow-lg bg-[#0a1f2e]/70 border-b border-white/5' : 'bg-transparent py-6'
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
              className="h-12 w-auto object-contain"
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop for closing menu on outside click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 md:hidden backdrop-blur-[2px]"
              onClick={closeMobileMenu}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-24 right-6 w-64 bg-[#112240]/80 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden md:hidden z-50"
            >
              <div className="p-4 space-y-2">
                {/* Mobile Nav Links */}
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="block text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer text-sm font-medium transition-colors py-3 px-4 rounded-lg"
                    activeClass="text-white font-semibold bg-white/10"
                    spy={true}
                    offset={-70}
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Social Icons */}
                <div className="flex justify-center items-center space-x-6 pt-4 mt-2 border-t border-cyan-500/30">
                  <a 
                    href="mailto:monwarhossanhimel@gmail.com"
                    className="hover:text-cyan-400 transition-colors text-lg text-gray-400"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/monwar-hossan-himel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors text-lg text-gray-400"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/himel2535"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors text-lg text-gray-400"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://wa.me/+8801782255880"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors text-lg text-gray-400"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
