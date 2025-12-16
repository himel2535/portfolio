import React from 'react';
import { motion } from 'framer-motion';

const UnderwaterBackground = React.memo(() => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: '#0a1f2e' }}>
      
      {/* Main Large Blue Glow - Right Side */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(30, 144, 255, 0.35) 0%, rgba(30, 144, 255, 0.2) 30%, rgba(14, 165, 233, 0.1) 50%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform, opacity',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 10, // Slower duration for less frequent paint updates
          repeat: Infinity,
          ease: "linear" // Linear easing is slightly cheaper than easeInOut
        }}
      />

      {/* Secondary Glow */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(14, 165, 233, 0.12) 40%, transparent 70%)',
          filter: 'blur(60px)',
          willChange: 'transform, opacity',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Twinkling Stars - Reduced count and optimized */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-300"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: 'opacity, transform',
          }}
          animate={{
            opacity: [0.2, 1, 0.2], // Avoid full 0 opacity to maybe keep layer active
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

export default UnderwaterBackground;
