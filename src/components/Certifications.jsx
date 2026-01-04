import { motion, useReducedMotion } from 'motion/react';
import certifications from '../data/certifications';

const Certifications = () => {
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
				Certifications
			</motion.h2>

			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
				initial={prefersReducedMotion ? {} : { opacity: 0 }}
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
						initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.2,
							delay: prefersReducedMotion ? 0 : index * 0.1,
							ease: 'easeOut',
						}}
						whileHover={prefersReducedMotion ? {} : {
							y: -4,
							transition: { duration: 0.15, ease: 'easeOut' }
						}}
						className="group block"
					>
						<div className="h-full p-5 rounded-xl bg-white dark:bg-stone-900 shadow-sm hover:shadow-lg border border-stone-200 dark:border-stone-700 transition-all duration-200">
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-violet-100 dark:bg-orange-500/20 flex items-center justify-center">
									<i className={`${cert.icon} text-2xl text-violet-600 dark:text-orange-400`} />
								</div>
								<div className="flex-1 min-w-0">
									<h3 className="font-semibold text-stone-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-orange-400 transition-colors">
										{cert.name}
									</h3>
									<p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
										{cert.issuer}
									</p>
									<div className="flex items-center gap-2 mt-2 text-xs text-stone-500 dark:text-stone-500">
										<span>{cert.issueDate}</span>
										{cert.expirationDate && (
											<>
												<span>•</span>
												<span>Expires {cert.expirationDate}</span>
											</>
										)}
									</div>
								</div>
							</div>
							<div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
								<span className="text-xs text-stone-500 dark:text-stone-500 font-mono truncate">
									ID: {cert.credentialId}
								</span>
								<span className="text-xs text-violet-600 dark:text-orange-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
	);
};

export default Certifications;
