import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import profileImage from '../../assets/profileImage.jpg';
import { microTransition } from '../../lib/motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { href: 'https://github.com/himel2535', icon: FaGithub, external: true, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/monwar-hossan-himel/', icon: FaLinkedin, external: true, label: 'LinkedIn' },
    { href: 'mailto:monwarhossanhimel@gmail.com', icon: FaEnvelope, label: 'Email' },
    { href: 'https://wa.me/8801617721429', icon: FaWhatsapp, external: true, label: 'WhatsApp' },
  ];

  return (
    <footer className="glass-card-soft border-t border-brand/20 pt-12 sm:pt-16 pb-8">
      <div className="section-inner">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          
          {/* Profile Section */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={profileImage} 
                alt="Monwar Hossan Himel" 
                className="w-16 h-16 rounded-full object-cover border-2 border-brand/30 shadow-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Monwar Hossan Himel</h3>
                <p className="text-sm text-gray-400">Junior Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Building scalable full-stack applications with React, Node.js, Express, and MongoDB. Let&apos;s create something amazing together!
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={microTransition}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 border border-gray-700 hover:border-brand rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-brand transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-brand transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-brand transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-brand transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/Himel_Resume_Full-Stack.pdf" download className="text-gray-400 hover:text-brand transition-colors text-sm">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaPhone className="text-brand mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+8801617721429" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +8801617721429
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-brand mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:monwarhossanhimel@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm break-all">
                    monwarhossanhimel@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-brand mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Uttara, Dhaka, Bangladesh
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Monwar Hossan Himel. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <span className="text-red-500">❤️</span> from Bangladesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
