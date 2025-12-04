import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="work" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900/20 to-dark pt-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
              </div>
            </div>
            <span className="text-gray-400">Anders Antonsen</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 max-w-4xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Visual designer who build a useful and eye pleasing design
          </h1>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary btn-lg rounded-full px-8 text-lg normal-case"
          >
            Get in touch now
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <span className="text-sm">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
