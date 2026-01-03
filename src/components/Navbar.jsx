import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const isActive = (path) => location.pathname === path;

	return (
		<nav className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200 dark:border-stone-700">
			<div className="max-w-5xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					{/* Logo/Name */}
					<Link to="/" className="text-xl font-bold text-violet-600 dark:text-orange-400">
						Toyyib
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link
							to="/"
							className={`transition-colors duration-200 ${
								isActive('/')
									? 'text-violet-600 dark:text-orange-400 font-semibold'
									: 'text-stone-600 dark:text-stone-300 hover:text-violet-600 dark:hover:text-orange-400'
							}`}
						>
							Home
						</Link>
						<Link
							to="/projects"
							className={`transition-colors duration-200 ${
								isActive('/projects')
									? 'text-violet-600 dark:text-orange-400 font-semibold'
									: 'text-stone-600 dark:text-stone-300 hover:text-violet-600 dark:hover:text-orange-400'
							}`}
						>
							Projects
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 rounded-md text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800"
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

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden pb-4 space-y-2">
						<Link
							to="/"
							onClick={() => setIsOpen(false)}
							className={`block px-4 py-2 rounded-md transition-colors duration-200 ${
								isActive('/')
									? 'bg-violet-100 dark:bg-orange-900/30 text-violet-600 dark:text-orange-400 font-semibold'
									: 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
							}`}
						>
							Home
						</Link>
						<Link
							to="/projects"
							onClick={() => setIsOpen(false)}
							className={`block px-4 py-2 rounded-md transition-colors duration-200 ${
								isActive('/projects')
									? 'bg-violet-100 dark:bg-orange-900/30 text-violet-600 dark:text-orange-400 font-semibold'
									: 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
							}`}
						>
							Projects
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
