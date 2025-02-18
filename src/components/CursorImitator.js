import React, { useState, useEffect } from "react";

const roles = ["Data Scientist", "Machine Learning Engineer", "Software Developer"];

const CursorImitator = ({ nextLetterTime = 100, waitAtEnd = 1000, blinkSpeed = 500 }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true); // State for cursor blinking

  // Typing effect
  useEffect(() => {
    if (typing) {
      if (index < roles[currentRole].length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + roles[currentRole][index]);
          setIndex(index + 1);
        }, nextLetterTime);
        return () => clearTimeout(timeout);
      } else {
        setTyping(false);
        setTimeout(() => {
          setTyping(true);
          setDisplayText("");
          setIndex(0);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, waitAtEnd);
      }
    }
  }, [index, typing, currentRole, nextLetterTime, waitAtEnd]);

  // Blinking cursor effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, blinkSpeed);
    return () => clearInterval(blinkInterval);
  }, [blinkSpeed]);

  return (
    <h3 className="text-xl font-medium text-gray-300 mb-4">
      Sophomore at Sitare University | <span className="text-blue-500">{displayText}</span>
      <span className="animate-blink">{showCursor ? "|" : " "}</span>
    </h3>
  );
};

export default CursorImitator;
