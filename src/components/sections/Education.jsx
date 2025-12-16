import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      institution: 'Jahangirnagar University',
      degree: "M.Sc. in Computer Science and Engineering",
      location: 'Savar, Dhaka',
    },
    {
      institution: 'Jahangirnagar University',
      degree: "B.Sc. in Computer Science and Engineering",
      location: 'Savar, Dhaka',
    },
  ];

  return (
    <section id="education" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            whileHover={{ scale: 1.05, color: '#06b6d4' }}
            transition={{ duration: 0.3 }}
          >
            My Education
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic journey and qualifications
          </p>
        </motion.div>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6, type: "spring" }}
              whileHover={{ 
                x: 10,
                boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)',
                borderColor: 'rgba(6, 182, 212, 0.7)'
              }}
              className="border-2 border-cyan-500/30 bg-[#112240]/50 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
              <p className="text-cyan-400">{edu.institution} – {edu.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
