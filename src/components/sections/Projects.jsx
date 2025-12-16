import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "ContestHub - Ultimate Creative Platform",
      description: "A comprehensive role-based platform for managing creative contests with Stripe payments, TanStack Query for caching, and real-time dashboards for Admins, Creators, and Users.",
      image: "https://i.ibb.co.com/KM49yLs/Screen-Shot-2025-12-17-at-2-17-39-AM.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Firebase", "TanStack Query"],
      liveLink: "https://contest-hub-bfe54.web.app/",
      clientRepo: "https://github.com/himel2535/contestHub-frontend",
      serverRepo:"https://github.com/himel2535/contestHub-backend",
      category: "Full Stack",
      featured: true
    },
    {
      title: "AI Model Inventory Management System",
      description: "Full-stack MERN application with payment integration, admin dashboard, Firebase token authentication and inventory tracking.",
      image: "https://i.ibb.co.com/nqBgS3D6/AI-model-Cover-Photo.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Firebase"],
      liveLink: "https://ai-model-inventory-manag-45b01.web.app/",
      clientRepo: "https://github.com/himel2535/ai-model-inventory-manager-client",
      serverRepo: "https://github.com/himel2535/ai-model-inventory-manager-server",
      featured: true
    },
    {
      title: "ToyVille - A ToyShop",
      description: "Connecting shoppers with toys using MERN stack. Includes user authentication and dynamic product management.",
      image: "https://i.ibb.co.com/xSTCRwRJ/Screen-Shot-2025-12-05-at-4-38-18-AM.png",
      tags: ["React", "Tailwind", "Express", "MongoDB"],
      liveLink: "https://toyville-e37a0.web.app/",
      clientRepo: "https://github.com/himel2535/toyville",
      serverRepo: "https://github.com/himel2535/toyville",
      featured: true
    },
    {
      title: "E-learning - Management System",
      description: "Developed a Next.js-based Book booking platform with server-side rendering, Firebase Authentication and SEO optimization.",
      image: "https://i.ibb.co.com/RkzbdcYc/Screen-Shot-2025-12-05-at-4-46-28-AM.png",
      tags: ["Next.js", "TypeScript", "Express", "MongoDB"],
      liveLink: "https://learning-store-next.vercel.app/",
      clientRepo: "https://github.com/himel2535/learning-store-next",
      serverRepo: "https://github.com/himel2535/learning-books-express",
      featured: false
    }
  ];

  const filterTabs = ["All", "React", "Node.js", "MongoDB", "Stripe", "Firebase", "Next.js", "TypeScript"];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400">A showcase of my recent work</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === tab
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-[#112240] text-gray-300 hover:bg-[#1d355e] border border-transparent hover:border-blue-500/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='wait'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col bg-[#112240] border border-cyan-500/10 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all group h-full"
              >
                  {/* 1. Image Section (Fixed Aspect Ratio) */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg shadow-cyan-500/20">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* 2. Title Section (Fixed Height for Alignment) */}
                  <div className="min-h-[60px] flex items-start">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* 3. Description Section (Fixed Height for Alignment) */}
                  <div className="min-h-[80px] mt-2">
                    <p className="text-gray-400 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* 4. Tags Section (Fixed Height for Alignment) */}
                  <div className="min-h-[90px] mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-cyan-300 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-2 py-1 rounded border border-cyan-500/20 group-hover:border-blue-500/30 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 5. Buttons Section (Always at the bottom) */}
                  <div className="mt-auto pt-6 border-t border-gray-700/50">
                    <div className="grid grid-cols-2 gap-2">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" 
                          className="col-span-2 text-center py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-xs font-bold rounded shadow-lg shadow-cyan-500/20 transition-all mb-1 transform hover:scale-[1.02]">
                          Live Demo
                        </a>
                      )}
                      
                      {/* GitHub Buttons */}
                      <div className="flex gap-2 col-span-2">
                        {(project.clientRepo || project.codeLink) && (
                          <a href={project.clientRepo || project.codeLink} target="_blank" rel="noreferrer"
                            className="flex-1 text-center py-2 border border-cyan-500/30 hover:border-blue-500/50 text-gray-300 hover:text-white bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 text-[11px] font-bold rounded transition-all">
                            {project.serverRepo ? 'Client' : 'Code'}
                          </a>
                        )}
                        {project.serverRepo && (
                          <a href={project.serverRepo} target="_blank" rel="noreferrer"
                            className="flex-1 text-center py-2 border border-cyan-500/30 hover:border-blue-500/50 text-gray-300 hover:text-white bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 text-[11px] font-bold rounded transition-all">
                            Server
                          </a>
                        )}
                      </div>
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