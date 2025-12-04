import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter an email!");
    toast.success("Subscribed successfully!", {
      style: {
        background: "#2563eb", // bluish color
        color: "#fff"
      },
    });
    setEmail("");
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4">

        {/* FAQ Section */}
        <div className="mb-20 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Answers You Might Be Looking For
            </h2>
          </div>

          <div className="join join-vertical w-full space-y-3">

            {/* Q1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="collapse collapse-arrow join-item bg-base-200/20 border border-white/10 rounded-xl"
            >
              <input type="radio" name="faq" defaultChecked />
              <div className="collapse-title text-lg font-semibold">
                Why should you hire me as a Full-Stack Developer?
              </div>
              <div className="collapse-content text-gray-300">
                <p>
                  I bring strong skills in both frontend and backend 
                  (React, Node, MongoDB, Express).  
                  I focus on building fast, clean, user-friendly applications and 
                  I’m committed to learning new technologies quickly.
                </p>
              </div>
            </motion.div>

            {/* Q2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="collapse collapse-arrow join-item bg-base-200/20 border border-white/10 rounded-xl"
            >
              <input type="radio" name="faq" />
              <div className="collapse-title text-lg font-semibold">
                Do you work remotely?
              </div>
              <div className="collapse-content text-gray-300">
                <p>
                  Yes! I can collaborate with teams remotely using GitHub, Slack, Zoom, 
                  and other modern tools. Comfortable with async workflows too.
                </p>
              </div>
            </motion.div>

            {/* Q3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="collapse collapse-arrow join-item bg-base-200/20 border border-white/10 rounded-xl"
            >
              <input type="radio" name="faq" />
              <div className="collapse-title text-lg font-semibold">
                Are you available for full-time or internship roles?
              </div>
              <div className="collapse-content text-gray-300">
                <p>
                  Yes! I am actively looking for opportunities where I can grow, 
                  contribute, and work on real-world projects as a full-stack developer.
                </p>
              </div>
            </motion.div>

            {/* Q4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="collapse collapse-arrow join-item bg-base-200/20 border border-white/10 rounded-xl"
            >
              <input type="radio" name="faq" />
              <div className="collapse-title text-lg font-semibold">
                What technologies do you specialize in?
              </div>
              <div className="collapse-content text-gray-300">
                <p>
                  I primarily work with React, JavaScript, Tailwind, Node.js, Express, 
                  MongoDB, Firebase, and REST APIs.  
                  I also enjoy working with animations & UI/UX.
                </p>
              </div>
            </motion.div>

          </div>
        </div>


        {/* Contact Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-10 mb-12"
        >
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 text-2xl">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 text-2xl">
            <FaLinkedinIn />
          </a>
          <a href="mailto:youremail@example.com" className="text-gray-300 hover:text-blue-500 text-2xl">
            <FaEnvelope />
          </a>
          <a href="tel:+8801782255880" className="text-gray-300 hover:text-blue-500 text-2xl">
            <FaPhoneAlt />
          </a>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-900/40 to-gray-800 p-8 md:p-16 rounded-3xl text-center border border-white/5 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Subscribe to get updates, new projects, and insights from my developer journey.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered w-full bg-gray-700/50 backdrop-blur-sm focus:input-primary"
              />
              <button type="submit" className="btn btn-primary px-8">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
