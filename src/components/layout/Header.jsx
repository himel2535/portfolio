import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Work', to: 'work' },
    { name: 'Services', to: 'services' },
    { name: 'Blog', to: 'blog' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#112240]/40 backdrop-blur-xl shadow-lg shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="navbar container mx-auto px-4 py-2">
        <div className="navbar-start">
          <div className="dropdown" ref={dropdownRef}>
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost lg:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            {isOpen && (
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-[#0a192f]/95 backdrop-blur-lg rounded-box w-52 border border-cyan-500/20">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.to} 
                      smooth={true} 
                      duration={500}
                      className="text-gray-300 hover:text-cyan-400 py-2 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a className="btn btn-ghost text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">Himel.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.to} 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-all duration-300 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <button className="btn btn-ghost btn-circle btn-sm text-cyan-400 hover:bg-cyan-500/10 cursor-pointer">
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
