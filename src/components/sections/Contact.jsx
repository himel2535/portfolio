import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!");
      return;
    }
    toast.success("Message sent successfully!", {
      style: {
        background: "#8B5CF6",
        color: "#fff"
      },
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-transparent relative overflow-hidden">
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl font-bold text-white mb-8">Get In Touch</h2>
          <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-transparent mx-auto absolute left-1/2 -bottom-16 transform -translate-x-1/2"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#112240]/50 backdrop-blur-sm shadow-xl shadow-cyan-500/10 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-[#0a192f]/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full bg-[#0a192f]/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full bg-[#0a192f]/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/50 flex items-center justify-center gap-2"
              >
                Send Message <FaPaperPlane className="text-sm" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Information Card */}
            <div className="bg-[#112240]/50 backdrop-blur-sm shadow-xl shadow-cyan-500/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 shadow-lg shadow-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-cyan-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a href="mailto:monwarhossanhimel@gmail.com" className="text-white font-medium hover:text-cyan-400 transition-colors">
                      monwarhossanhimel@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 shadow-lg shadow-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white font-medium">Dhaka, Kishoreganj</p>
                  </div>
                </div>
              </div>

              {/* Available Badge */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <div className="flex items-center gap-2 bg-green-500/10 shadow-lg shadow-green-500/20 rounded-lg px-4 py-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-green-400 font-medium text-sm">Available for freelance work</span>
                </div>
              </div>
            </div>

            {/* Connect With Me Card */}
            <div className="bg-[#112240]/50 backdrop-blur-sm shadow-xl shadow-cyan-500/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/himel2535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-3 bg-[#0a192f]/50 border border-cyan-500/20 rounded-lg p-6 transition-all duration-300 group hover:shadow-[0_20px_30px_-10px_rgba(6,182,212,0.3)] hover:-translate-y-2 cursor-pointer"
                >
                  <FaGithub className="text-3xl text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/monwar-hossan-himel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-3 bg-[#0a192f]/50 border border-cyan-500/20 rounded-lg p-6 transition-all duration-300 group hover:shadow-[0_20px_30px_-10px_rgba(6,182,212,0.3)] hover:-translate-y-2 cursor-pointer"
                >
                  <FaLinkedin className="text-3xl text-gray-400 group-hover:text-cyan-500 transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-3 bg-[#0a192f]/50 border border-cyan-500/20 rounded-lg p-6 transition-all duration-300 group hover:shadow-[0_20px_30px_-10px_rgba(6,182,212,0.3)] hover:-translate-y-2 cursor-pointer"
                >
                  <FaTwitter className="text-3xl text-gray-400 group-hover:text-cyan-500 transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Twitter</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:monwarhossanhimel@gmail.com"
                  className="flex flex-col items-center justify-center gap-3 bg-[#0a192f]/50 border border-cyan-500/20 rounded-lg p-6 transition-all duration-300 group hover:shadow-[0_20px_30px_-10px_rgba(6,182,212,0.3)] hover:-translate-y-2 cursor-pointer"
                >
                  <FaEnvelope className="text-3xl text-gray-400 group-hover:text-cyan-500 transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Email</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
