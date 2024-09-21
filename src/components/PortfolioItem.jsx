import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa'; // Info icon import

function PortfolioItem({ title, imgUrl, info, stack, link }) {
   const [showModal, setShowModal] = useState(false); // State to handle modal visibility

   const handleModalToggle = (e) => {
      e.preventDefault(); // Prevent default action from opening link immediately
      setShowModal(!showModal);
   };

   return (
      <div className="group relative block bg-gray-900 rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 dark:border-gray-600 transition-transform duration-300 hover:scale-105 hover:border-gray-500 w-[300px] h-[400px]"> {/* Increased width and height */}
         {/* Portfolio image with hover effects */}
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
         <div className="relative p-6 bg-white dark:bg-gray-800 z-10 h-[35%] flex flex-col justify-between"> {/* Adjusted height for the details */}
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2 group-hover:text-gray-500 transition-colors duration-300">
               {title}
            </h3>

            {/* Info Icon to open modal */}
            <div className="flex justify-end">
               <button onClick={handleModalToggle} className="text-gray-500 hover:text-gray-700 dark:text-white">
                  <FaInfoCircle size={28} /> {/* Increased icon size */}
               </button>
            </div>
         </div>

         {/* Modal for info and stack details */}
         {showModal && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
               <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg max-w-4xl w-[80%] h-[80%]"> {/* Larger popup */}
                  <h4 className="text-3xl font-bold mb-4 text-center">About</h4>
                  <p className="mb-8 text-lg">{info ? info : 'No information available.'}</p> {/* Ensure the info displays */}

                  <h4 className="text-2xl font-bold mb-4 text-center">Tech Stack</h4>
                  <ul className="list-disc pl-4 text-lg">
                     {stack.map((item, idx) => (
                        <li key={idx}>{item}</li>
                     ))}
                  </ul>
                  <button
                     className="mt-8 px-8 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 w-full"
                     onClick={handleModalToggle}
                  >
                     Close
                  </button>
               </div>
            </div>
         )}
      </div>
   );
}

export default PortfolioItem;
