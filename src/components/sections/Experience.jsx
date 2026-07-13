import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiTypescript, SiFirebase } from 'react-icons/si';
import {
  viewportOnce,
  staggerContainer,
  fadeUpItem,
  microTransition,
  easeOutExpo,
  duration,
} from '../../lib/motion';

const Experience = () => {
  const tools = [
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiFirebase />, name: 'Firebase' },
    { icon: <FaGitAlt />, name: 'Git' },
  ];

  const experiences = [
    {
      role: 'Junior Software Engineer',
      company: 'Software Driven Business IT (Sellxify)',
      location: 'Uttara, Dhaka, Bangladesh',
      period: '07/2026 – Present',
      bullets: [
        'Develop and maintain full-stack features across the production codebase using React, Node.js, Express, and MongoDB, delivering 12+ core functional components following Agile-based SDLC practices.',
        'Collaborate cross-functionally with senior engineers during 6+ sprint planning sessions to translate product requirements into production-ready code.',
        'Own end-to-end implementation of assigned modules, maintaining a 95% task completion rate on time while adhering to strict code benchmarks.',
        'Diagnose and resolve 20+ production bugs and UI glitches, reducing average critical bug turnaround time by 25%.',
        'Tracked against core KPIs — achieving over 90% compliance in Production Code Quality, Bug Optimization Time, Deadline Compliance, and Team Collaboration as monitored by engineering leadership.',
      ],
    },
    {
      role: 'Web Development Intern',
      company: 'Hex Softwares Pvt. Ltd.',
      location: 'Remote (Work From Home)',
      period: '12/2025 – 01/2026',
      bullets: [
        'Completed a 1-month Web Development internship starting 25 December 2025, applying training knowledge to real project work under Hex Softwares Pvt. Ltd.',
        'Gained hands-on industry experience in the Web Development domain through practical assignment and task execution in a remote work environment.',
      ],
    },
  ];

  return (
    <section id="experience" className="section-shell bg-transparent">
      <div className="section-inner">
        {/* Tools Section */}
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={fadeUpItem}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.96 }}
                transition={microTransition}
                className="p-4 sm:p-5 md:p-6 glass-card-soft rounded-2xl text-2xl sm:text-3xl md:text-4xl text-brand hover:text-[#a8e6d7] shadow-lg shadow-brand/10 border border-brand/15 cursor-pointer"
                title={tool.name}
              >
                {tool.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <div>
          <motion.div
            className="text-center mb-12 sm:mb-14 md:mb-16 relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: duration.entrance, ease: easeOutExpo }}
          >
            <h2 className="section-heading">My Experience</h2>
            <div className="section-rule"></div>
          </motion.div>

          <motion.div
            className="space-y-8 mt-14 sm:mt-16 md:mt-20 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeUpItem}
                whileHover={{
                  x: 8,
                  boxShadow: "0 20px 40px -15px rgba(22, 160, 133, 0.35)",
                }}
                transition={microTransition}
                className="glass-card-soft shadow-lg shadow-brand/10 rounded-2xl p-5 sm:p-6 md:p-8 cursor-pointer border border-white/5"
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-brand font-medium mt-1">{exp.company}</p>
                    <p className="text-gray-500 text-sm mt-1">{exp.location}</p>
                  </div>
                  <span className="text-brand font-mono font-bold text-sm md:text-base whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3 mt-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-gray-400 text-sm md:text-base leading-relaxed flex gap-3">
                      <span className="text-brand mt-1.5 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
