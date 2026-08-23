import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import {
  viewportOnce,
  staggerContainer,
  fadeUpItem,
  microTransition,
  easeOutExpo,
  duration,
} from '../../lib/motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Zayan Mart ERP – Unified Manufacturing & Enterprise Command Platform',
      description: 'Enterprise-grade, multi-tenant ERP & CRM SaaS platform built independently end-to-end for Zayan Mart, covering 13 core modules – Dashboard, Sales & CRM, Inventory, Purchases, Factory/Manufacturing, Accounts, HR, Payroll, Projects, Assets, Approvals, Reports. Engineered a two-layer caching architecture cutting response times from 778ms to 17ms.',
      image: '/zayan-mart-erp.jpg',
      tags: ['Next.js', 'React', 'Zustand', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Socket.io'],
      liveLink: 'https://toys-factory-erp-one.vercel.app/',
      clientRepo: 'https://github.com/himel2535/toys_factory_erp',
      serverRepo: 'https://github.com/himel2535/toys_factory_erp_backend',
      featured: true,
    },
    {
      title: 'BuildMatrix ERP – Enterprise Construction & Real Estate Operations Platform',
      description: 'High-concurrency ERP platform engineered independently to coordinate multi-million BDT civil budgets, procurement pipelines, site compliance, and double-entry financial accounts across 13 core enterprise modules. Optimized database query performance using PostgreSQL B-Tree schema indexing and custom NestJS in-memory caching.',
      image: '/buildmatrix-erp.png',
      tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'TypeScript', 'TanStack Query'],
      liveLink: 'https://construction-management-system-lyart.vercel.app/',
      clientRepo: 'https://github.com/himel2535/construction_management_system',
      serverRepo: 'https://github.com/himel2535/construction_management_system_backend',
      featured: true,
    },
    {
      title: 'WorkTrack Enterprise – Workforce Administration & Productivity Platform',
      description: 'Full-stack office administration system independently designed and deployed to streamline enterprise employee attendance, automated wage/break analytics, hourly task tracking, and workforce performance evaluation. Architected a robust RBAC security matrix.',
      image: '/worktrack-enterprise.png',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
      liveLink: 'https://worktrack-management-system.vercel.app/',
      clientRepo: 'https://github.com/himel2535/worktrack_management_system',
      serverRepo: 'https://github.com/himel2535/worktrack_backend',
      featured: true,
    },
  ];

  const filterTabs = ['All', 'Next.js', 'React', 'Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="section-shell bg-transparent">
      <div className="section-inner">
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16 relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: duration.entrance, ease: easeOutExpo }}
        >
          <h2 className="section-heading">Projects</h2>
          <div className="section-rule"></div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {filterTabs.map((tab) => (
            <motion.button
              key={tab}
              variants={fadeUpItem}
              onClick={() => setActiveFilter(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={microTransition}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium cursor-pointer ${
                activeFilter === tab
                  ? 'btn-grad !py-1.5 !px-4 !text-xs sm:!text-sm !normal-case !tracking-normal shadow-lg'
                  : 'bg-[#0c1f2a]/80 text-gray-300 hover:text-white hover:bg-[#16A085] border border-[#16A085]/20'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: duration.entrance,
                  ease: easeOutExpo,
                  delay: Math.min(index * 0.12, 0.36),
                }}
                className={`flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-20 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 text-left w-full">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] sm:text-xs font-medium text-[#a8e6d7] bg-[#0c1f2a]/90 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-brand/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300/90 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-auto">
                    {(project.clientRepo || project.codeLink) && (
                      <a
                        href={project.clientRepo || project.codeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 text-gray-300 hover:text-white font-medium border-b border-transparent hover:border-white pb-0.5 transition-colors duration-200"
                      >
                        Client Repo
                        <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ease-out">
                          <FaExternalLinkAlt className="text-xs" />
                        </span>
                      </a>
                    )}

                    {project.serverRepo && (
                      <a
                        href={project.serverRepo}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 text-gray-300 hover:text-white font-medium border-b border-transparent hover:border-white pb-0.5 transition-colors duration-200"
                      >
                        Server Repo
                        <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ease-out">
                          <FaExternalLinkAlt className="text-xs" />
                        </span>
                      </a>
                    )}

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 text-gray-300 hover:text-white font-medium border-b border-transparent hover:border-white pb-0.5 transition-colors duration-200"
                      >
                        Live Link
                        <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ease-out">
                          <FaExternalLinkAlt className="text-xs" />
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={microTransition}
                    className="relative group rounded-xl overflow-hidden bg-[#0a1a22] shadow-lg shadow-brand/10 hover:shadow-brand/30"
                  >
                    <div className="h-8 bg-[#05070a] flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>

                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </motion.div>
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
