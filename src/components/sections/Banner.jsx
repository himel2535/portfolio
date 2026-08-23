import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImage from '../../assets/profileImage.jpg';
import laptopGlow from '../../assets/laptop-glow.png';
import {
  viewportOnce,
  staggerContainer,
  fadeUpItem,
  easeOutExpo,
  duration,
  microTransition,
} from '../../lib/motion';

const Banner = () => {
  const titleText = 'Full-Stack Engineer';
  const nameText = 'Monwar Hossan Himel';

  return (
    <section
      id="hero"
      className="min-h-[100svh] md:min-h-[85vh] flex items-center justify-center px-4 sm:px-6 relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-20 md:pb-12"
    >
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.div
            className="flex flex-col text-center md:text-left"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              className="text-[1.65rem] leading-tight sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 name-grad"
              variants={fadeUpItem}
            >
              {nameText}
            </motion.h2>

            <motion.h1
              className="text-base sm:text-xl md:text-3xl font-semibold mb-4 sm:mb-6 text-[#F4D03F]"
              variants={fadeUpItem}
            >
              {titleText}
            </motion.h1>

            <motion.p
              variants={fadeUpItem}
              className="text-gray-300/90 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed px-1"
            >
              Full-Stack Software Engineer with 1.5+ years of experience independently building and shipping scalable, end-to-end SaaS and ERP platforms. A dependable Agile contributor recognized for clean code, strong problem-solving, and consistent, on-time delivery.
            </motion.p>

            <motion.div
              variants={fadeUpItem}
              className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4"
            >
              <Link to="about" smooth={true} duration={500} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={microTransition}
                  className="btn-grad btn-grad-sm w-full sm:w-auto gap-2 normal-case tracking-wide"
                >
                  More About Me
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </Link>

              <a href="https://drive.google.com/file/d/1y1YujlHV6y8byb-sJ_NGtwsrLMjxQe-k/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={microTransition}
                  className="btn-grad btn-grad-sm w-full sm:w-auto gap-2 normal-case tracking-wide"
                >
                  Download CV
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </motion.button>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUpItem}
              className="mt-8 sm:mt-10 md:mt-12"
            >
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">Find me on</p>
              <div className="flex justify-center md:justify-start gap-3 sm:gap-4">
                {[
                  {
                    href: 'mailto:monwarhossanhimel@gmail.com',
                    label: 'Email',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://github.com/himel2535',
                    label: 'GitHub',
                    external: true,
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://www.linkedin.com/in/monwar-hossan-himel/',
                    label: 'LinkedIn',
                    external: true,
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://wa.me/8801617721429',
                    label: 'WhatsApp',
                    external: true,
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={microTransition}
                    className="w-11 h-11 sm:w-10 sm:h-10 border border-[#16A085]/35 hover:border-[#16A085] rounded-full flex items-center justify-center text-gray-300 hover:text-[#16A085] bg-[#16A085]/35 hover:bg-[#F4D03F]/20"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Image Content — first on mobile */}
        <div className="flex justify-center items-center md:justify-end relative order-1 md:order-2 mb-2 md:mb-0">
          <div className="relative">
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[210%] pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: duration.entranceSlow, delay: 0.4, ease: easeOutExpo }}
              >
                <h1
                  className="text-[2rem] sm:text-[3.25rem] md:text-[5rem] font-bold leading-none whitespace-nowrap"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(22, 160, 133, 0.22)',
                    userSelect: 'none',
                  }}
                >
                  Software <br /> Engineer
                </h1>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: duration.entranceSlow, delay: 0.3, ease: easeOutExpo }}
              className="relative z-10"
            >
              <div className="relative w-[15.5rem] h-[17.5rem] sm:w-72 sm:h-80 md:w-[26rem] md:h-[30rem] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#16A085]/30 glow-brand shadow-2xl">
                <img
                  src={laptopGlow}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover scale-110"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#16A085]/35 via-black/45 to-black/75 pointer-events-none" />
                <div className="absolute inset-2.5 sm:inset-3 md:inset-4 rounded-xl sm:rounded-2xl overflow-hidden border border-[#16A085]/25 shadow-lg">
                  <img
                    src={profileImage}
                    alt="Monwar Hossan Himel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
