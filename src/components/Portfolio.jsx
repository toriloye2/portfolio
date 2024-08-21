import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
   return (
      <div className="flex flex-col items-center justify-center py-12">
         <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Projects</h2>
         <div className="w-full max-w-7xl bg-white dark:bg-stone-800 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {portfolio.map((project, index) => (
                  <PortfolioItem
                     key={index} // Add a key prop for performance
                     imgUrl={project.imgUrl}
                     title={project.title}
                     stack={project.stack}
                     link={project.link}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default Portfolio;
