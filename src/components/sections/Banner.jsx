import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImage from '../../assets/profileImage.jpg';

const Banner = () => {
  const titleText = "Full-Stack Developer";
  const nameText = "Monwar Hossan Himel,";

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.5
      } 
    }
  };

  return (
    <section id="hero" className="min-h-[85vh] flex items-center justify-center px-6 relative overflow-hidden pt-32 md:pt-20">
      
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* I AM label */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-cyan-400 text-lg md:text-sm font-medium mb-4 tracking-wider uppercase"
            >
              I AM
            </motion.p>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
            >
              {nameText.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            
            <motion.h1 
              className="text-3xl md:text-4xl font-semibold mb-6"
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
            >
              {titleText.split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              <span className="text-cyan-400">web development</span> expertise. It serves as a powerful tool to demonstrate technical capabilities.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              <Link to="about" smooth={true} duration={500}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-cyan-500/30 hover:border-cyan-400 text-white font-medium py-3 px-5 md:px-8 rounded-full transition-all duration-300 cursor-pointer inline-flex items-center gap-2 hover:bg-cyan-500/10 text-sm md:text-base"
                >
                  More About Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </Link>

              <a 
                href="/Full-Stack-Resume.pdf" 
                download
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-cyan-500/30 hover:border-cyan-400 text-white font-medium py-3 px-5 md:px-8 rounded-full transition-all duration-300 cursor-pointer inline-flex items-center gap-2 hover:bg-cyan-500/10 text-sm md:text-base"
                >
                  Download CV
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </motion.button>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-gray-400 text-sm mb-4">Find me on</p>
              <div className="flex justify-center md:justify-start gap-4">
                {/* Email */}
                <a 
                  href="mailto:monwarhossanhimel@gmail.com"
                  className="w-10 h-10 border border-white/20 hover:border-cyan-400 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/himel2535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 hover:border-cyan-400 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/monwar-hossan-himel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 hover:border-cyan-400 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/+8801782255880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 hover:border-cyan-400 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Content with Large Text and Circular Badge */}
        <div className="flex justify-center items-center md:justify-end relative">
          
          <div className="relative">
            {/* Large "Web Developer" Text Behind Profile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[200%]"
              style={{ zIndex: 0 }}
            >
              <h1 className="text-[60px] md:text-[100px] font-bold leading-none whitespace-nowrap" style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
                userSelect: 'none',
              }}>
                Web <br /> Developer
              </h1>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <img 
                  src={profileImage} 
                  alt="Monwar Hossan Himel" 
                  className="w-full h-full object-cover"
                  style={{ clipPath: 'none' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Banner;
