import React from 'react';
import { FaFigma, FaSketch, FaReact, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobexd } from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";
import react from "../../assets/icons8-react-100.png"
const Experience = () => {
  const tools = [
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaReact />, name: 'React' },
    { icon: <RiNextjsFill />, name: 'NextJS' },
    { icon: <FaSketch />, name: 'Sketch' },
    { icon: <SiAdobeaftereffects />, name: 'After Effects' },
    { icon: <SiAdobeillustrator />, name: 'Illustrator' },
    { icon: <SiAdobexd />, name: 'Adobe XD' },
    { icon: <SiAdobephotoshop />, name: 'Photoshop' },
  ];

  const experiences = [
    {
      role: "Lead UI/UX Designer",
      company: "Google",
      period: "2021 - 2023",
      description: "Led the design team for Google Maps, focusing on accessibility and user experience."
    },
    {
      role: "Product Designer",
      company: "Apple",
      period: "2019 - 2021",
      description: "Worked on the design system for iOS 15, creating consistent and beautiful interfaces."
    },
    {
      role: "Senior UI/UX Designer",
      company: "Microsoft",
      period: "2018 - 2019",
      description: "Designed the new Fluent Design System components for Windows 11."
    },
    {
      role: "Lead Visual Designer",
      company: "Sony",
      period: "2016 - Present",
      description: "Creating immersive visual experiences for PlayStation UI and branding."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        {/* Tools Section */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {tools.map((tool, index) => (
              <div key={index} className="p-6 bg-base-200 rounded-2xl text-4xl hover:text-primary hover:scale-110 transition-all duration-300 shadow-lg border border-white/5 cursor-pointer" title={tool.name}>
                {tool.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <span className="text-sm tracking-widest uppercase text-gray-500 mb-4 block">03 / Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Experience that shapes meaningful design
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-8 hover:border-primary/50 transition-colors">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <div className="text-right md:text-left">
                  <span className="text-primary font-mono font-bold">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
