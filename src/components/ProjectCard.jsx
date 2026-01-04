import { motion } from 'motion/react';

function ProjectCard({ project, onClick }) {
	const { title, imgUrl } = project;

	return (
		<motion.div
			layoutId={`card-${project.id}`}
			onClick={onClick}
			className="cursor-pointer group relative bg-stone-800 rounded-2xl overflow-hidden h-80"
			whileHover={{ scale: 1.02 }}
			transition={{ duration: 0.2 }}
		>
			{/* Accent dot */}
			<motion.div
				layoutId={`dot-${project.id}`}
				className="absolute top-4 left-4 z-10 w-4 h-4 bg-blue-500 rounded-full"
			/>

			{/* Image section */}
			<div className="relative h-44 overflow-hidden">
				<motion.img
					layoutId={`image-${project.id}`}
					src={imgUrl}
					alt={title}
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-stone-800 via-transparent to-transparent" />
			</div>

			{/* Skeleton bars */}
			<div className="p-5 space-y-3">
				<motion.div layoutId={`bar1-${project.id}`} className="h-2.5 bg-stone-600 rounded-full w-3/5" />
				<motion.div layoutId={`bar2-${project.id}`} className="h-2.5 bg-stone-600 rounded-full w-4/5" />
				<motion.div layoutId={`bar3-${project.id}`} className="h-2.5 bg-stone-600 rounded-full w-3/4" />
			</div>

			{/* Bottom bars */}
			<div className="px-5 pb-5 space-y-3">
				<motion.div layoutId={`bar4-${project.id}`} className="h-2.5 bg-stone-600 rounded-full w-full" />
				<motion.div layoutId={`bar5-${project.id}`} className="h-2.5 bg-stone-600 rounded-full w-4/5" />
			</div>
		</motion.div>
	);
}

export default ProjectCard;
