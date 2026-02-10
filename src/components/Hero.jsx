import { motion, useReducedMotion } from 'motion/react';

function Hero() {
	const prefersReducedMotion = useReducedMotion();

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: prefersReducedMotion ? 0 : 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	};

	const photoVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	return (
		<section className="min-h-screen flex items-center justify-center relative overflow-hidden">
			{/* Subtle background effects */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Gradient blob */}
				<div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/10 dark:bg-orange-500/5 rounded-full blur-3xl" />
			</div>

			<div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
					{/* Left: Text Content */}
					<motion.div
						className="flex-1 text-center lg:text-left"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						{/* Small label */}
						<motion.span
							variants={itemVariants}
							className="inline-block text-sm font-medium tracking-widest text-blue-600 dark:text-orange-400 mb-4 uppercase"
						>
							Full-Stack Developer
						</motion.span>

						{/* Name */}
						<motion.h1
							variants={itemVariants}
							className="text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 dark:text-white mb-6 leading-tight"
						>
							<span className="block">ORILOYE</span>
							<span className="block text-blue-600 dark:text-orange-400">TOYYIB</span>
						</motion.h1>

						{/* Value proposition */}
						<motion.p
							variants={itemVariants}
							className="text-lg md:text-xl text-stone-600 dark:text-stone-400 mb-8 max-w-lg mx-auto lg:mx-0"
						>
							Building clean, scalable web apps across the stack.
						</motion.p>

						{/* Tech stack chips */}
						<motion.div
							variants={itemVariants}
							className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
						>
							{['React', 'Next.js', 'APIs', 'Databases', 'Agile'].map((tech) => (
								<span
									key={tech}
									className="px-3 py-1 text-sm rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700"
								>
									{tech}
								</span>
							))}
						</motion.div>

						{/* CTA Buttons */}
						<motion.div
							variants={itemVariants}
							className="flex flex-wrap gap-4 justify-center lg:justify-start"
						>
							<a
								href="/assets/ORILOYE_TOYYIB_Resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-orange-500 text-white rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-blue-500/25 dark:shadow-orange-500/25"
							>
								View Resume
								<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</a>
							<a
								href="#projects"
								className="inline-flex items-center gap-2 px-6 py-3 border-2 border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-orange-400 dark:hover:text-orange-400 transition-all duration-300"
							>
								See Projects
							</a>
						</motion.div>

						{/* Social links */}
						<motion.div
							variants={itemVariants}
							className="flex gap-4 mt-8 justify-center lg:justify-start"
						>
							<a
								href="https://www.linkedin.com/in/toriloye2"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-orange-400 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-300"
								aria-label="LinkedIn"
							>
								<i className="fab fa-linkedin text-xl"></i>
							</a>
							<a
								href="https://github.com/toriloye2"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-orange-400 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-300"
								aria-label="GitHub"
							>
								<i className="fab fa-github text-xl"></i>
							</a>
							<a
								href="mailto:taiyeolabamiji@gmail.com"
								className="p-3 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-orange-400 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-300"
								aria-label="Email"
							>
								<i className="fas fa-envelope text-xl"></i>
							</a>
						</motion.div>
					</motion.div>

					{/* Right: Photo with animated halo */}
					<motion.div
						className="relative flex-shrink-0"
						variants={photoVariants}
						initial="hidden"
						animate="visible"
					>
						{/* Animated halo/glow */}
						<motion.div
							className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 dark:from-orange-500/20 dark:to-amber-500/20 blur-2xl"
							animate={prefersReducedMotion ? {} : {
								scale: [1, 1.05, 1],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						/>

						{/* Photo container */}
						<div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
							{/* Circle background */}
							<div className="absolute inset-0 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 dark:from-stone-700 dark:to-stone-800" />

							{/* Photo */}
							<img
								src="/assets/toyyib.jpg"
								alt="Oriloye Toyyib"
								className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-stone-800 shadow-2xl"
							/>

							{/* Subtle breathing animation on photo */}
							<motion.div
								className="absolute inset-0 rounded-full border-2 border-blue-500/30 dark:border-orange-500/30"
								animate={prefersReducedMotion ? {} : {
									scale: [1, 1.02, 1],
									opacity: [0.5, 0.8, 0.5],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							/>
						</div>
					</motion.div>
				</div>

				{/* Scroll indicator */}
				<motion.div
					className="absolute bottom-8 left-1/2 -translate-x-1/2"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5, duration: 0.5 }}
				>
					<motion.div
						className="flex flex-col items-center gap-2 text-stone-400"
						animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
						transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
					>
						<span className="text-xs uppercase tracking-widest">Scroll Down</span>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
						</svg>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default Hero;
