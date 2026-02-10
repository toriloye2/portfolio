import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
   return (
      <div className="flex flex-col items-center justify-center py-12">
         <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Projects</h2>

         {/* Static container for portfolio items */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {portfolio.map((project, index) => (
               <PortfolioItem
                  key={index}
                  imgUrl={project.imgUrl}
                  title={project.title}
                  info={project.info}
                  stack={project.stack}
                  link={project.link}
               />
            ))}
         </div>
      </div>
   );
}

export default Portfolio;
