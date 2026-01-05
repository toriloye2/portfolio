import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import FeaturedProjects from '../components/FeaturedProjects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

function Home() {
	return (
		<div className="overflow-hidden">
			{/* Hero Section - Full Screen */}
			<Hero />

			{/* About Section */}
			<About />

			{/* Featured Projects */}
			<FeaturedProjects />

			{/* Journey/Experience Section */}
			<div className="max-w-6xl mx-auto px-6">
				<Timeline />
			</div>

			{/* Skills/Tools Section */}
			<Skills />

			{/* Certifications Section */}
			<Certifications />

			{/* Contact Section */}
			<Contact />
		</div>
	);
}

export default Home;
