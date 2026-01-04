import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import timelineData from '../data/timeline';

function Timeline() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const intervalRef = useRef(null);

	// Auto-advance cards
	useEffect(() => {
		if (isPaused) return;

		intervalRef.current = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % timelineData.length);
		}, 3500); // Slower - 3.5 seconds

		return () => clearInterval(intervalRef.current);
	}, [isPaused]);

	// Handle click to pause/resume
	const handleClick = () => {
		setIsPaused(!isPaused);
	};

	// Manual navigation
	const goToCard = (index) => {
		setActiveIndex(index);
		setIsPaused(true);
	};

	// Get next index for the peeking card
	const nextIndex = (activeIndex + 1) % timelineData.length;

	return (
		<div className="py-12">
			{/* Header */}
			<motion.h2
				className="text-3xl md:text-4xl font-bold mb-12 text-center text-stone-900 dark:text-white"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				My Journey
			</motion.h2>

			{/* Card Stack Container */}
			<div
				className="relative max-w-2xl mx-auto px-4 cursor-pointer"
				onClick={handleClick}
			>
				{/* Stacked cards */}
				<div className="relative h-[420px] md:h-[380px]">
					{timelineData.map((item, index) => {
						const isActive = index === activeIndex;
						const isNext = index === nextIndex;
						const isPrev = index === (activeIndex - 1 + timelineData.length) % timelineData.length;

						// Calculate styles based on position
						let xOffset = 0;
						let scale = 0.85;
						let opacity = 0;
						let zIndex = 0;
						let rotateY = 0;

						if (isActive) {
							xOffset = 0;
							scale = 1;
							opacity = 1;
							zIndex = 10;
						} else if (isNext) {
							// Next card peeking from the right
							xOffset = 85;
							scale = 0.92;
							opacity = 0.6;
							zIndex = 5;
							rotateY = -5;
						} else if (isPrev) {
							// Previous card exiting to the left
							xOffset = -100;
							scale = 0.88;
							opacity = 0;
							zIndex = 1;
						}

						return (
							<motion.div
								key={item.year}
								className="absolute inset-0"
								initial={false}
								animate={{
									x: `${xOffset}%`,
									scale: scale,
									opacity: opacity,
									zIndex: zIndex,
									rotateY: rotateY,
								}}
								transition={{
									duration: 0.8,
									ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
								}}
								style={{
									transformOrigin: 'center center',
									perspective: '1000px',
								}}
							>
								<div className={`h-full p-6 md:p-8 rounded-3xl border transition-all duration-500 ${
									isActive
										? 'bg-white dark:bg-stone-800 border-blue-200 dark:border-blue-500/30 shadow-2xl'
										: 'bg-stone-50 dark:bg-stone-800/90 border-stone-200 dark:border-stone-700 shadow-lg'
								}`}>
									{/* Year badge */}
									<div className="flex items-center justify-between mb-4">
										<span className={`text-4xl md:text-5xl font-bold transition-colors duration-500 ${
											isActive ? 'text-blue-500' : 'text-stone-300 dark:text-stone-600'
										}`}>
											{item.year}
										</span>
										<span className={`text-sm px-4 py-1.5 rounded-full transition-all duration-500 ${
											isActive
												? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
												: 'bg-stone-100 dark:bg-stone-700 text-stone-400'
										}`}>
											{item.duration}
										</span>
									</div>

									{/* Title */}
									<h3 className={`text-xl md:text-2xl font-bold mb-4 transition-colors duration-500 ${
										isActive ? 'text-stone-900 dark:text-white' : 'text-stone-400'
									}`}>
										{item.title}
									</h3>

									{/* Details */}
									<p className={`text-sm md:text-base leading-relaxed transition-colors duration-500 line-clamp-6 ${
										isActive ? 'text-stone-600 dark:text-stone-300' : 'text-stone-300'
									}`}>
										{item.details}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Pause indicator */}
				<AnimatePresence>
					{isPaused && (
						<motion.div
							className="absolute top-4 right-8 bg-stone-900/80 dark:bg-white/90 text-white dark:text-stone-900 px-3 py-1.5 rounded-full text-sm font-medium z-20"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.2 }}
						>
							Paused
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Navigation dots */}
			<div className="flex justify-center gap-3 mt-8">
				{timelineData.map((item, index) => (
					<button
						key={index}
						onClick={(e) => {
							e.stopPropagation();
							goToCard(index);
						}}
						className={`h-2.5 rounded-full transition-all duration-500 ${
							index === activeIndex
								? 'bg-blue-500 w-8'
								: 'bg-stone-300 dark:bg-stone-600 hover:bg-stone-400 w-2.5'
						}`}
						aria-label={`Go to ${item.year}`}
					/>
				))}
			</div>

			{/* Progress bar */}
			{!isPaused && (
				<div className="max-w-2xl mx-auto mt-6 px-4">
					<div className="h-0.5 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
						<motion.div
							className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
							initial={{ width: '0%' }}
							animate={{ width: '100%' }}
							transition={{ duration: 3.5, ease: 'linear' }}
							key={activeIndex}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Timeline;
