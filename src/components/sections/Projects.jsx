import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "ContestHub - Ultimate Creative Platform",
      description: "A comprehensive role-based platform for managing creative contests with Stripe payments, TanStack Query for caching, and real-time dashboards for Admins, Creators, and Users.",
      image: "https://i.ibb.co.com/KM49yLs/Screen-Shot-2025-12-17-at-2-17-39-AM.png",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "Firebase", "JWT", "TanStack Query", "React Hook Form", "HTML", "Tailwind CSS", "DaisyUI"],
      liveLink: "https://contest-hub-bfe54.web.app/",
      clientRepo: "https://github.com/himel2535/contestHub-frontend",
      serverRepo:"https://github.com/himel2535/contestHub-backend",
      category: "Full Stack",
      featured: true
    },
    {
      title: "Plant-Net - Nursery Management System",
      description: "A role-based nursery website where users can order plants, sellers can manage products, and admins oversee operations. Features secure authentication and real-time data management.",
      image: "/plant-net.png",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "Firebase", "TanStack Query", "JWT", "React Hook Form", "HTML", "Tailwind CSS", "DaisyUI"],
      liveLink: "https://plant-net-32367.web.app/",
      clientRepo: "https://github.com/himel2535/plant-net",
      serverRepo: "https://github.com/himel2535/plant-net",
      category: "Full Stack",
      featured: true
    },
    {
      title: "AI Model Inventory Management System",
      description: "Full-stack MERN application with payment integration, admin dashboard, Firebase token authentication and inventory tracking.",
      image: "https://i.ibb.co.com/nqBgS3D6/AI-model-Cover-Photo.png",
      tags: ["React", "Node.js", "MongoDB", "JWT", "Firebase", "HTML", "Tailwind CSS", "DaisyUI", "Express.js"],
      liveLink: "https://ai-model-inventory-manag-45b01.web.app/",
      clientRepo: "https://github.com/himel2535/ai-model-inventory-manager-client",
      serverRepo: "https://github.com/himel2535/ai-model-inventory-manager-server",
      featured: true
    },
    {
      title: "ToyVille - A ToyShop",
      description: "Connecting shoppers with toys using MERN stack. Includes user authentication and dynamic product management.",
      image: "https://i.ibb.co.com/xSTCRwRJ/Screen-Shot-2025-12-05-at-4-38-18-AM.png",
      tags: ["React", "Tailwind", "Express", "MongoDB", "HTML", "Tailwind CSS", "DaisyUI", "Express.js"],
      liveLink: "https://toyville-e37a0.web.app/",
      clientRepo: "https://github.com/himel2535/toyville",
      serverRepo: "https://github.com/himel2535/toyville",
      featured: true
    },
    {
      title: "AI Inventory Manager (Next.js)",
      description: "Developed a Next.js-based Book booking platform with server-side rendering, Firebase Authentication and SEO optimization.",
      image: "/project_image.png",
      tags: ["Next.js", "TypeScript", "Express", "MongoDB", "HTML", "Tailwind CSS", "DaisyUI", "Express.js"],
      liveLink: "https://learning-store-next.vercel.app/",
      clientRepo: "https://github.com/himel2535/learning-store-next",
      serverRepo: "https://github.com/himel2535/learning-books-express",
      featured: false
    }
  ];

  const filterTabs = ["All", "React", "Node.js", "MongoDB", "Stripe", "Firebase", "Next.js", "TypeScript", "JavaScript", "JWT", "Express.js", "Mongoose"];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
          {/* Vertical indicator line */}
          <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-transparent mx-auto absolute left-1/2 -bottom-16 transform -translate-x-1/2"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tab
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-[#112240] text-gray-400 hover:text-white hover:bg-[#1d355e] border border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects List - Alternating Layout */}
        <div className="space-y-32">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium text-cyan-300 bg-[#112240] px-4 py-1.5 rounded-full border border-cyan-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 mt-auto">
                    {/* Client Repo */}
                    {(project.clientRepo || project.codeLink) && (
                      <a 
                        href={project.clientRepo || project.codeLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="group flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-colors border-b border-transparent hover:border-white pb-0.5"
                      >
                        Client Repo
                        <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                          <FaExternalLinkAlt className="text-xs" />
                        </span>
                      </a>
                    )}

                    {/* Server Repo */}
                    {project.serverRepo && (
                      <a 
                        href={project.serverRepo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="group flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-colors border-b border-transparent hover:border-white pb-0.5"
                      >
                        Server Repo
                        <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                          <FaExternalLinkAlt className="text-xs" />
                        </span>
                      </a>
                    )}

                    {/* Live Link */}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="group flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-colors border-b border-transparent hover:border-white pb-0.5"
                      >
                        Live Link
                        <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                          <FaExternalLinkAlt className="text-xs" />
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Content */}
                <div className="flex-1 w-full">
                  <div className="relative group rounded-xl overflow-hidden bg-[#112240] shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-shadow duration-300">
                    {/* Terminal/Browser Header Graphics - Optional decoration */}
                    <div className="h-8 bg-[#0a192f] flex items-center px-4 gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    
                    <div className="relative overflow-hidden aspect-video">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-cyan-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;