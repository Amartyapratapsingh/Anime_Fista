import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import ParallaxHero from './components/ParallaxHero';
import Carousel from './components/Carousel';
import RecommendationSection from './components/RecommendationSection';
import BrowseSection from './components/BrowseSection';
import AnimeSearch from './components/AnimeSearch';
import Footer from './components/Footer';
import { animeData, mangaData, recommendationData, realAnimeData } from './data/mockData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showRealAnimeSearch, setShowRealAnimeSearch] = useState(false);

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Scroll to browse section when searching
    const browseSection = document.getElementById('browse-section');
    if (browseSection) {
      browseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get featured data for carousels - use real anime data for first carousel
  const popularAnimeThisWeek = realAnimeData
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 8);

  const popularMangaThisWeek = mangaData
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 10);

  const seasonalAnime = realAnimeData
    .filter(anime => anime.status === 'Ongoing')
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const topRatedAnime = realAnimeData
    .filter(anime => anime.rating >= 8.5)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const newMangaReleases = mangaData
    .filter(manga => manga.year >= 2023)
    .sort((a, b) => b.year - a.year)
    .slice(0, 8);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="/ChatGPT Image Jun 16, 2025, 10_45_10 AM-Photoroom.png" 
              alt="Anime Fista Logo" 
              className="w-40 h-40 mx-auto logo-loading animate-spin-slow rounded-full object-cover border-4 border-primary-400/30"
              onError={(e) => {
                console.log('Loading logo failed, trying fallback');
                e.currentTarget.src = '/anime-fista-logo.png';
              }}
            />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent mb-4">
            Anime Fista
          </h1>
          <p className="text-dark-400 text-lg">Discover Your Next Adventure</p>
          <div className="mt-8">
            <div className="animate-pulse flex space-x-1 justify-center">
              <div className="rounded-full bg-blue-400 h-2 w-2"></div>
              <div className="rounded-full bg-red-400 h-2 w-2"></div>
              <div className="rounded-full bg-blue-400 h-2 w-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Header onSearch={handleSearch} />
      
      <main>
        <ParallaxHero />
        
        {/* Real Anime Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-dark-900/30 border-b border-dark-800"
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">
                Search Real Anime Database
              </h2>
              <button
                onClick={() => setShowRealAnimeSearch(!showRealAnimeSearch)}
                className="bg-primary-400 hover:bg-primary-500 text-black px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {showRealAnimeSearch ? 'Hide Search' : 'Show Real Anime Search'}
              </button>
            </div>
            
            {showRealAnimeSearch && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AnimeSearch />
              </motion.div>
            )}
          </div>
        </motion.div>
        
        <div className="container mx-auto px-4 py-12 space-y-16">
          {/* Popular This Week Section - Now with Real Data */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-carousel="popular-anime"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Popular Anime This Week</h2>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Real Data ✓
              </span>
            </div>
            <Carousel
              title=""
              items={popularAnimeThisWeek}
              type="anime"
              cardSize="medium"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Carousel
              title="Popular Manga This Week"
              items={popularMangaThisWeek}
              type="manga"
              cardSize="small"
            />
          </motion.div>

          {/* Recommendations Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <RecommendationSection
              recommendations={recommendationData}
              title="Newest Anime Recommendations"
            />
          </motion.div>

          {/* Seasonal Anime - Real Data */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Current Season Anime</h2>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Real Data ✓
              </span>
            </div>
            <Carousel
              title=""
              items={seasonalAnime}
              type="anime"
              cardSize="medium"
            />
          </motion.div>

          {/* Top Rated - Real Data */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Top Rated Anime</h2>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Real Data ✓
              </span>
            </div>
            <Carousel
              title=""
              items={topRatedAnime}
              type="anime"
              cardSize="medium"
            />
          </motion.div>

          {/* New Manga */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Carousel
              title="Newest Manga Recommendations"
              items={newMangaReleases}
              type="manga"
              cardSize="small"
            />
          </motion.div>
        </div>

        {/* Browse Section */}
        <motion.div
          id="browse-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-dark-900/50 border-t border-dark-800"
        >
          <BrowseSection
            animeData={animeData}
            mangaData={mangaData}
            searchQuery={searchQuery}
          />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default App;