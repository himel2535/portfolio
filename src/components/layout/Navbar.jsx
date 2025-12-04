import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: 'Work', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Blog', to: 'blog' },
    { name: 'FAQ', to: 'faq' },
    { name: 'Proposal', to: 'contact' },
    { name: 'Contacts', to: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-serif font-bold tracking-tighter cursor-pointer">
          <Link to="hero" smooth={true} duration={500}>
            Monwar Hossan Himel
          </Link>
        </div>

        {/* Nav links */}
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

        {/* Right side icons */}
        <div className="flex items-center space-x-5 text-xl">
          
          {/* Email - opens Gmail composer */}
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

          {/* GitHub */}
          <a
            href="https://github.com/himel2535"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
