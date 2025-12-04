import React from 'react';
import { motion } from 'framer-motion';
import AI_model_CoverPhoto from "../../assets/AI_model_CoverPhoto.png"

const Projects = () => {
  const projects = [
    {
      title: "AI Model Inventory Manager",
      description: "Full‑stack AI marketplace where users can Add, Edit, Delete, View AI Models. Only model creator can edit/delete their models Secure API & token-based actions. Includes user‑specific routes, purchase tracking, and profile dropdown. After purchasing user can see that on purchase page and any users can add models but obviosly must be loggin because of protected routes",
      summary: "Full‑stack AI Marketplace",
      industry: "AI / SaaS",
      year: "2025",
      image: "https://i.ibb.co.com/nqBgS3D6/AI-model-Cover-Photo.png",
      liveLink: "https://ai-model-inventory-manag-45b01.web.app/",
      clientRepo: "https://github.com/himel2535/ai-model-inventory-manager-client",
      serverRepo: "https://github.com/himel2535/ai-model-inventory-manager-server"
    },
    {
      title: "ToyVille",
      description: "Frontend toy marketplace built with React, Firebase and Tailwind CSS. Users can explore toys, view details, and manage their profile securely.",
      summary: "Toy Marketplace",
      industry: "E‑commerce",
      year: "2023",
      image: "https://i.ibb.co.com/xSTCRwRJ/Screen-Shot-2025-12-05-at-4-38-18-AM.png",
      liveLink: "https://toyville-e37a0.web.app/",
      clientRepo: "https://github.com/himel2535/toyville",
      serverRepo: "https://github.com/himel2535/toyville"
    },
    {
      title: "Learning Store",
      description: "Full‑stack learning book management system built with Next.js, Express.js and MongoDB. Users can add, browse, and manage books.",
      summary: "Learning Book Store",
      industry: "Education",
      year: "2023",
      image: "https://i.ibb.co.com/RkzbdcYc/Screen-Shot-2025-12-05-at-4-46-28-AM.png",
      liveLink: "https://learning-store-next.vercel.app/",
      clientRepo: "https://github.com/himel2535/learning-store-next",
      serverRepo: "https://github.com/himel2535/learning-books-express"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">A glimpse into my latest work</h2>
        </div>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card lg:card-side bg-base-200 shadow-xl hover:shadow-2xl transition-shadow border border-white/5 overflow-hidden group"
            >
              <div className="card-body lg:w-1/2 p-8 md:p-12">
                <h3 className="card-title text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-8">{project.description}</p>
                <div className="flex gap-8 md:gap-16 border-t border-white/10 pt-6 mt-auto">
                  <div>
                    <span className="text-xs text-gray-500 uppercase block mb-1">Summary</span>
                    <span className="font-semibold">{project.summary}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase block mb-1">Industry</span>
                    <span className="font-semibold">{project.industry}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase block mb-1">Year</span>
                    <span className="font-semibold">{project.year}</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Live Demo</a>
                  )}
                  {project.clientRepo && (
                    <a href={project.clientRepo} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Client Repo</a>
                  )}
                  {project.serverRepo && project.serverRepo !== "" && (
                    <a href={project.serverRepo} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Server Repo</a>
                  )}
                </div>
              </div>
              <figure className="lg:w-1/2 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </figure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
