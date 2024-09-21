// import React from 'react';
// import skills from '../data/skills'; // Import your skills array

// const Skills = () => {
//   return (
//     <div className="p-6 bg-white dark:bg-stone-800 rounded-lg shadow-md transition-colors duration-300">
//       <h2 className="text-3xl font-semibold mb-4 text-center text-black dark:text-white transition-colors duration-300">
//         Tools and Frameworks
//       </h2>
//       <div className="overflow-hidden relative group"> {/* Wrap in a group to detect hover */}
//         <div className="flex items-center space-x-6 group-hover:animate-marquee"> {/* Animation triggers on hover */}
//           {/* Duplicate the skills array to create seamless scroll */}
//           {[...skills, ...skills].map((skill, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 flex flex-col items-center transform transition-transform duration-500 hover:scale-105 text-black dark:text-white"
//             >
//               <div className="w-24 h-24 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full transition-colors duration-300">
//                 <i className={`${skill.icon} text-6xl`}></i>
//               </div>
//               <p className="mt-2">{skill.name}</p> {/* Tool name */}
//             </div>
//           ))}
//         </div>
//       </div>
//       <p className="text-center text-gray-500 dark:text-gray-400 mt-6 transition-colors duration-300">
//         in My Belt
//       </p>
//     </div>
//   );
// };

// export default Skills;

import React, { useRef } from 'react';
import skills from '../data/skills'; // Import your skills array

const Skills = () => {
  const scrollContainer = useRef(null);

  const handleMouseEnter = () => {
    if (scrollContainer.current) {
      scrollContainer.current.style.animationPlayState = 'running'; // Start scrolling
    }
  };

  const handleMouseLeave = () => {
    if (scrollContainer.current) {
      scrollContainer.current.style.animationPlayState = 'paused'; // Stop scrolling
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-stone-800 rounded-lg shadow-md transition-colors duration-300">
      <h2 className="text-3xl font-semibold mb-4 text-center text-black dark:text-white transition-colors duration-300">
        Tools and Frameworks
      </h2>
      <div
        className="overflow-hidden relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex items-center space-x-6 animate-marquee"
          ref={scrollContainer}
          style={{ animationPlayState: 'paused' }} // Start with scrolling paused
        >
          {/* Duplicate the skills array multiple times */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center transform transition-transform duration-500 hover:scale-105 text-black dark:text-white"
            >
              <div className="w-24 h-24 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full transition-colors duration-300">
                <i className={`${skill.icon} text-6xl`}></i>
              </div>
              <p className="mt-2">{skill.name}</p> {/* Tool name */}
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-gray-500 dark:text-gray-400 mt-6 transition-colors duration-300">
        in My Belt
      </p>
    </div>
  );
};

export default Skills;

