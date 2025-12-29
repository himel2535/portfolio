'use client';

import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaWhatsapp,
} from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 40);
  });

  const links = [
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'About', to: 'about' },
    { name: 'Activities', to: 'activities' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
           border-white/10
          ${
            isScrolled
              ? 'backdrop-blur-2xl bg-white/5 shadow-lg shadow-black/10'
              : 'bg-transparent border-opacity-0'
          }
        `}
      >
        <div className="container mx-auto px-6 py-2 flex items-center justify-between">

          {/* Logo */}
          <Link to="hero" smooth duration={500} className="cursor-pointer">
            <img
              src="/logo.png"
              alt="Monwar Hossan Himel"
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                spy
                className="text-gray-300 hover:text-white text-sm font-medium cursor-pointer transition"
                activeClass="text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-5 text-lg text-gray-300">
            <a href="mailto:monwarhossanhimel@gmail.com"><FaEnvelope /></a>
            <a href="https://linkedin.com/in/monwar-hossan-himel" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/himel2535" target="_blank"><FaGithub /></a>
            <a href="https://wa.me/8801782255880" target="_blank"><FaWhatsapp /></a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && [
          <motion.div
            key="mobile-menu-backdrop"
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />,
          <motion.div
            key="mobile-menu-content"
            className="fixed top-24 right-6 z-50 w-64
              bg-white/10 backdrop-blur-2xl
              border border-white/20
              rounded-2xl shadow-2xl md:hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <div className="p-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  spy
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-200 hover:bg-white/10 cursor-pointer"
                  activeClass="bg-white/10 text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        ]}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
