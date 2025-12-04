import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const navItems = [
    { name: 'Work', to: 'work' },
    { name: 'Services', to: 'services' },
    { name: 'Blog', to: 'blog' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-content/10">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.to} smooth={true} duration={500}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Anders.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.to} smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <button className="btn btn-ghost btn-circle btn-sm">
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
