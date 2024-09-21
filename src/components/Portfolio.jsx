import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
   return (
      <div className="flex flex-col items-center justify-center py-12">
         <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Projects</h2>
         {/* Horizontal Scroll Wrapper */}
         <div className="w-full max-w-7xl bg-white dark:bg-stone-800 p-8 rounded-lg shadow-lg overflow-hidden">
            {/* Flex container for horizontal scroll */}
            <div className="flex items-center space-x-6 animate-marquee">
               {/* Duplicate the portfolio items for infinite scroll effect */}
               {[...portfolio, ...portfolio].map((project, index) => (
                  <PortfolioItem
                     key={index}
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
