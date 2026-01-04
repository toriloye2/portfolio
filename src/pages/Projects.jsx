import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import portfolio from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const filters = ['All', 'Full Stack', 'Frontend'];

function Projects() {
	const [activeFilter, setActiveFilter] = useState('All');
	const [selectedProject, setSelectedProject] = useState(null);

	const filteredProjects = activeFilter === 'All'
		? portfolio
		: portfolio.filter(project => project.category === activeFilter);

	return (
		<div className="min-h-screen py-16 px-4">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-5xl md:text-7xl font-bold text-stone-900 dark:text-white mb-6">
						My Projects
					</h1>
					<p className="text-stone-500 dark:text-stone-400 text-lg max-w-2xl mx-auto">
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
									? 'bg-blue-500 dark:bg-orange-500 text-white shadow-lg shadow-blue-500/25 dark:shadow-orange-500/25'
									: 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-300 dark:hover:bg-stone-700 hover:text-stone-900 dark:hover:text-white'
							}`}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{filter}
						</motion.button>
					))}
				</motion.div>

				{/* Projects grid with layout animation */}
				<LayoutGroup>
					<motion.div
						layout
						className="grid grid-cols-1 sm:grid-cols-2 gap-5"
					>
						<AnimatePresence mode="popLayout">
							{filteredProjects.map((project) => (
								<ProjectCard
									key={project.id}
									project={project}
									onClick={() => setSelectedProject(project)}
								/>
							))}
						</AnimatePresence>
					</motion.div>

					{/* Modal */}
					<AnimatePresence>
						{selectedProject && (
							<ProjectModal
								project={selectedProject}
								onClose={() => setSelectedProject(null)}
							/>
						)}
					</AnimatePresence>
				</LayoutGroup>

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
