function TimelineItem({ year, title, duration, details }) {
   return (
      <div className="flex flex-col md:flex-row mb-8">
         <div className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
            <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
               {year}
            </div>
            <div className="w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 mt-2 md:mt-4 flex-grow rounded-full"></div>
         </div>
         <div className="md:w-2/3 bg-white dark:bg-stone-800 shadow-lg hover:shadow-xl rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] border-l-4 border-blue-500">
            <h3 className="text-lg md:text-xl font-semibold text-stone-900 dark:text-white mb-2">
               {title}
            </h3>
            {duration && (
               <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3">
                  {duration}
               </span>
            )}
            <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed">
               {details}
            </p>
         </div>
      </div>
   );
}

export default TimelineItem;
