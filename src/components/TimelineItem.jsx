import React from 'react';

function TimelineItem({ year, title, duration, details }) {
   return (
      <div className="flex flex-col md:flex-row mb-8">
         <div className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
            <div className="text-xl md:text-2xl font-bold text-stone-900 dark:text-white">
               {year}
            </div>
            <div className="w-1 h-full bg-stone-200 dark:bg-stone-700 mt-2 md:mt-4 flex-grow"></div>
         </div>
         <div className="md:w-2/3 bg-white dark:bg-stone-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-lg md:text-xl font-semibold text-stone-900 dark:text-white mb-2">
               {title}
            </h3>
            <span className="inline-block px-3 py-1 text-sm font-medium text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-700 rounded-full mb-2">
               {duration}
            </span>
            <p className="text-base text-stone-700 dark:text-stone-300">
               {details}
            </p>
         </div>
      </div>
   );
}

export default TimelineItem;
