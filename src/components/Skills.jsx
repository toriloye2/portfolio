import { motion, useReducedMotion } from 'motion/react';
import skills from '../data/skills';

const Skills = () => {
	const prefersReducedMotion = useReducedMotion();

	return (
		<div className="py-4">
			<motion.h2
				className="text-2xl md:text-3xl font-bold mb-6 text-center text-stone-900 dark:text-white"
				initial={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.3 }}
			>
				Tools & Technologies
			</motion.h2>

			<motion.div
				className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
				initial={prefersReducedMotion ? {} : { opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.3, delay: 0.1 }}
			>
				{skills.map((skill, index) => (
					<motion.div
						key={index}
						initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.2,
							delay: prefersReducedMotion ? 0 : index * 0.03,
							ease: 'easeOut',
						}}
						whileHover={prefersReducedMotion ? {} : {
							y: -2,
							transition: { duration: 0.15, ease: 'easeOut' }
						}}
						className="group"
					>
						<div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-stone-800 shadow-sm hover:shadow-md border border-stone-200 dark:border-stone-700 transition-shadow duration-150 ease-out">
							<i className={`${skill.icon} text-2xl transition-transform duration-150 ease-out group-hover:scale-105`} />
							<span className="text-sm font-medium text-stone-700 dark:text-stone-300 truncate">
								{skill.name}
							</span>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Skills;
