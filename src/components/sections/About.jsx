import React from "react";
import { motion } from "framer-motion";
import keyboardNeon from "../../assets/keyboard-neon.png";
import {
  viewportOnce,
  staggerContainer,
  fadeLeftItem,
  fadeRightItem,
  microTransition,
  easeOutExpo,
  duration,
} from "../../lib/motion";

const About = () => {
  return (
    <section id="about" className="section-shell bg-transparent text-gray-300">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16 relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: duration.entrance, ease: easeOutExpo }}
        >
          <h2 className="section-heading">About Me</h2>
          <div className="section-rule"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-14 sm:mt-16 md:mt-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Left Column - Introduction */}
          <motion.div variants={fadeLeftItem}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Hi, I'm Monwar Hossan Himel
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-5 sm:mb-6 text-gray-300">
              Full-Stack Software Engineer with 1.5+ years of experience independently building and shipping scalable, end-to-end SaaS and ERP platforms. Graduated in Computer Science and Engineering from Jahangirnagar University.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-gray-300">
              A dependable Agile contributor recognized for clean code, strong problem-solving, and consistent, on-time delivery.
            </p>
            {/* Keyboard atmosphere image (ref photo 3) */}
            <div className="relative rounded-3xl overflow-hidden border border-brand/20 shadow-xl shadow-brand/15 max-w-md">
              <img
                src={keyboardNeon}
                alt=""
                className="w-full h-44 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 via-transparent to-brand-forest/40 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column - Personal Info */}
          <motion.div
            variants={fadeRightItem}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px -15px rgba(22, 160, 133, 0.35)",
            }}
            transition={microTransition}
            className="glass-card-soft shadow-xl shadow-brand/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 border-b border-brand/20 pb-2">
              Personal Info
            </h3>
            <ul className="text-gray-300 space-y-4">
              <li>
                <strong>Title:</strong> Full-Stack Engineer
              </li>
              <li>
                <strong>Location:</strong> Uttara, Dhaka, Bangladesh
              </li>
              <li>
                <strong>Email:</strong> monwarhossanhimel@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> +8801617721429
              </li>
              <li>
                <strong>Open For:</strong> Full-time Junior Roles / Collaborative Projects
              </li>
              <li>
                <strong>Skills:</strong> Next.js, React, NestJS, Node.js, TypeScript, PostgreSQL, MongoDB, Redis, Docker
              </li>
              <li>
                <strong>Languages:</strong> Bangla (Native), English (Professional Working), Hindi (Spoken)
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
