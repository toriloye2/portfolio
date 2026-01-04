import { motion } from 'motion/react';

function ProjectCard({ project, onClick }) {
	const { title, imgUrl } = project;

	return (
		<motion.div
			layoutId={`card-${project.id}`}
			onClick={onClick}
			className="cursor-pointer group relative bg-stone-800 rounded-2xl overflow-hidden"
			whileHover={{ scale: 1.02 }}
			transition={{ duration: 0.2 }}
		>
			{/* Accent dot */}
			<motion.div
				layoutId={`dot-${project.id}`}
				className="absolute top-4 left-4 z-10 w-4 h-4 bg-blue-500 rounded-full"
			/>

			{/* Image section - full card */}
			<div className="relative h-64 overflow-hidden">
				<motion.img
					layoutId={`image-${project.id}`}
					src={imgUrl}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent" />

				{/* Title overlay */}
				<div className="absolute bottom-0 left-0 right-0 p-5">
					<h3 className="text-xl font-bold text-white">{title}</h3>
				</div>
			</div>
		</motion.div>
	);
}

export default ProjectCard;
