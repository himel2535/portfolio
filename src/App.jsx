import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Banner from './components/sections/Banner';
// import ClientLogos from './components/sections/ClientLogos';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Activities from './components/sections/Activities';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen bg-dark text-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Banner />
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        {/* <div id="experience">
          <Experience />
        </div> */}
        <div id="education">
          <Education />
        </div>
        <div id="about">
          <About/> 
        </div>

        <div id="activities">
          <Activities />
        </div>
        <div id="contact">
          <Contact />
          <ToastContainer />
        </div>
        {/* Placeholders for missing sections if needed */}
        <div id="blog"></div>
        <div id="faq"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
