import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import ParallaxHero from './components/ParallaxHero';
import AnimeSearch from './components/AnimeSearch';
import Footer from './components/Footer';
import { realAnimeData, AnimeService } from './data/mockData';
import { Anime } from './types/anime';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showRealAnimeSearch, setShowRealAnimeSearch] = useState(true);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Show the search section when user searches
    setShowRealAnimeSearch(true);
    // Scroll to search section when searching
    setTimeout(() => {
      const searchSection = document.getElementById('search-section');
      if (searchSection) {
        searchSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Header onSearch={handleSearch} />
      
      <main>
        <ParallaxHero />
        
        {/* Real Anime Search Section */}
        <motion.div
          id="search-section"
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
      </main>

      <Footer />
    </div>
  );
}

export default App;