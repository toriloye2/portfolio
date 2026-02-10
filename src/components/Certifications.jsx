import { motion, useReducedMotion } from 'motion/react';
import certifications from '../data/certifications';

const Certifications = () => {
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
						Credentials
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
						Certifications
					</h2>
				</motion.div>

				{/* Certifications Grid */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-6"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.3, delay: 0.1 }}
				>
					{certifications.map((cert, index) => (
						<motion.a
							key={cert.id}
							href={cert.verifyUrl}
							target="_blank"
							rel="noopener noreferrer"
							initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.3,
								delay: prefersReducedMotion ? 0 : index * 0.1,
								ease: 'easeOut',
							}}
							whileHover={prefersReducedMotion ? {} : {
								y: -6,
								transition: { duration: 0.2, ease: 'easeOut' }
							}}
							className="group block"
						>
							<div className="h-full p-6 rounded-2xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-blue-300 dark:hover:border-orange-500/50 transition-all duration-300">
								<div className="flex items-start gap-4">
									{/* Icon */}
									<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-100 dark:bg-orange-500/20 flex items-center justify-center">
										<i className={`${cert.icon} text-3xl text-blue-600 dark:text-orange-400`} />
									</div>

									{/* Content */}
									<div className="flex-1 min-w-0">
										<h3 className="font-bold text-stone-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-orange-400 transition-colors">
											{cert.name}
										</h3>
										<p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
											{cert.issuer}
										</p>
									</div>
								</div>

								{/* Meta */}
								<div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-700 flex items-center justify-between">
									<div className="text-xs text-stone-500">
										<span>{cert.issueDate}</span>
										{cert.expirationDate && (
											<span className="ml-2 text-stone-400">• Exp {cert.expirationDate}</span>
										)}
									</div>
									<span className="text-xs font-medium text-blue-600 dark:text-orange-400 flex items-center gap-1 group-hover:gap-2 transition-all">
										Verify
										<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</span>
								</div>
							</div>
						</motion.a>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Certifications;
