import { motion } from 'motion/react';

function ProjectModal({ project, onClose }) {
	const { id, title, imgUrl, info, stack, link } = project;

	return (
		<>
			{/* Backdrop */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={onClose}
				className="fixed inset-0 bg-black/80 z-40"
			/>

			{/* Modal */}
			<div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
				<motion.div
					layoutId={`card-${id}`}
					className="bg-stone-800 rounded-2xl overflow-hidden w-full max-w-lg pointer-events-auto"
				>
					{/* Accent dot */}
					<motion.div
						layoutId={`dot-${id}`}
						className="absolute top-4 left-4 z-10 w-4 h-4 bg-blue-500 rounded-full"
					/>

					{/* Close button */}
					<button
						onClick={onClose}
						className="absolute top-4 right-4 z-10 w-8 h-8 bg-stone-700 hover:bg-stone-600 rounded-full flex items-center justify-center text-white transition-colors"
					>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>

					{/* Image */}
					<div className="relative h-48 overflow-hidden">
						<motion.img
							layoutId={`image-${id}`}
							src={imgUrl}
							alt={title}
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-stone-800 via-transparent to-transparent" />
					</div>

					{/* Content */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className="p-6"
					>
						<h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
						<p className="text-stone-400 mb-6 leading-relaxed">{info}</p>

						{/* Tech stack */}
						<div className="flex flex-wrap gap-2 mb-6">
							{stack.map((tech, idx) => (
								<span
									key={idx}
									className="text-sm px-3 py-1 bg-stone-700 text-stone-300 rounded-full"
								>
									{tech}
								</span>
							))}
						</div>

						{/* Action button */}
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-colors"
						>
							View Project
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
}

export default ProjectModal;
