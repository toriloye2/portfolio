import { Link } from 'react-router-dom';
import Intro from '../components/Intro';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

function Home() {
	return (
		<div className="max-w-5xl w-11/12 mx-auto py-8 space-y-12">
			{/* Hero/Intro Section */}
			<section className="rounded-2xl bg-gradient-to-br from-violet-50 to-white dark:from-stone-800 dark:to-stone-900 p-6 md:p-10 shadow-lg border border-stone-200 dark:border-stone-700">
				<Intro />
			</section>

			{/* Featured Projects Preview Section */}
			<section className="rounded-2xl bg-white dark:bg-stone-800 p-6 md:p-10 shadow-lg border border-stone-200 dark:border-stone-700">
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
					<p className="text-stone-600 dark:text-stone-400 mb-8 max-w-2xl mx-auto">
						Check out some of my recent work and side projects.
					</p>
					<Link
						to="/projects"
						className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
					>
						View All Projects
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</Link>
				</div>
			</section>

			{/* Experience/Timeline Section */}
			<section className="rounded-2xl bg-gradient-to-br from-stone-50 to-white dark:from-stone-800 dark:to-stone-900 p-6 md:p-10 shadow-lg border border-stone-200 dark:border-stone-700">
				<Timeline />
			</section>

			{/* Skills Section */}
			<section className="rounded-2xl bg-white dark:bg-stone-800 p-6 md:p-10 shadow-lg border border-stone-200 dark:border-stone-700 overflow-hidden">
				<Skills />
			</section>

			{/* Contact Section */}
			<section className="rounded-2xl bg-gradient-to-br from-violet-50 to-white dark:from-stone-800 dark:to-stone-900 p-6 md:p-10 shadow-lg border border-stone-200 dark:border-stone-700">
				<Contact />
			</section>
		</div>
	);
}

export default Home;
