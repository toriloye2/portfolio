import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import portfolio from '../data/portfolio';

// Get first 2 as featured, rest as smaller cards
const featuredProjects = portfolio.slice(0, 2);
const otherProjects = portfolio.slice(2, 4);

function FeaturedProjects() {
	const prefersReducedMotion = useReducedMotion();
	const [hoveredId, setHoveredId] = useState(null);

	return (
		<section id="projects" className="py-24 px-6">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<span className="inline-block text-sm font-medium tracking-widest text-blue-600 dark:text-orange-400 mb-4 uppercase">
						Portfolio
					</span>
					<h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4">
						Featured Projects
					</h2>
					<p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
						A selection of my recent work showcasing full-stack development skills
					</p>
				</motion.div>

				{/* Featured Projects - Large Cards */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					{featuredProjects.map((project, index) => (
						<motion.a
							key={project.id}
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="group relative block rounded-3xl overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							onMouseEnter={() => setHoveredId(project.id)}
							onMouseLeave={() => setHoveredId(null)}
							whileHover={prefersReducedMotion ? {} : { y: -8 }}
							style={{ perspective: '1000px' }}
						>
							{/* Image container */}
							<div className="relative aspect-[16/10] overflow-hidden">
								<motion.img
									src={project.imgUrl}
									alt={project.title}
									className="w-full h-full object-cover"
									animate={hoveredId === project.id && !prefersReducedMotion ? { scale: 1.05 } : { scale: 1 }}
									transition={{ duration: 0.4, ease: 'easeOut' }}
								/>
								{/* Overlay gradient */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
							</div>

							{/* Content overlay */}
							<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
								<span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-500/80 dark:bg-orange-500/80 text-white mb-3">
									{project.category}
								</span>
								<h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
									{project.title}
								</h3>
								<p className="text-stone-200 text-sm md:text-base line-clamp-2 mb-4">
									{project.info}
								</p>

								{/* Tech stack */}
								<div className="flex flex-wrap gap-2">
									{project.stack.slice(0, 4).map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 text-xs rounded-md bg-white/10 text-white/90 backdrop-blur-sm"
										>
											{tech}
										</span>
									))}
									{project.stack.length > 4 && (
										<span className="px-2 py-1 text-xs rounded-md bg-white/10 text-white/90 backdrop-blur-sm">
											+{project.stack.length - 4}
										</span>
									)}
								</div>

								{/* Arrow indicator */}
								<motion.div
									className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
									animate={hoveredId === project.id && !prefersReducedMotion ? { x: 4 } : { x: 0 }}
									transition={{ duration: 0.3 }}
								>
									<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</motion.div>
							</div>
						</motion.a>
					))}
				</div>

				{/* Other Projects - Smaller Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
					{otherProjects.map((project, index) => (
						<motion.a
							key={project.id}
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex gap-4 p-4 rounded-2xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-blue-300 dark:hover:border-orange-500/50 transition-all duration-300"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
							whileHover={prefersReducedMotion ? {} : { y: -4 }}
						>
							{/* Thumbnail */}
							<div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
								<img
									src={project.imgUrl}
									alt={project.title}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
								/>
							</div>

							{/* Content */}
							<div className="flex-1 min-w-0">
								<span className="text-xs font-medium text-blue-600 dark:text-orange-400">
									{project.category}
								</span>
								<h3 className="font-bold text-stone-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-orange-400 transition-colors">
									{project.title}
								</h3>
								<p className="text-sm text-stone-500 dark:text-stone-400 line-clamp-2">
									{project.info}
								</p>
							</div>
						</motion.a>
					))}
				</div>

				{/* View All Button */}
				<motion.div
					className="text-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}
				>
					<Link
						to="/projects"
						className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-full font-semibold hover:bg-stone-800 dark:hover:bg-stone-100 transition-all duration-300"
					>
						View All Projects
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}

export default FeaturedProjects;
