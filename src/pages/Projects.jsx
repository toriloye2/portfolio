import portfolio from '../data/portfolio';
import PortfolioItem from '../components/PortfolioItem';

function Projects() {
	return (
		<div className="min-h-screen py-12 px-4">
			<div className="max-w-6xl mx-auto">
				{/* Page Header */}
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
					<p className="text-stone-600 dark:text-stone-400 text-lg max-w-2xl mx-auto">
						A collection of projects I've built, ranging from web applications to full-stack solutions.
					</p>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
		</div>
	);
}

export default Projects;
