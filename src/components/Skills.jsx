import { motion, useReducedMotion } from 'motion/react';
import skills from '../data/skills';

const Skills = () => {
	const prefersReducedMotion = useReducedMotion();

	return (
		<section className="py-24 px-6">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<span className="inline-block text-sm font-medium tracking-widest text-blue-600 dark:text-orange-400 mb-4 uppercase">
						Tech Stack
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
						Tools & Technologies
					</h2>
				</motion.div>

				{/* Skills Grid */}
				<motion.div
					className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.3, delay: 0.1 }}
				>
					{skills.map((skill, index) => (
						<motion.div
							key={index}
							initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.2,
								delay: prefersReducedMotion ? 0 : index * 0.02,
								ease: 'easeOut',
							}}
							whileHover={prefersReducedMotion ? {} : {
								y: -4,
								transition: { duration: 0.15, ease: 'easeOut' }
							}}
							className="group"
						>
							<div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-blue-300 dark:hover:border-orange-500/50 transition-all duration-200">
								<i className={`${skill.icon} text-3xl transition-transform duration-150 ease-out group-hover:scale-110`} />
								<span className="text-xs font-medium text-stone-600 dark:text-stone-400 text-center">
									{skill.name}
								</span>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
