import { motion, useReducedMotion } from 'motion/react';

function Contact() {
	const prefersReducedMotion = useReducedMotion();

	return (
		<section className="py-24 px-6">
			<div className="max-w-4xl mx-auto">
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					{/* Section label */}
					<span className="inline-block text-sm font-medium tracking-widest text-blue-600 dark:text-orange-400 mb-4 uppercase">
						Get in Touch
					</span>

					{/* Heading */}
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-white mb-6">
						Let's Build Something
					</h2>

					{/* Description */}
					<p className="text-lg text-stone-600 dark:text-stone-400 mb-12 max-w-2xl mx-auto">
						Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.
					</p>

					{/* CTA Buttons */}
					<motion.div
						className="flex flex-wrap gap-4 justify-center mb-12"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.2 }}
					>
						<a
							href="mailto:taiyeolabamiji@gmail.com"
							className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 dark:bg-orange-500 text-white rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-blue-500/25 dark:shadow-orange-500/25"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							Send an Email
							<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
					</motion.div>

					{/* Social Links */}
					<motion.div
						className="flex gap-4 justify-center"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.3 }}
					>
						<a
							href="https://www.linkedin.com/in/toriloye2"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-2 px-5 py-3 rounded-full bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-orange-400 hover:border-blue-300 dark:hover:border-orange-500/50 transition-all duration-300"
						>
							<i className="fab fa-linkedin text-xl"></i>
							<span className="font-medium">LinkedIn</span>
						</a>
						<a
							href="https://github.com/toriloye2"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-2 px-5 py-3 rounded-full bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-orange-400 hover:border-blue-300 dark:hover:border-orange-500/50 transition-all duration-300"
						>
							<i className="fab fa-github text-xl"></i>
							<span className="font-medium">GitHub</span>
						</a>
					</motion.div>

					{/* Optional: Email display */}
					<motion.p
						className="mt-8 text-sm text-stone-500"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.4 }}
					>
						Or reach out directly at{' '}
						<a
							href="mailto:taiyeolabamiji@gmail.com"
							className="text-blue-600 dark:text-orange-400 hover:underline"
						>
							taiyeolabamiji@gmail.com
						</a>
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
}

export default Contact;
