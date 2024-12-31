// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <header className="h-16 bg-slate-600 flex justify-between items-center">
      <div className="mx-4 border border-transparent">
        <h2 className="text-white text-lg font-handwritten" style={{ fontFamily: "'Patrick Hand', cursive" }}>
          Rajat Malviya
        </h2>
      </div>
      <nav className="text-cyan-50" aria-label="Main Navigation">
        <ul className="mx-4 flex items-center gap-8">
          <li>
            <Link to="/" className="hover:text-cyan-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-cyan-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-cyan-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/student-info" className="hover:text-cyan-300">
              Student Info
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
