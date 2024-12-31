import React from 'react';

function ContactLinks() {
  const links = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yourprofile',
      iconClass: 'fab fa-linkedin-in',
      logoUrl: 'https://www.linkedin.com/favicon.ico', // Add the logo URL
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      iconClass: 'fab fa-github',
      logoUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', // Add the logo URL
    },
    {
      name: 'Hugging Face',
      url: 'https://huggingface.co/yourusername',
      iconClass: 'fab fa-hugging-face',
      logoUrl: 'https://huggingface.co/favicon.ico', // Add the logo URL
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/yourusername',
      iconClass: 'fab fa-leetcode',
      logoUrl: 'https://www.leetcode.com/favicon.ico', // Add the logo URL
    },
  ];

  return (
    <section id="contact-links" className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Connect with Me</h2>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {links.map((link, index) => (
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
