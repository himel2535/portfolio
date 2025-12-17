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
    <section id="education" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl font-bold text-white mb-8">My Education</h2>
          <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-transparent mx-auto absolute left-1/2 -bottom-16 transform -translate-x-1/2"></div>
        </div>

        <div className="space-y-6 mt-20">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6, type: "spring" }}
              whileHover={{ 
                x: 10,
                boxShadow: '0 20px 40px -15px rgba(6, 182, 212, 0.3)',
              }}
              className="shadow-lg shadow-cyan-500/10 bg-[#112240]/50 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 cursor-pointer"
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
