import React from 'react';
import { motion } from 'framer-motion';

const Activities = () => {
  const activities = [
    {
      title: 'Captain (Former)',
      organization: 'Jahangirnagar University Central Cricket Team',
      period: '2022 – 2023',
    },
    {
      title: 'Vice-President (Former)',
      organization: 'JU Information & Technology Society',
      period: '2021 – 2022',
    },
    {
      title: 'IT Secretary (Former)',
      organization: 'Uttaran Cultural Organization (JU)',
      period: '2020 – 2021',
    },
  ];

  return (
    <section id="activities" className="py-20 bg-dark">
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
            Extracurricular Activities
          </motion.h2>
        </motion.div>

        <div className="space-y-6">
          {activities.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, type: "spring" }}
              whileHover={{ 
                x: 10,
                boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)',
                borderColor: 'rgba(6, 182, 212, 0.6)'
              }}
              className="border-2 border-cyan-500/30 bg-[#112240]/50 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-white">{act.title}</h3>
              <p className="text-gray-400">{act.organization}</p>
              <p className="text-gray-500 text-sm">{act.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
