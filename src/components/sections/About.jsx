import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-transparent text-gray-300">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            whileHover={{ scale: 1.05, color: '#06b6d4' }}
            transition={{ duration: 0.3 }}
          >
            About Me
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hi, I'm Monwar Hossan Himel
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              I'm a passionate Full-Stack Developer with a focus on creating modern, responsive web applications. I specialize in Next.js, React, Node.js, and TailwindCSS. I enjoy designing clean user interfaces and building seamless user experiences.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Continuously learning and exploring new technologies, I am eager to contribute to meaningful projects and collaborate with innovative teams.
            </p>
          </motion.div>

          {/* Right Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ 
              y: -10,
              boxShadow: '0 20px 40px -15px rgba(6, 182, 212, 0.3)',
            }}
            className="bg-[#112240]/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
              Personal Info
            </h3>
            <ul className="text-gray-300 space-y-4">
              <li>
                <strong>Location:</strong> Dhaka, Kishoreganj
              </li>
              <li>
                <strong>Open For:</strong> Internship / Freelance Projects / Junior Roles
              </li>
              <li>
                <strong>Skills:</strong> Next.js, React, Node.js, Express, MongoDB, TailwindCSS, UI/UX Design
              </li>
              <li>
                <strong>Experience:</strong> Designing and developing web apps with modern tech stack
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
