import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiMongoose,
  SiFirebase,
  SiStripe,
  SiMysql,
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { BiCodeAlt } from 'react-icons/bi';
import { MdSecurity } from 'react-icons/md';
import { VscDebugConsole } from 'react-icons/vsc';
import {
  viewportOnce,
  staggerContainer,
  fadeUpItem,
  microTransition,
  easeOutExpo,
  duration,
} from '../../lib/motion';

// Fallback icon for C (no dedicated react-icons simple icon that fits well)
const CIcon = ({ className, style }) => (
  <span className={className} style={style}>
    <BiCodeAlt />
  </span>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      dotColor: 'bg-yellow-500',
      skills: [
        { name: 'TypeScript', percentage: 95, icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript (ES6+)', percentage: 97, icon: FaJs, color: '#F7DF1E' },
        { name: 'Python', percentage: 85, icon: FaPython, color: '#3776AB' },
        { name: 'C', percentage: 80, icon: CIcon, color: '#A8B9CC' },
        { name: 'C++', percentage: 82, icon: TbBrandCpp, color: '#00599C' },
      ],
    },
    {
      title: 'Frontend & UI',
      dotColor: 'bg-blue-500',
      skills: [
        { name: 'Next.js', percentage: 95, icon: SiNextdotjs, color: '#ffffff' },
        { name: 'React.js', percentage: 98, icon: FaReact, color: '#61DAFB' },
        { name: 'Zustand / Redux', percentage: 92, icon: FaReact, color: '#764ABC' },
        { name: 'Tailwind CSS', percentage: 98, icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'TanStack Query', percentage: 90, icon: FaReact, color: '#FF4154' },
      ],
    },
    {
      title: 'Backend & APIs',
      dotColor: 'bg-green-500',
      skills: [
        { name: 'NestJS', percentage: 90, icon: SiExpress, color: '#E0234E' },
        { name: 'Node.js', percentage: 96, icon: FaNodeJs, color: '#339933' },
        { name: 'Express.js / Fastify', percentage: 96, icon: SiExpress, color: '#ffffff' },
        { name: 'REST / WebSockets', percentage: 95, icon: VscDebugConsole, color: '#06B6D4' },
        { name: 'JWT / OAuth2 / RBAC', percentage: 94, icon: MdSecurity, color: '#06B6D4' },
      ],
    },
    {
      title: 'Databases & Cloud',
      dotColor: 'bg-orange-500',
      skills: [
        { name: 'PostgreSQL / Prisma', percentage: 90, icon: SiMongodb, color: '#336791' },
        { name: 'MongoDB Atlas', percentage: 94, icon: SiMongodb, color: '#47A248' },
        { name: 'Redis / BullMQ', percentage: 88, icon: SiMongoose, color: '#DC382D' },
        { name: 'Docker / CI-CD', percentage: 85, icon: FaGithub, color: '#2496ED' },
        { name: 'Anthropic AI / Vercel', percentage: 90, icon: BiCodeAlt, color: '#ffffff' },
      ],
    },
  ];

  return (
    <section id="skills" className="section-shell bg-transparent">
      <div className="section-inner">
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16 relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: duration.entrance, ease: easeOutExpo }}
        >
          <h2 className="section-heading">My Skills</h2>
          <div className="section-rule"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 sm:mt-16 md:mt-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={fadeUpItem}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 20px 40px -15px rgba(22, 160, 133, 0.35)",
              }}
              transition={microTransition}
              className="glass-card-soft shadow-xl shadow-brand/10 rounded-2xl p-5 sm:p-6 md:p-7 cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className={`w-2 h-2 rounded-full ${category.dotColor}`}></span>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon style={{ color: skill.color }} className="text-lg" />
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                      </div>
                      <span className="text-brand text-sm font-medium">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-800/50 rounded-full h-1.5 overflow-hidden border border-brand/20">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.percentage / 100 }}
                        viewport={viewportOnce}
                        transition={{
                          duration: 0.9,
                          delay: 0.15 + catIndex * 0.1 + skillIndex * 0.05,
                          ease: easeOutExpo,
                        }}
                        className="h-full w-full origin-left rounded-full bg-gradient-to-r from-[#16A085] via-[#F4D03F] to-[#16A085]"
                        style={{ boxShadow: '0 0 12px rgba(22, 160, 133, 0.65)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
