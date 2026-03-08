import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import certifications from '../data/certifications';

const Certifications = () => {
	const prefersReducedMotion = useReducedMotion();
	const [selectedCert, setSelectedCert] = useState(null);

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
					<motion.div
						key={cert.id}
						onClick={() => setSelectedCert(cert)}
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
						className="group cursor-pointer"
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
									View
									<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
									</svg>
								</span>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>

			{/* Certificate Modal */}
			<AnimatePresence>
				{selectedCert && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedCert(null)}
							className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
						>
							{/* Modal */}
							<motion.div
								initial={{ opacity: 0, scale: 0.95, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.95, y: 20 }}
								transition={{ duration: 0.2 }}
								onClick={(e) => e.stopPropagation()}
								className="relative max-w-4xl w-full bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden"
							>
								{/* Close button */}
								<button
									onClick={() => setSelectedCert(null)}
									className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
									aria-label="Close modal"
								>
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>

								{/* Certificate Header */}
								<div className="p-6 border-b border-stone-200 dark:border-stone-800">
									<div className="flex items-center gap-4">
										<div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-orange-500/20 flex items-center justify-center">
											<i className={`${selectedCert.icon} text-2xl text-blue-600 dark:text-orange-400`} />
										</div>
										<div>
											<h3 className="text-xl font-bold text-stone-900 dark:text-white">
												{selectedCert.name}
											</h3>
											<p className="text-sm text-stone-600 dark:text-stone-400">
												{selectedCert.issuer} • {selectedCert.issueDate}
											</p>
										</div>
									</div>
								</div>

								{/* Certificate Image */}
								<div className="p-6 bg-stone-50 dark:bg-stone-950">
									<img
										src={selectedCert.certImage}
										alt={`${selectedCert.name} Certificate`}
										className="w-full h-auto rounded-lg shadow-lg"
									/>
								</div>

								{/* Footer with verify link */}
								<div className="p-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
									<div className="text-sm text-stone-600 dark:text-stone-400">
										{selectedCert.credentialId && (
											<span>Credential ID: <span className="font-mono">{selectedCert.credentialId}</span></span>
										)}
									</div>
									<a
										href={selectedCert.verifyUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-orange-500 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-orange-600 transition-colors"
									>
										Verify Online
										<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</a>
								</div>
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	</section>
);
};

export default Certifications;
