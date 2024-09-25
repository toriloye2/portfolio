import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // Font Awesome icon import for Go Back button

function PortfolioItem({ title, imgUrl, info, stack, link }) {
   const [isFlipped, setIsFlipped] = useState(false); // State to handle flip

   const handleFlip = (e) => {
      e.preventDefault();
      setIsFlipped(!isFlipped); // Toggle the flip state
   };

   return (
      <div className="group relative block bg-gray-900 rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 dark:border-gray-600 transition-transform duration-300 hover:scale-105 hover:border-gray-500 w-[300px] h-[400px] perspective">
         <div className={`relative w-full h-full transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}>
            {/* Front of the card */}
            <div className="absolute w-full h-full bg-gray-900 text-white rounded-lg shadow-lg backface-hidden">
               <div className="relative overflow-hidden h-[65%]"> {/* Adjusted height for the image */}
                  <img
                     src={imgUrl}
                     alt={title}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-100"></div>
               </div>

               {/* "View Project" button overlay */}
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                     href={link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-white font-bold text-lg"
                  >
                     View Project
                  </a>
               </div>

               {/* Project details with title and info icon */}
               <div className="relative p-6 bg-white dark:bg-gray-800 z-10 h-[35%] flex flex-col justify-between">
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2 group-hover:text-gray-500 transition-colors duration-300">
                     {title}
                  </h3>

                  {/* Info Icon to trigger the flip */}
                  <div className="flex justify-end">
                     <button onClick={handleFlip} className="text-gray-500 hover:text-gray-700 dark:text-white">
                        <i className="fas fa-info-circle" style={{ fontSize: '28px' }}></i> {/* Info icon */}
                     </button>
                  </div>
               </div>
            </div>

            {/* Back of the card */}
            <div className="absolute w-full h-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-lg rotate-y-180 backface-hidden overflow-y-auto overflow-x-hidden scroll-custom"> {/* Added .scroll-custom class */}
               <div className="p-6">
                  <h4 className="text-3xl font-bold mb-4 text-center">About</h4>
                  <p className="mb-8 text-lg">
                     {info ? info : 'No information available.'}
                  </p>

                  <h4 className="text-2xl font-bold mb-4 text-center">Tech Stack</h4>
                  <ul className="list-disc pl-4 text-lg">
                     {stack.map((item, idx) => (
                        <li key={idx}>{item}</li>
                     ))}
                  </ul>

                  {/* Button to flip the card back */}
                  <button
                     className="mt-8 flex items-center justify-center px-8 py-3 bg-red-500 text-white text-lg rounded-md hover:bg-red-600 w-md"
                     onClick={handleFlip}
                  >
                     <FaArrowLeft className="mr-2" /> {/* Font Awesome "Go Back" Icon */}
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PortfolioItem;
