import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link }) {
   return (
      <a
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="group relative block bg-gray-900 rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 dark:border-gray-600 transition-transform duration-300 hover:scale-105 hover:border-blue-500"
      >
         <div className="relative overflow-hidden">
            <img
               src={imgUrl}
               alt="portfolio"
               className="w-full h-40 md:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-100"></div>
         </div>
         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold text-lg">View Project</p>
         </div>
         <div className="relative p-6 bg-white dark:bg-gray-800 z-10">
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors duration-300">
               {title}
            </h3>
            <div className="flex flex-wrap gap-3">
               {stack.map((item, index) => (
                  <span
                     key={index}
                     className="text-sm font-semibold bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-1 px-3 rounded-full shadow-md transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white"
                  >
                     {item}
                  </span>
               ))}
            </div>
         </div>
      </a>
   );
}

export default PortfolioItem;
