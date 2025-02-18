import React from 'react';
import { skills } from '../config';

function Skills() {

  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{skillCategory.category}</h3>
              <ul className="list-none space-y-4">
                {skillCategory.items.map((item, idx) => (
                  <li key={idx} className="text-lg">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
