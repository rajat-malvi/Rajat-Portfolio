// src/components/HomePage.js
import { Link, Routes, Route } from 'react-router-dom'; // Import all necessary components
import About from './About'; // Import the required components
import Skills from './Skills';
import Projects from './Projects';
import ContactLinks from './ContactLinks';
import Achievement from './Achievement';


function Home() {
  return (
    <div>
      <About />
      <Projects />
      <Skills />
      <Achievement />
      <ContactLinks />
      
    </div>
  );
}

export default Home;
