export let projects = [
    {
      id: 1,
      title: "Image Editor App",
      description: "A Flask-based photo editing application that allows users to upload images, apply filters, adjust brightness, contrast, and make other enhancements. Includes OCR functionality to extract text from images.",
      technologies: ["React", "Flask", "Pillow", "Tesseract OCR"],
      link: "https://your-image-editor-app-link.com"
    },
    {
      id: 2,
      title: "News Scraping Website",
      description: "A web scraper that gathers, cleans, and stores news articles in a PostgreSQL database. Implements sentiment analysis to gauge article tone and relevance.",
      technologies: ["BeautifulSoup", "NLTK", "Flask", "PostgreSQL"],
      link: "https://your-news-scraper-project.com"
    },
    {
      id: 3,
      title: "Music Recommendation Web App",
      description: "A domain-driven design project that recommends music playlists based on user health conditions or mood, leveraging the Jamendo API.",
      technologies: ["React", "Node.js", "Jamendo API", "CSS"],
      link: "https://your-music-app-link.com"
    }
];

//  links for contect
export const contectLinkes =[
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




// skills set
export const skills = [
  {
    category: 'Technical Skills',
    items: [
      'Frontend Development: React, JavaScript, HTML, CSS, Tailwind CSS',
      'Backend Development: Node.js, Express, Python',
      'Version Control: Git, GitHub',
      'Database Management: MongoDB, PostgreSQL',
      'Tools & Libraries: Redux, Webpack, Bootstrap, Material-UI',
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      'Problem-solving & Critical Thinking',
      'Effective Communication & Collaboration',
      'Adaptability & Continuous Learning',
      'Time Management & Organization',
    ],
  },
];

