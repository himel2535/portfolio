import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs,
  FaGithub,
  FaCode,
  FaImage,
  FaUsers,
  FaBolt
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb,
  SiPostman,
  SiCloudinary,
  SiMongoose
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "blue",
      dotColor: "bg-blue-500",
      skills: [
        { name: "HTML5", percentage: 98, icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", percentage: 95, icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", percentage: 97, icon: FaJs, color: "#F7DF1E" },
        { name: "React", percentage: 98, icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", percentage: 92, icon: SiNextdotjs, color: "#ffffff" },
        { name: "TypeScript", percentage: 90, icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", percentage: 98, icon: SiTailwindcss, color: "#06B6D4" },
      ]
    },
    {
      title: "Backend",
      color: "green",
      dotColor: "bg-green-500",
      skills: [
        { name: "Node.js", percentage: 96, icon: FaNodeJs, color: "#339933" },
        { name: "Express", percentage: 96, icon: SiExpress, color: "#ffffff" },
        { name: "MongoDB", percentage: 94, icon: SiMongodb, color: "#47A248" },
        { name: "Mongoose", percentage: 92, icon: SiMongoose, color: "#880000" },
      ]
    },
    {
      title: "Tools & Others",
      color: "orange",
      dotColor: "bg-orange-500",
      skills: [
        { name: "GitHub", percentage: 98, icon: FaGithub, color: "#ffffff" },
        { name: "VS Code", percentage: 99, icon: FaCode, color: "#007ACC" },
        { name: "Postman", percentage: 93, icon: SiPostman, color: "#FF6C37" },
        { name: "Thunderclient", percentage: 95, icon: FaBolt, color: "#50BFE6" },
        { name: "ImgBB", percentage: 90, icon: FaImage, color: "#2E4057" },
        { name: "Cloudinary", percentage: 88, icon: SiCloudinary, color: "#3448C5" },
        { name: "Communication", percentage: 95, icon: FaUsers, color: "#ffffff" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold text-white mb-8">My Skills</h2>
          <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-transparent mx-auto absolute left-1/2 -bottom-16 transform -translate-x-1/2"></div>
        </div>

        {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            whileHover={{
              y: -5,
              scale: 1.03,
              boxShadow: '0 20px 40px -15px rgba(6, 182, 212, 0.3)'
            }}
            className="bg-[#112240]/50 backdrop-blur-sm shadow-xl shadow-cyan-500/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer"
          >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-6">
                <span className={`w-2 h-2 rounded-full ${category.dotColor}`}></span>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon style={{ color: skill.color }} className="text-lg" />
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                      </div>
                      <span className="text-cyan-400 text-sm font-medium">{skill.percentage}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-800/50 rounded-full h-1.5 overflow-hidden border border-cyan-500/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500"
                        style={{ 
                          boxShadow: `0 0 10px #06b6d4`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
