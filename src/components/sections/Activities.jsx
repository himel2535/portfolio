import React from 'react';
import { motion } from 'framer-motion';

const Activities = () => {
  const activities = [
    {
      title: 'Captain (Former)',
      organization: 'Jahangirnagar University CSE Cricket Team',
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
    <section id="activities" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold text-white mb-8">Activities</h2>
          <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-transparent mx-auto absolute left-1/2 -bottom-16 transform -translate-x-1/2"></div>
        </div>

        {/* Activities List */}
        <div className="max-w-4xl mx-auto space-y-6 mt-20">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                x: 10,
                boxShadow: '0 10px 30px -10px rgba(6, 182, 212, 0.2)',
              }}
              className="bg-[#112240]/50 backdrop-blur-sm shadow-lg shadow-cyan-500/10 rounded-xl p-6 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-white">{activity.title}</h3>
              <p className="text-gray-400">{activity.organization}</p>
              <p className="text-gray-500 text-sm">{activity.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
