import React from 'react';
import { motion } from 'framer-motion';
import {
  viewportOnce,
  staggerContainer,
  fadeUpItem,
  microTransition,
  easeOutExpo,
  duration,
} from '../../lib/motion';

const Certifications = () => {
  const certifications = [
    {
      title: 'MERN Stack Development',
      issuer: 'Programming Hero',
    },
    {
      title: 'Prompt Engineering',
      issuer: 'AI Academy Bangladesh',
    },
    {
      title: 'Python Django Fullstack Development',
      issuer: 'Bongodev',
    },
  ];

  return (
    <section id="certifications" className="section-shell bg-transparent">
      <div className="section-inner">
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16 relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: duration.entrance, ease: easeOutExpo }}
        >
          <h2 className="section-heading">Certifications</h2>
          <div className="section-rule"></div>
        </motion.div>

        <motion.div
          className="space-y-6 mt-14 sm:mt-16 md:mt-20 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpItem}
              whileHover={{
                x: 8,
                boxShadow: "0 20px 40px -15px rgba(22, 160, 133, 0.35)",
              }}
              transition={microTransition}
              className="shadow-lg shadow-brand/10 glass-card-soft rounded-2xl p-5 sm:p-6 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-brand">{cert.issuer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
