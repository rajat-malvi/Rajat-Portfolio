import React from 'react';

function Achievement() {
  const achievements = [
    {
      title: 'Completed 50+ Projects',
      description: 'Successfully built and deployed over 50 web and software projects.',
      iconClass: 'fas fa-code',
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributed to multiple open-source projects, enhancing the community.',
      iconClass: 'fas fa-code-branch',
    },
    {
      title: 'Top Performer in Web Development',
      description: 'Recognized as a top performer in various web development competitions.',
      iconClass: 'fas fa-trophy',
    },
    {
      title: 'Published Technical Blogs',
      description: 'Authored several technical blogs sharing knowledge on web development.',
      iconClass: 'fas fa-pencil-alt',
    },
  ];

  return (
    <section id="achievements" className="py-16 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Achievements</h2>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-lg">
              <i className={`${achievement.iconClass} text-blue-500 text-3xl`}></i>
              <div>
                <h3 className="text-lg font-semibold">{achievement.title}</h3>
                <p className="text-sm text-blue-300">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievement;
