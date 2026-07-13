import React from 'react';
import { motion } from 'framer-motion';
import { easeGeneral } from '../../lib/motion';
import bgAtmosphere from '../../assets/bg-atmosphere.png';
import keyboardNeon from '../../assets/keyboard-neon.png';

const UnderwaterBackground = React.memo(() => {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: '#05070a' }}
    >
      {/* Primary atmosphere — attached dark teal / smoke background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgAtmosphere})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden
      />

      {/* Dark vignette so content stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 70% 20%, transparent 0%, rgba(5, 7, 10, 0.35) 45%, rgba(5, 7, 10, 0.72) 100%)',
        }}
        aria-hidden
      />

      {/* Soft keyboard wash (photo 3) — left side only */}
      <div
        className="absolute -top-8 -left-20 w-[min(48vw,520px)] h-[min(38vh,400px)] opacity-[0.14] pointer-events-none select-none"
        style={{
          backgroundImage: `url(${keyboardNeon})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px) saturate(1.2)',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Cyan highlight matching atmosphere (top-right) */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[620px] h-[620px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 120, 140, 0.28) 0%, rgba(0, 77, 90, 0.12) 40%, transparent 70%)',
          filter: 'blur(70px)',
          willChange: 'opacity, transform',
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.55, 0.8, 0.55],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: easeGeneral,
        }}
      />

      {/* Subtle green brand accent */}
      <motion.div
        className="absolute bottom-[10%] left-[15%] w-[420px] h-[420px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 176, 84, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          willChange: 'opacity',
        }}
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: easeGeneral }}
      />
    </div>
  );
});

export default UnderwaterBackground;
