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
		}, 2000); // 2 seconds

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

	const activeItem = timelineData[activeIndex];

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
				{/* Stacked cards in background */}
				<div className="relative h-[400px] md:h-[350px]">
					{timelineData.map((item, index) => {
						const distance = index - activeIndex;
						const isActive = index === activeIndex;
						const isBehind = distance > 0 || (distance < 0 && Math.abs(distance) > timelineData.length / 2);

						// Calculate position for stacking effect
						let zIndex = timelineData.length - Math.abs(distance);
						let scale = 1 - Math.abs(distance) * 0.05;
						let yOffset = Math.abs(distance) * 15;
						let opacity = isActive ? 1 : Math.max(0.3, 1 - Math.abs(distance) * 0.3);

						if (distance < 0 && distance > -timelineData.length / 2) {
							// Cards that have passed
							zIndex = 0;
							opacity = 0;
							scale = 0.9;
							yOffset = -50;
						}

						return (
							<motion.div
								key={item.year}
								className="absolute inset-0"
								initial={false}
								animate={{
									scale: scale,
									y: yOffset,
									opacity: opacity,
									zIndex: zIndex,
								}}
								transition={{
									duration: 0.6,
									ease: [0.32, 0.72, 0, 1]
								}}
							>
								<div className={`h-full p-6 md:p-8 rounded-3xl border transition-all duration-300 ${
									isActive
										? 'bg-white dark:bg-stone-800 border-blue-500/50 shadow-2xl shadow-blue-500/10'
										: 'bg-stone-50 dark:bg-stone-800/80 border-stone-200 dark:border-stone-700'
								}`}>
									{/* Year badge */}
									<div className="flex items-center justify-between mb-4">
										<span className={`text-4xl md:text-5xl font-bold transition-colors duration-300 ${
											isActive ? 'text-blue-500' : 'text-stone-300 dark:text-stone-600'
										}`}>
											{item.year}
										</span>
										<span className={`text-sm px-4 py-1.5 rounded-full transition-colors duration-300 ${
											isActive
												? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
												: 'bg-stone-100 dark:bg-stone-700 text-stone-500'
										}`}>
											{item.duration}
										</span>
									</div>

									{/* Title */}
									<h3 className={`text-xl md:text-2xl font-bold mb-4 transition-colors duration-300 ${
										isActive ? 'text-stone-900 dark:text-white' : 'text-stone-500'
									}`}>
										{item.title}
									</h3>

									{/* Details */}
									<p className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
										isActive ? 'text-stone-600 dark:text-stone-300' : 'text-stone-400'
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
							className="absolute top-4 right-8 bg-stone-900/80 dark:bg-white/80 text-white dark:text-stone-900 px-3 py-1 rounded-full text-sm font-medium"
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
						>
							Paused - Click to resume
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Navigation dots */}
			<div className="flex justify-center gap-2 mt-8">
				{timelineData.map((_, index) => (
					<button
						key={index}
						onClick={(e) => {
							e.stopPropagation();
							goToCard(index);
						}}
						className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
							index === activeIndex
								? 'bg-blue-500 w-8'
								: 'bg-stone-300 dark:bg-stone-600 hover:bg-stone-400'
						}`}
						aria-label={`Go to ${timelineData[index].year}`}
					/>
				))}
			</div>

			{/* Progress bar */}
			{!isPaused && (
				<div className="max-w-2xl mx-auto mt-4 px-4">
					<div className="h-1 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
						<motion.div
							className="h-full bg-blue-500"
							initial={{ width: '0%' }}
							animate={{ width: '100%' }}
							transition={{ duration: 2, ease: 'linear' }}
							key={activeIndex}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Timeline;
