import { motion, useReducedMotion } from 'motion/react';

const highlights = [
	{ icon: '🤝', text: 'Agile Team Experience' },
	{ icon: '🚀', text: 'Full-Stack Delivery' },
	{ icon: '🔧', text: 'Production Troubleshooting' },
];

function About() {
	const prefersReducedMotion = useReducedMotion();

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: prefersReducedMotion ? 0 : 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4, ease: 'easeOut' },
		},
	};

	return (
		<section className="py-24 px-6">
			<div className="max-w-4xl mx-auto text-center">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
				>
					{/* Section label */}
					<motion.span
						variants={itemVariants}
						className="inline-block text-sm font-medium tracking-widest text-blue-600 dark:text-orange-400 mb-4 uppercase"
					>
						About Me
					</motion.span>

					{/* Main text */}
					<motion.p
						variants={itemVariants}
						className="text-2xl md:text-3xl text-stone-700 dark:text-stone-300 leading-relaxed mb-12"
					>
						I'm a full-stack developer passionate about building efficient and scalable web applications.
						From planning to deployment, I enjoy solving real-world problems with clean, maintainable code.
					</motion.p>

					{/* Highlight chips */}
					<motion.div
						variants={itemVariants}
						className="flex flex-wrap justify-center gap-4"
					>
						{highlights.map((highlight, index) => (
							<motion.div
								key={highlight.text}
								initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.3,
									delay: prefersReducedMotion ? 0 : index * 0.1 + 0.3,
								}}
								whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
								className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-blue-300 dark:hover:border-orange-500/50 transition-all duration-300"
							>
								<span className="text-2xl">{highlight.icon}</span>
								<span className="font-medium text-stone-700 dark:text-stone-300">
									{highlight.text}
								</span>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default About;
