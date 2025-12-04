import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImage from '../../assets/profileImage.jpg'; 



const Banner = () => {
  const titleText = "Full-Stack Developer";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">

      
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-2">
              Hello<span className="text-primary text-6xl">.</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-medium text-gray-300 mb-2">
              I'm Himel
            </h3>
            
            {/* Typewriter Effect for Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight h-[1.2em] overflow-hidden">
              {titleText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.05, delay: index * 0.05 + 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            
            <div className="flex flex-wrap gap-4">
              <Link to="contact" smooth={true} duration={500}>
                <button className="bg-primary hover:bg-accent text-white font-medium py-3 px-8 rounded-sm transition-all duration-300 shadow-lg shadow-primary/25 cursor-pointer">
                  Got a project?
                </button>
              </Link>
              <a 
                href="/resume.pdf" 
                download 
                className="border border-white/20 hover:border-white text-white font-medium py-3 px-8 rounded-sm transition-all duration-300 cursor-pointer bg-transparent inline-block"
              >
                My resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="relative flex justify-center z-10">
           {/* Refined Circular Glow/Ring Effect - Orange/Red */}
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border-[2px] border-primary/30 bg-gradient-to-tr from-primary/10 to-transparent blur-sm"></div>
           </div>
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[320px] h-[320px] md:w-[460px] md:h-[460px] rounded-full border-[1px] border-primary/10"></div>
           </div>

           {/* Stronger Glow behind image */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform scale-90"
           ></motion.div>
           
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-white/5 shadow-2xl z-20"
           >
             <img 
               src={profileImage} 
               alt="Profile" 
               className="w-full h-full object-cover"
             />
           </motion.div>

            
        </div>
      </div>
    </section>
  );
};

export default Banner;
