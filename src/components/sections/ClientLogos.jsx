import React from 'react';
import { FaGoogle, FaSlack, FaYoutube, FaSpotify, FaAmazon } from 'react-icons/fa';
import { SiNetflix, SiChevrolet, SiAdobe } from 'react-icons/si';

const ClientLogos = () => {
  const logos = [
    { icon: <FaGoogle />, name: 'Google' },
    { icon: <SiNetflix />, name: 'Netflix' },
    { icon: <SiChevrolet />, name: 'Chevrolet' },
    { icon: <FaSlack />, name: 'Slack' },
    { icon: <FaSpotify />, name: 'Spotify' },
    { icon: <SiAdobe />, name: 'Adobe' },
  ];

  return (
    <section className="py-10 bg-dark border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <div key={index} className="text-3xl md:text-4xl hover:text-white transition-colors cursor-pointer" title={logo.name}>
              {logo.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
