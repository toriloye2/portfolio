import { motion } from 'motion/react';
import skills from '../data/skills';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05
		}
	}
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 }
};

const Skills = () => {
	return (
		<div className="py-8">
			<motion.h2
				className="text-3xl md:text-4xl font-bold mb-8 text-center text-stone-900 dark:text-white"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				Tools & Technologies
			</motion.h2>

			<motion.div
				className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				{skills.map((skill, index) => (
					<motion.div
						key={index}
						variants={item}
						whileHover={{
							scale: 1.1,
							y: -5,
							transition: { type: 'spring', stiffness: 400, damping: 10 }
						}}
						whileTap={{ scale: 0.95 }}
						className="group cursor-pointer"
					>
						<div className="flex flex-col items-center p-4 rounded-2xl bg-stone-100 dark:bg-stone-700/50 hover:bg-gradient-to-br hover:from-violet-100 hover:to-blue-100 dark:hover:from-orange-900/30 dark:hover:to-yellow-900/30 transition-colors duration-300">
							<div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3">
								<i className={`${skill.icon} text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110`}></i>
							</div>
							<p className="text-sm font-medium text-stone-700 dark:text-stone-300 text-center">
								{skill.name}
							</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Skills;
