import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'React.js', 'Next.js','JavaScript', 'Python','Node.js', 'Express.js','MongoDB', 'Firebase', 'Git', 'GitHub', 'HTML5', 'Tailwind CSS'
     
  ];

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gray-800 text-white p-3 rounded text-center"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
