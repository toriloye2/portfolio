import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	const isActive = (path) => location.pathname === path;

	// Handle scroll
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Close mobile menu on route change
	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-sm border-b border-stone-200/50 dark:border-stone-800/50'
					: 'bg-transparent'
			}`}
		>
			<div className="max-w-6xl mx-auto px-6">
				<div className="flex justify-between items-center h-16 md:h-20">
					{/* Logo/Name */}
					<Link
						to="/"
						className="text-xl font-bold text-stone-900 dark:text-white hover:text-blue-600 dark:hover:text-orange-400 transition-colors"
					>
						<span className="hidden sm:inline">ORILOYE</span>
						<span className="sm:hidden">T.</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						<Link
							to="/"
							className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
								isActive('/')
									? 'text-blue-600 dark:text-orange-400'
									: 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
							}`}
						>
							HOME
							{isActive('/') && (
								<motion.div
									layoutId="navbar-indicator"
									className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-orange-400"
								/>
							)}
						</Link>
						<Link
							to="/projects"
							className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
								isActive('/projects')
									? 'text-blue-600 dark:text-orange-400'
									: 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
							}`}
						>
							PROJECTS
							{isActive('/projects') && (
								<motion.div
									layoutId="navbar-indicator"
									className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-orange-400"
								/>
							)}
						</Link>
						<Link
							to="/contact"
							className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
								isActive('/contact')
									? 'text-blue-600 dark:text-orange-400'
									: 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
							}`}
						>
							CONTACT
							{isActive('/contact') && (
								<motion.div
									layoutId="navbar-indicator"
									className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-orange-400"
								/>
							)}
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 rounded-lg text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
						aria-label="Toggle menu"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{isOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2 }}
						className="md:hidden bg-white dark:bg-black border-b border-stone-200 dark:border-stone-800 overflow-hidden"
					>
						<div className="px-6 py-4 space-y-1">
							<Link
								to="/"
								className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
									isActive('/')
										? 'bg-blue-50 dark:bg-orange-500/10 text-blue-600 dark:text-orange-400'
										: 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900'
								}`}
							>
								Home
							</Link>
							<Link
								to="/projects"
								className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
									isActive('/projects')
										? 'bg-blue-50 dark:bg-orange-500/10 text-blue-600 dark:text-orange-400'
										: 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900'
								}`}
							>
								Projects
							</Link>
							<Link
								to="/contact"
								className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
									isActive('/contact')
										? 'bg-blue-50 dark:bg-orange-500/10 text-blue-600 dark:text-orange-400'
										: 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900'
								}`}
							>
								Contact
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}

export default Navbar;
