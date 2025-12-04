import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      institution: 'Jahangirnagar University',
      degree: "M.Sc. in Computer Science and Engineering",
      period: '2023 – Ongoing',
      location: 'Savar, Dhaka',
    },
    {
      institution: 'Jahangirnagar University',
      degree: "B.Sc. in Computer Science and Engineering",
      period: '2017 – 2023',
      location: 'Savar, Dhaka',
    },
  ];

  return (
    <section id="education" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        </div>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-white/5 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institution} – {edu.location}</p>
              <p className="text-gray-500 text-sm">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
