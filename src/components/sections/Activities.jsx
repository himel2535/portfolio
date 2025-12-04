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
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Extracurricular Activities</h2>
        </div>
        <div className="space-y-6">
          {activities.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-white/5 rounded-lg p-6"
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
