import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import timelineData from '../data/timeline';

function TimelineCard({ item, index, isActive, totalItems }) {
	const cardRef = useRef(null);
	const isInView = useInView(cardRef, { margin: '-40% 0px -40% 0px' });
	const isLeft = index % 2 === 0;

	return (
		<div
			ref={cardRef}
			className={`flex items-center gap-8 mb-16 last:mb-0 ${
				isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
			} flex-col md:flex-row`}
		>
			{/* Year */}
			<motion.div
				className={`md:w-32 flex-shrink-0 ${isLeft ? 'md:text-right' : 'md:text-left'} text-center`}
				initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.5, delay: 0.1 }}
			>
				<span className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${
					isActive
						? 'text-blue-500'
						: 'text-stone-300 dark:text-stone-600'
				}`}>
					{item.year}
				</span>
			</motion.div>

			{/* Center dot and line connector */}
			<div className="relative flex-shrink-0 hidden md:flex flex-col items-center">
				<motion.div
					className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
						isActive
							? 'bg-blue-500 border-blue-500 scale-125'
							: 'bg-white dark:bg-stone-800 border-stone-300 dark:border-stone-600'
					}`}
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.3, delay: 0.2 }}
				/>
			</div>

			{/* Card */}
			<motion.div
				className={`flex-1 max-w-xl transition-all duration-500 ${
					isActive
						? 'opacity-100 scale-100'
						: 'opacity-40 scale-[0.98] blur-[1px]'
				}`}
				initial={{
					opacity: 0,
					x: isLeft ? 50 : -50,
					scale: 0.95
				}}
				whileInView={{
					opacity: isActive ? 1 : 0.4,
					x: 0,
					scale: isActive ? 1 : 0.98
				}}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.6, delay: 0.3 }}
			>
				<div className={`p-6 rounded-2xl border-l-4 transition-all duration-300 ${
					isActive
						? 'bg-white dark:bg-stone-800 border-blue-500 shadow-xl shadow-blue-500/10'
						: 'bg-stone-50 dark:bg-stone-800/50 border-stone-200 dark:border-stone-700'
				}`}>
					{/* Title */}
					<motion.h3
						className={`text-xl font-bold mb-2 transition-colors duration-300 ${
							isActive
								? 'text-stone-900 dark:text-white'
								: 'text-stone-500 dark:text-stone-400'
						}`}
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.4 }}
					>
						{item.title}
					</motion.h3>

					{/* Duration badge */}
					<motion.span
						className={`inline-block text-sm px-3 py-1 rounded-full mb-4 transition-colors duration-300 ${
							isActive
								? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
								: 'bg-stone-100 dark:bg-stone-700 text-stone-500 dark:text-stone-400'
						}`}
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.5 }}
					>
						{item.duration}
					</motion.span>

					{/* Details */}
					<motion.p
						className={`text-sm leading-relaxed transition-colors duration-300 ${
							isActive
								? 'text-stone-600 dark:text-stone-300'
								: 'text-stone-400 dark:text-stone-500'
						}`}
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.6 }}
					>
						{item.details}
					</motion.p>
				</div>
			</motion.div>
		</div>
	);
}

function Timeline() {
	const containerRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);

	// Track scroll progress for the line
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start center', 'end center']
	});

	// Transform scroll progress to line height
	const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

	// Update active index based on scroll
	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return;

			const container = containerRef.current;
			const cards = container.querySelectorAll('[data-timeline-card]');
			const containerRect = container.getBoundingClientRect();
			const viewportCenter = window.innerHeight / 2;

			let closestIndex = 0;
			let closestDistance = Infinity;

			cards.forEach((card, index) => {
				const cardRect = card.getBoundingClientRect();
				const cardCenter = cardRect.top + cardRect.height / 2;
				const distance = Math.abs(cardCenter - viewportCenter);

				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = index;
				}
			});

			setActiveIndex(closestIndex);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="py-12">
			{/* Header */}
			<motion.h2
				className="text-3xl md:text-4xl font-bold mb-16 text-center text-stone-900 dark:text-white"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				My Journey
			</motion.h2>

			{/* Timeline container */}
			<div ref={containerRef} className="relative max-w-4xl mx-auto px-4">
				{/* Animated vertical line */}
				<div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 dark:bg-stone-700 hidden md:block -translate-x-1/2">
					<motion.div
						className="w-full bg-gradient-to-b from-blue-500 to-violet-500 origin-top"
						style={{ height: lineHeight }}
					/>
				</div>

				{/* Timeline items */}
				{timelineData.map((item, index) => (
					<div key={index} data-timeline-card>
						<TimelineCard
							item={item}
							index={index}
							isActive={activeIndex === index}
							totalItems={timelineData.length}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Timeline;
