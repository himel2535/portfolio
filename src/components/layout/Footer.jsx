import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import profileImage from '../../assets/profileImage.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#112240]/50 backdrop-blur-sm border-t border-cyan-500/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Profile Section */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={profileImage} 
                alt="Monwar Hossan Himel" 
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30 shadow-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Monwar Hossan Himel</h3>
                <p className="text-sm text-gray-400">MERN Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Passionate about building beautiful, functional web applications with clean code and modern technologies. Let's create something amazing together!
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://github.com/himel2535"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 border border-gray-700 hover:border-purple-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/monwar-hossan-himel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 border border-gray-700 hover:border-purple-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="mailto:monwarhossanhimel@gmail.com"
                className="w-10 h-10 bg-gray-800 border border-gray-700 hover:border-purple-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaEnvelope className="text-lg" />
              </a>
              <a
                href="https://wa.me/+8801782255880"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 border border-gray-700 hover:border-purple-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/resume.pdf" download className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
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
                <FaPhone className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+8801782255880" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +880 1782255880
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:monwarhossanhimel@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm break-all">
                    monwarhossanhimel@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Dhaka, Kishoreganj
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
