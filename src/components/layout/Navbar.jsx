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
import {
  easeOutExpo,
  easeGeneral,
  duration,
  microTransition,
} from '../../lib/motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 40);
  });

  const links = [
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: duration.entrance, ease: easeOutExpo }}
        className={`
          fixed top-0 left-0 right-0 z-50
          border-white/10
          ${
            isScrolled
              ? 'backdrop-blur-2xl bg-[#05070a]/75 border-b border-brand/15 shadow-lg shadow-brand/5'
              : 'bg-transparent border-opacity-0'
          }
        `}
        style={{ transition: 'background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease' }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-2.5 sm:py-2 flex items-center justify-between">

          {/* Logo */}
          <Link to="hero" smooth duration={500} className="cursor-pointer">
            <img
              src="/logo.png"
              alt="Monwar Hossan Himel"
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                spy
                className="nav-link"
                activeClass="nav-link-active"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-5 text-lg text-gray-300">
            <motion.a href="mailto:monwarhossanhimel@gmail.com" whileHover={{ scale: 1.15, color: '#F4D03F' }} whileTap={{ scale: 0.95 }} transition={microTransition} className="hover:text-[#F4D03F]"><FaEnvelope /></motion.a>
            <motion.a href="https://linkedin.com/in/monwar-hossan-himel" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, color: '#16A085' }} whileTap={{ scale: 0.95 }} transition={microTransition} className="hover:text-[#16A085]"><FaLinkedin /></motion.a>
            <motion.a href="https://github.com/himel2535" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, color: '#F4D03F' }} whileTap={{ scale: 0.95 }} transition={microTransition} className="hover:text-[#F4D03F]"><FaGithub /></motion.a>
            <motion.a href="https://wa.me/8801617721429" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, color: '#16A085' }} whileTap={{ scale: 0.95 }} transition={microTransition} className="hover:text-[#16A085]"><FaWhatsapp /></motion.a>
          </div>

          {/* Mobile Button */}
          <motion.button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            transition={microTransition}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
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
            transition={{ duration: duration.micro, ease: easeGeneral }}
          />,
          <motion.div
            key="mobile-menu-content"
            className="fixed top-20 sm:top-24 right-4 left-4 sm:left-auto sm:right-6 z-50 sm:w-64
              bg-[#0c1f2a]/95 backdrop-blur-2xl
              border border-brand/25
              rounded-2xl shadow-2xl shadow-brand/10 md:hidden"
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
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
                  className="nav-link-mobile"
                  activeClass="nav-link-mobile-active"
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
