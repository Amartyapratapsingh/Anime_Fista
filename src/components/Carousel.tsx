import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimeCard from './AnimeCard';
import { Anime, Manga } from '../types/anime';

interface CarouselProps {
  title: string;
  items: (Anime | Manga)[];
  type: 'anime' | 'manga';
  showSeeAll?: boolean;
  cardSize?: 'small' | 'medium' | 'large';
}

const Carousel: React.FC<CarouselProps> = ({ 
  title, 
  items, 
  type, 
  showSeeAll = true,
  cardSize = 'medium'
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const scrollAmount = cardSize === 'small' ? 200 : cardSize === 'medium' ? 320 : 400;
    const targetScroll = direction === 'left' 
      ? scrollRef.current.scrollLeft - scrollAmount
      : scrollRef.current.scrollLeft + scrollAmount;

    scrollRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });

    // Update scroll indicators
    setTimeout(() => {
      if (scrollRef.current) {
        setCanScrollLeft(scrollRef.current.scrollLeft > 0);
        setCanScrollRight(
          scrollRef.current.scrollLeft < 
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        );
      }
    }, 300);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    setCanScrollLeft(scrollRef.current.scrollLeft > 0);
    setCanScrollRight(
      scrollRef.current.scrollLeft < 
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth
    );
  };

  return (
    <section className="mb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-white">{title}</h2>
        
        <div className="flex items-center space-x-4">
          {/* Navigation Buttons */}
          <div className="flex space-x-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-lg transition-all duration-200 ${
                canScrollLeft
                  ? 'bg-dark-800 hover:bg-dark-700 text-white hover:text-primary-400'
                  : 'bg-dark-900 text-dark-600 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-lg transition-all duration-200 ${
                canScrollRight
                  ? 'bg-dark-800 hover:bg-dark-700 text-white hover:text-primary-400'
                  : 'bg-dark-900 text-dark-600 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* See All Button */}
          {showSeeAll && (
            <button className="group flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors font-medium">
              <span>See all</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: { display: 'none' }
          }}
        >
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                className="flex-shrink-0"
              >
                <AnimeCard
                  item={item}
                  type={type}
                  size={cardSize}
                  showAddButton={true}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Gradient Fade Effects */}
        <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-dark-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-dark-950 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Carousel;