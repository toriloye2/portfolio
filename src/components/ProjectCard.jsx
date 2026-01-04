import { motion } from 'motion/react';

function ProjectCard({ project }) {
	const { title, imgUrl, info, stack, link } = project;

	return (
		<motion.div
			layout
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.3 }}
			className="group relative bg-stone-900 rounded-2xl overflow-hidden"
		>
			{/* Accent dot */}
			<div className="absolute top-4 left-4 z-10">
				<motion.div
					className="w-4 h-4 bg-blue-500 rounded-full"
					whileHover={{ scale: 1.2 }}
					transition={{ type: 'spring', stiffness: 400, damping: 10 }}
				/>
			</div>

			{/* Image section */}
			<div className="relative h-40 overflow-hidden">
				<motion.img
					src={imgUrl}
					alt={title}
					className="w-full h-full object-cover"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.4 }}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
			</div>

			{/* Content section */}
			<div className="p-5 space-y-4">
				{/* Title bar */}
				<div className="space-y-2">
					<div className="h-2 bg-stone-700 rounded-full w-3/4" />
					<div className="h-2 bg-stone-700 rounded-full w-full" />
					<div className="h-2 bg-stone-700 rounded-full w-5/6" />
				</div>

				{/* Hidden content that shows on hover */}
				<motion.div
					className="absolute inset-0 bg-stone-900/95 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				>
					<div>
						<h3 className="text-xl font-bold text-white mb-3">{title}</h3>
						<p className="text-stone-400 text-sm leading-relaxed mb-4">{info}</p>

						{/* Tech stack */}
						<div className="flex flex-wrap gap-2">
							{stack.slice(0, 4).map((tech, idx) => (
								<span
									key={idx}
									className="text-xs px-2 py-1 bg-stone-800 text-stone-300 rounded-md"
								>
									{tech}
								</span>
							))}
							{stack.length > 4 && (
								<span className="text-xs px-2 py-1 bg-stone-800 text-stone-400 rounded-md">
									+{stack.length - 4}
								</span>
							)}
						</div>
					</div>

					{/* Action button */}
					<motion.a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-colors"
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						View Project
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</motion.a>
				</motion.div>
			</div>

			{/* Bottom bars */}
			<div className="px-5 pb-5 space-y-2">
				<div className="h-2 bg-stone-700 rounded-full w-full" />
				<div className="h-2 bg-stone-700 rounded-full w-4/5" />
			</div>
		</motion.div>
	);
}

export default ProjectCard;
