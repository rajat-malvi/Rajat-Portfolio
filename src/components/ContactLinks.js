import React from 'react';
import { contectLinkes } from '../config';

function ContactLinks() {
  
  return (
    <section id="contact-links" className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Connect with Me</h2>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {contectLinkes.map((link, index) => (
            <div key={index} className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src={link.logoUrl} alt={`${link.name} logo`} className="w-8 h-8" />
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-300 hover:text-blue-500"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactLinks;
