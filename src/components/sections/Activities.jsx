import React from 'react';
import { motion } from 'framer-motion';
import {
  viewportOnce,
  staggerContainer,
  fadeUpItem,
  microTransition,
  easeOutExpo,
  duration,
} from '../../lib/motion';

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
    <section id="activities" className="section-shell bg-transparent">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16 relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: duration.entrance, ease: easeOutExpo }}
        >
          <h2 className="section-heading">Activities</h2>
          <div className="section-rule"></div>
        </motion.div>

        {/* Activities List */}
        <motion.div
          className="max-w-4xl mx-auto space-y-6 mt-14 sm:mt-16 md:mt-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
              whileHover={{
                x: 8,
                boxShadow: '0 10px 30px -10px rgba(22, 160, 133, 0.2)',
              }}
              transition={microTransition}
              className="glass-card-soft shadow-lg shadow-brand/10 rounded-2xl p-5 sm:p-6 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-white">{activity.title}</h3>
              <p className="text-gray-400">{activity.organization}</p>
              <p className="text-gray-500 text-sm">{activity.period}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
