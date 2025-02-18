import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router v6
import CursorImitator from "./CursorImitator";
// import logo from "../assets/portfolio.jpeg"; // Corrected to use relative path

const About = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChatClick = () => {
    navigate("/contact"); // Redirect to the contact page
  };

  const handleResumeClick = () => {
    // Logic to open resume, e.g., redirect to an external URL or handle internal logic
    window.open("/resume", "_blank"); // Open resume in a new tab
  };

  // const roles = ["Data Scientist", "Machine Learning", "Software Developer"];
  // const [currentRole, setCurrentRole] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
  //   }, 3000); // Change role every 2 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly bg-transparent p-6 h-[80vh]">
      {/* Left Section: Text */}
      <div className="flex-1 text-center md:text-left w-[50vw] md:ml-52 mb-34">
        <h1 className="text-4xl font-bold text-white mb-2">Namaste 🙏, I'm</h1>
        <h2 className="text-3xl font-semibold text-blue-300 mb-2">Rajat Malviya</h2>
        <h3 className="text-xl font-medium text-gray-300 mb-4">
          <CursorImitator> </CursorImitator>
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Welcome to my portfolio! I am ex-intern with Lendingkart. I
          am a second-year student at Sitare University. I'm a passionate and
          detail-oriented developer. I have a strong understanding of
          technologies and enjoy applying them to solve real-world challenges.
          I'm proficient in building scalable and efficient solutions for
          various applications, from data analysis to web development and
          machine learning models.
        </p>
        <div className="h-14 flex mt-4">
          <button
            onClick={handleChatClick}
            className="bg-blue-300 w-40 min-h-14 border-r-8"
          >
            Chat
          </button>
          <button
            onClick={handleResumeClick}
            className="border w-40 min-h-14 border-r-8 bg-white text-black ml-16"
          >
            Resume 🧑‍💻
          </button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex items-center justify-center mr-8 md:mt-0 w-[50vw] md:mr-52 mt-32">
        <img
          src={"https://avatars.githubusercontent.com/u/143414044?v=4"}
          alt="Rajat Malviya - Portfolio"
          className="w-72 h-72 md:w-[400px] md:h-[400px] rounded-full shadow-lg object-cover border-4 border-blue-300"
        />
      </div>
    </div>
  );
};

export default About;
