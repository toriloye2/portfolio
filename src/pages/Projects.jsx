import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import portfolio from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';

const filters = ['All', 'Full Stack', 'Frontend'];

function Projects() {
	const [activeFilter, setActiveFilter] = useState('All');

	const filteredProjects = activeFilter === 'All'
		? portfolio
		: portfolio.filter(project => project.category === activeFilter);

	return (
		<div className="min-h-screen bg-stone-950 py-16 px-4">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
						My Projects
					</h1>
					<p className="text-stone-400 text-lg max-w-2xl mx-auto">
						A collection of projects showcasing my skills in web development
					</p>
				</motion.div>

				{/* Filter buttons */}
				<motion.div
					className="flex flex-wrap justify-center gap-3 mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{filters.map((filter) => (
						<motion.button
							key={filter}
							onClick={() => setActiveFilter(filter)}
							className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
								activeFilter === filter
									? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
									: 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white'
							}`}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{filter}
						</motion.button>
					))}
				</motion.div>

				{/* Projects grid with layout animation */}
				<motion.div
					layout
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
				>
					<AnimatePresence mode="popLayout">
						{filteredProjects.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</AnimatePresence>
				</motion.div>

				{/* Empty state */}
				{filteredProjects.length === 0 && (
					<motion.div
						className="text-center py-20"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
					>
						<p className="text-stone-500 text-lg">No projects found in this category.</p>
					</motion.div>
				)}

				{/* Project count */}
				<motion.div
					className="text-center mt-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
				>
					<p className="text-stone-500">
						Showing {filteredProjects.length} of {portfolio.length} projects
					</p>
				</motion.div>
			</div>
		</div>
	);
}

export default Projects;
