// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import StarryBackground from './components/StarryBackground';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen">
        {/* Starry Background */}
        <StarryBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Project" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
