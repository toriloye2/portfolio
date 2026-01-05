import { motion } from 'motion/react';

function Contact() {
	return (
		<div className="min-h-screen pt-24 pb-16 px-6">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<span className="inline-block text-sm font-medium tracking-widest text-blue-600 dark:text-orange-400 mb-4 uppercase">
						Get in Touch
					</span>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-white mb-6">
						Let's Build Something
					</h1>
					<p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
						Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.
					</p>
				</motion.div>

				{/* Contact Form */}
				<motion.div
					className="max-w-2xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<form
						action="https://getform.io/f/broleopa"
						method="POST"
						className="space-y-6"
					>
						{/* Name and Email row */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									className="w-full px-4 py-3 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
									placeholder="Your name"
								/>
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="w-full px-4 py-3 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
									placeholder="your@email.com"
								/>
							</div>
						</div>

						{/* Subject */}
						<div>
							<label htmlFor="subject" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								required
								className="w-full px-4 py-3 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
								placeholder="What's this about?"
							/>
						</div>

						{/* Message */}
						<div>
							<label htmlFor="message" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows="6"
								required
								className="w-full px-4 py-3 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
								placeholder="Your message..."
							/>
						</div>

						{/* Submit Button */}
						<motion.button
							type="submit"
							className="w-full md:w-auto px-8 py-4 bg-blue-600 dark:bg-orange-500 text-white rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-blue-500/25 dark:shadow-orange-500/25"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							Send Message
						</motion.button>
					</form>
				</motion.div>

				{/* Alternative contact */}
				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<p className="text-stone-500 mb-6">Or reach out directly</p>
					<div className="flex flex-wrap gap-4 justify-center">
						<a
							href="mailto:taiyeolabamiji@gmail.com"
							className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-orange-400 hover:border-blue-300 dark:hover:border-orange-500/50 transition-all duration-300"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<span className="font-medium">taiyeolabamiji@gmail.com</span>
						</a>
						<a
							href="https://www.linkedin.com/in/toriloye2"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-orange-400 hover:border-blue-300 dark:hover:border-orange-500/50 transition-all duration-300"
						>
							<i className="fab fa-linkedin text-xl"></i>
							<span className="font-medium">LinkedIn</span>
						</a>
						<a
							href="https://github.com/toriloye2"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-orange-400 hover:border-blue-300 dark:hover:border-orange-500/50 transition-all duration-300"
						>
							<i className="fab fa-github text-xl"></i>
							<span className="font-medium">GitHub</span>
						</a>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default Contact;
