import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import {
  viewportOnce,
  staggerContainer,
  fadeLeftItem,
  fadeRightItem,
  fadeUpItem,
  microTransition,
  easeOutExpo,
  duration,
} from '../../lib/motion';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
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

    setIsSending(true);

    // [IMPORTANT] Replace these placeholders with your actual EmailJS credentials
    // SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          toast.success("Message sent successfully!", {
            style: {
              background: "#0a1a22",
              color: "#67e8f9",
              border: "1px solid rgba(22, 160, 133, 0.2)"
            },
          });
          setFormData({ name: '', email: '', message: '' });
          setIsSending(false);
      }, (error) => {
          console.error(error.text);
          toast.error("Failed to send message. Please try again later.");
          setIsSending(false);
      });
  };

  const socialLinks = [
    {
      href: 'https://github.com/himel2535',
      label: 'GitHub',
      icon: FaGithub,
      hoverClass: 'group-hover:text-white',
    },
    {
      href: 'https://www.linkedin.com/in/monwar-hossan-himel/',
      label: 'LinkedIn',
      icon: FaLinkedin,
      hoverClass: 'group-hover:text-brand',
    },
    {
      href: 'https://wa.me/8801617721429',
      label: 'WhatsApp',
      icon: FaWhatsapp,
      hoverClass: 'group-hover:text-green-500',
    },
    {
      href: 'mailto:monwarhossanhimel@gmail.com',
      label: 'Email',
      icon: FaEnvelope,
      hoverClass: 'group-hover:text-brand',
    },
  ];

  return (
    <section id="contact" className="section-shell bg-transparent relative overflow-hidden">
      
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16 relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: duration.entrance, ease: easeOutExpo }}
        >
          <h2 className="section-heading">Get In Touch</h2>
          <div className="section-rule"></div>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14 sm:mt-16 md:mt-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          
          {/* Contact Form */}
          <motion.div
            variants={fadeLeftItem}
            className="glass-card-soft shadow-xl shadow-brand/10 rounded-2xl p-5 sm:p-7 md:p-8"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full bg-[#0c1f2a]/80 border border-brand/25 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/40 transition-colors duration-200"
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
                  className="w-full bg-[#0c1f2a]/80 border border-brand/25 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/40 transition-colors duration-200"
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
                  className="w-full bg-[#0c1f2a]/80 border border-brand/25 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/40 transition-colors duration-200 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={microTransition}
                className={`btn-grad w-full gap-2 ${isSending ? 'opacity-70 cursor-wait' : ''}`}
                style={{ textTransform: 'none', letterSpacing: '0.02em' }}
              >
                {isSending ? "Sending..." : "Send Message"} <FaPaperPlane className={`text-sm ${isSending ? 'animate-bounce' : ''}`} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={fadeRightItem} className="space-y-6">
            {/* Contact Information Card */}
            <div className="glass-card-soft shadow-xl shadow-brand/10 rounded-2xl p-5 sm:p-7 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand/10 shadow-lg shadow-brand/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-brand text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a href="mailto:monwarhossanhimel@gmail.com" className="text-white font-medium hover:text-brand transition-colors duration-200">
                      monwarhossanhimel@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand/10 shadow-lg shadow-brand/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-brand text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone / WhatsApp</p>
                    <a href="tel:+8801617721429" className="text-white font-medium hover:text-brand transition-colors duration-200">
                      +8801617721429
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand/10 shadow-lg shadow-brand/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white font-medium">Uttara, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Available Badge */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <div className="flex items-center gap-2 bg-brand/10 shadow-lg shadow-brand/20 rounded-lg px-4 py-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand"></span>
                  </span>
                  <span className="text-[#a8e6d7] font-medium text-sm">Available for freelance work</span>
                </div>
              </div>
            </div>

            {/* Connect With Me Card */}
            <div className="glass-card-soft shadow-xl shadow-brand/10 rounded-2xl p-5 sm:p-7 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
              
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    variants={fadeUpItem}
                    whileHover={{ y: -6, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={microTransition}
                    className="flex flex-col items-center justify-center gap-3 bg-[#0c1f2a]/70 border border-brand/20 rounded-2xl p-5 sm:p-6 group cursor-pointer hover:border-brand/40 hover:shadow-[0_20px_30px_-10px_rgba(20,209,122,0.3)]"
                  >
                    <social.icon className={`text-3xl text-gray-400 transition-colors duration-200 ${social.hoverClass}`} />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200">{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
