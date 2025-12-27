import { useState } from 'react';

function PortfolioItem({ title, imgUrl, info, stack, link }) {
   const [isFlipped, setIsFlipped] = useState(false);

   const handleFlip = (e) => {
      e.preventDefault();
      setIsFlipped(!isFlipped);
   };

   return (
      <div className="group relative block bg-gray-900 rounded-xl overflow-hidden shadow-lg border-2 border-gray-300 dark:border-gray-600 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-2xl w-[300px] h-[400px] perspective">
         <div className={`card-inner w-full h-full transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}>
            {/* Front of the card */}
            <div className="card-face bg-gray-900 text-white rounded-xl shadow-lg backface-hidden">
               <div className="relative overflow-hidden h-[65%]">
                  <img
                     src={imgUrl}
                     alt={`Screenshot of ${title} project`}
                     loading="lazy"
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
                     className="bg-blue-600 text-white font-bold text-lg px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                     aria-label={`View ${title} project`}
                  >
                     View Project
                  </a>
               </div>

               {/* Project details with title and info icon */}
               <div className="relative p-6 bg-white dark:bg-gray-800 z-10 h-[35%] flex flex-col justify-between rounded-b-xl">
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                     {title}
                  </h3>

                  {/* Info Icon to trigger the flip */}
                  <div className="flex justify-end">
                     <button
                        onClick={handleFlip}
                        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
                        aria-label={`Show details for ${title}`}
                     >
                        <i className="fas fa-info-circle text-3xl"></i>
                     </button>
                  </div>
               </div>
            </div>

            {/* Back of the card */}
            <div className="card-face bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl shadow-lg rotate-y-180 backface-hidden overflow-y-auto overflow-x-hidden custom-scrollbar">
               <div className="p-6">
                  <h4 className="text-2xl font-bold mb-3 text-center text-blue-600 dark:text-blue-400">About</h4>
                  <p className="mb-6 text-base leading-relaxed">
                     {info || 'No information available.'}
                  </p>

                  <h4 className="text-xl font-bold mb-3 text-center text-blue-600 dark:text-blue-400">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                     {stack.map((item, idx) => (
                        <span
                           key={idx}
                           className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                        >
                           {item}
                        </span>
                     ))}
                  </div>

                  {/* Button to flip the card back */}
                  <button
                     className="w-full flex items-center justify-center px-6 py-3 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors duration-200"
                     onClick={handleFlip}
                     aria-label="Go back to project card"
                  >
                     <i className="fas fa-arrow-left mr-2"></i>
                     Go Back
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PortfolioItem;
