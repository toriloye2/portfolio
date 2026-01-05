import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'motion/react';

function JourneyCard({ item, isActive, prefersReducedMotion }) {
	const [isExpanded, setIsExpanded] = useState(false);

	// Animation variants
	const cardVariants = {
		active: {
			opacity: 1,
			scale: 1,
			y: 0,
			filter: 'blur(0px)',
		},
		inactive: {
			opacity: prefersReducedMotion ? 0.5 : 0.3,
			scale: prefersReducedMotion ? 1 : 0.95,
			y: prefersReducedMotion ? 0 : 10,
			filter: prefersReducedMotion ? 'blur(0px)' : 'blur(3px)',
		},
	};

	const visibleBullets = isExpanded ? item.description : item.description.slice(0, 3);
	const hasMore = item.description.length > 3;

	return (
		<motion.div
			variants={cardVariants}
			animate={isActive ? 'active' : 'inactive'}
			transition={{
				duration: prefersReducedMotion ? 0.1 : 0.4,
				ease: 'easeOut',
			}}
			className="h-full"
		>
			<div className={`h-full p-6 md:p-8 rounded-2xl border bg-white dark:bg-stone-800 shadow-lg transition-shadow duration-300 ${
				isActive
					? 'border-blue-200 dark:border-orange-500/30 shadow-xl'
					: 'border-stone-200 dark:border-stone-700'
			}`}>
				{/* Header */}
				<div className="flex flex-wrap items-start justify-between gap-2 mb-4">
					<span className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${
						isActive ? 'text-blue-500 dark:text-orange-400' : 'text-stone-300 dark:text-stone-600'
					}`}>
						{item.year}
					</span>
					<span className={`text-sm px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-300 ${
						isActive
							? 'bg-blue-50 dark:bg-orange-900/30 text-blue-600 dark:text-orange-400'
							: 'bg-stone-100 dark:bg-stone-700 text-stone-400'
					}`}>
						{item.dateRange}
					</span>
				</div>

				{/* Title & Company */}
				<h3 className={`text-lg md:text-xl font-bold mb-1 transition-colors duration-300 ${
					isActive ? 'text-stone-900 dark:text-white' : 'text-stone-400 dark:text-stone-500'
				}`}>
					{item.title}
				</h3>
				<p className={`text-sm mb-4 transition-colors duration-300 ${
					isActive ? 'text-blue-600 dark:text-orange-400' : 'text-stone-400'
				}`}>
					{item.company}
				</p>

				{/* Description bullets */}
				<ul className={`space-y-2 text-sm transition-colors duration-300 ${
					isActive ? 'text-stone-600 dark:text-stone-300' : 'text-stone-400 dark:text-stone-500'
				}`}>
					{visibleBullets.map((bullet, idx) => (
						<li key={idx} className="flex items-start gap-2">
							<span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
								isActive ? 'bg-blue-500 dark:bg-orange-400' : 'bg-stone-300 dark:bg-stone-600'
							}`} />
							<span>{bullet}</span>
						</li>
					))}
				</ul>

				{/* Read more button */}
				{hasMore && (
					<button
						onClick={(e) => {
							e.stopPropagation();
							setIsExpanded(!isExpanded);
						}}
						className={`mt-3 text-sm font-medium transition-colors ${
							isActive
								? 'text-blue-500 hover:text-blue-600 dark:text-orange-400 dark:hover:text-orange-300'
								: 'text-stone-400 hover:text-stone-500'
						}`}
					>
						{isExpanded ? 'Show less' : `+${item.description.length - 3} more`}
					</button>
				)}
			</div>
		</motion.div>
	);
}

function JourneyCarousel({ items }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const containerRef = useRef(null);
	const mobileScrollRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);
	const prefersReducedMotion = useReducedMotion();

	// Check if mobile
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// Desktop: Scroll-driven active card (using IntersectionObserver on scroll position)
	useEffect(() => {
		if (isMobile || !containerRef.current) return;

		const handleScroll = () => {
			const container = containerRef.current;
			if (!container) return;

			const rect = container.getBoundingClientRect();
			const containerHeight = container.offsetHeight;
			const viewportHeight = window.innerHeight;

			// Calculate how far through the sticky section we've scrolled
			const scrollProgress = Math.max(0, Math.min(1,
				(viewportHeight - rect.top) / (containerHeight + viewportHeight)
			));

			// Map scroll progress to card index
			const newIndex = Math.min(
				items.length - 1,
				Math.floor(scrollProgress * items.length)
			);

			if (newIndex !== activeIndex && newIndex >= 0) {
				setActiveIndex(newIndex);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, [isMobile, items.length, activeIndex]);

	// Mobile: Scroll snap observer
	useEffect(() => {
		if (!isMobile || !mobileScrollRef.current) return;

		const scrollContainer = mobileScrollRef.current;

		const handleScroll = () => {
			const scrollLeft = scrollContainer.scrollLeft;
			const cardWidth = scrollContainer.offsetWidth * 0.85; // 85% width cards
			const gap = 16;
			const newIndex = Math.round(scrollLeft / (cardWidth + gap));
			if (newIndex !== activeIndex && newIndex >= 0 && newIndex < items.length) {
				setActiveIndex(newIndex);
			}
		};

		scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
		return () => scrollContainer.removeEventListener('scroll', handleScroll);
	}, [isMobile, activeIndex, items.length]);

	// Keyboard navigation
	const handleKeyDown = useCallback((e) => {
		if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
			e.preventDefault();
			setActiveIndex((prev) => Math.max(0, prev - 1));
		} else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
			e.preventDefault();
			setActiveIndex((prev) => Math.min(items.length - 1, prev + 1));
		}
	}, [items.length]);

	// Scroll to card on mobile when activeIndex changes via dots/keyboard
	useEffect(() => {
		if (!isMobile || !mobileScrollRef.current) return;
		const scrollContainer = mobileScrollRef.current;
		const cardWidth = scrollContainer.offsetWidth * 0.85;
		const gap = 16;
		scrollContainer.scrollTo({
			left: activeIndex * (cardWidth + gap),
			behavior: prefersReducedMotion ? 'auto' : 'smooth',
		});
	}, [activeIndex, isMobile, prefersReducedMotion]);

	// Navigate to specific card
	const goToCard = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className="py-12">
			{/* Header */}
			<motion.span
				className="block text-sm font-medium tracking-widest text-blue-600 dark:text-orange-400 mb-4 uppercase text-center"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.3 }}
			>
				Experience & Education
			</motion.span>
			<motion.h2
				className="text-3xl md:text-4xl font-bold mb-8 text-center text-stone-900 dark:text-white"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				My Journey
			</motion.h2>

			{/* Desktop: Sticky scroll-driven carousel */}
			<div
				ref={containerRef}
				className="hidden md:block"
				style={{ height: `${items.length * 60}vh` }} // Scroll height based on items
			>
				<div className="sticky top-24 h-[70vh] flex items-center">
					<div
						className="relative w-full max-w-2xl mx-auto px-4"
						role="region"
						aria-label="Journey timeline"
						tabIndex={0}
						onKeyDown={handleKeyDown}
					>
						{/* Cards stack */}
						<div className="relative h-[400px]">
							{items.map((item, index) => {
								const isActive = index === activeIndex;
								const isNext = index === activeIndex + 1;
								const isPrev = index === activeIndex - 1;
								const isVisible = isActive || isNext || isPrev;

								if (!isVisible) return null;

								let xOffset = 0;
								let zIndex = 0;

								if (isActive) {
									xOffset = 0;
									zIndex = 10;
								} else if (isNext) {
									xOffset = 60;
									zIndex = 5;
								} else if (isPrev) {
									xOffset = -60;
									zIndex = 5;
								}

								return (
									<motion.div
										key={item.year}
										className="absolute inset-0"
										initial={false}
										animate={{
											x: xOffset,
											zIndex,
										}}
										transition={{
											duration: prefersReducedMotion ? 0.1 : 0.4,
											ease: 'easeOut',
										}}
									>
										<JourneyCard
											item={item}
											isActive={isActive}
											prefersReducedMotion={prefersReducedMotion}
										/>
									</motion.div>
								);
							})}
						</div>

						{/* Pagination dots */}
						<div
							className="flex justify-center gap-2 mt-6"
							role="tablist"
							aria-label="Journey navigation"
						>
							{items.map((item, index) => (
								<button
									key={index}
									onClick={() => goToCard(index)}
									role="tab"
									aria-selected={index === activeIndex}
									aria-label={`Go to ${item.year}: ${item.title}`}
									className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-orange-500 focus:ring-offset-2 ${
										index === activeIndex
											? 'bg-blue-500 dark:bg-orange-500 w-8'
											: 'bg-stone-300 dark:bg-stone-600 hover:bg-stone-400 w-2.5'
									}`}
								/>
							))}
						</div>

						{/* Keyboard hint */}
						<p className="text-center text-xs text-stone-400 mt-4">
							Use arrow keys or scroll to navigate
						</p>
					</div>
				</div>
			</div>

			{/* Mobile: Horizontal scroll-snap carousel */}
			<div className="md:hidden">
				<div
					ref={mobileScrollRef}
					className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-4 scrollbar-hide"
					style={{
						scrollbarWidth: 'none',
						msOverflowStyle: 'none',
						WebkitOverflowScrolling: 'touch',
					}}
					role="region"
					aria-label="Journey timeline"
					tabIndex={0}
					onKeyDown={handleKeyDown}
				>
					{items.map((item, index) => (
						<div
							key={item.year}
							className="flex-shrink-0 w-[85vw] snap-center"
						>
							<JourneyCard
								item={item}
								isActive={index === activeIndex}
								prefersReducedMotion={prefersReducedMotion}
							/>
						</div>
					))}
				</div>

				{/* Mobile pagination dots */}
				<div
					className="flex justify-center gap-2 mt-4"
					role="tablist"
					aria-label="Journey navigation"
				>
					{items.map((item, index) => (
						<button
							key={index}
							onClick={() => goToCard(index)}
							role="tab"
							aria-selected={index === activeIndex}
							aria-label={`Go to ${item.year}: ${item.title}`}
							className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-orange-500 ${
								index === activeIndex
									? 'bg-blue-500 dark:bg-orange-500 w-6'
									: 'bg-stone-300 dark:bg-stone-600 w-2'
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default JourneyCarousel;
