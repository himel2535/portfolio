import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded flex flex-col">
      <div className='flex flex-col justify-between items-center gap-4'>
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav> 
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/monwarhossin.himel" target="_blank"
          rel="noopener noreferrer" 
          className="text-2xl hover:text-primary transition-colors"><FaFacebook /></a>
          <a href={"https://github.com/himel2535"} target="_blank"
          rel="noopener noreferrer" 
          className="text-2xl hover:text-primary transition-colors"><FaGithub /></a>
          <a href={"https://www.linkedin.com/in/monwar-hossan-himel/"} target="_blank"
          rel="noopener noreferrer" 
          className="text-2xl hover:text-primary transition-colors"><FaLinkedin /></a>
          
        </div>
      </nav> 
      </div>
      <div className='text-center'>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Anders Antonsen</p>
      </div>
    </footer>
  );
};

export default Footer;
