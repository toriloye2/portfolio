import React from 'react';
import skills from '../data/skills'; // Import the skills array

const Skills = () => {
  return (
    <div className="p-6 bg-stone dark:bg-stone-800 rounded-lg shadow-md"> {/* Added a box style */}
      <h2 className="text-3xl font-semibold mb-4 text-center dark:text-white">My Skills</h2>
      <div className="grid grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transform transition-transform duration-500 hover:scale-105 dark:text-gray-300"
          >
            {/* Add the icon inside a circle */}
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
              <i className={`${skill.icon} text-4xl`}></i> {/* Adjusted the icon size */}
            </div>
            {/* Display the skill name */}
            <p className="mt-2 text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
