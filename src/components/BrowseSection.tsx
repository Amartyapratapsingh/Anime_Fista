import React, { useState, useMemo } from 'react';
import { Grid3X3, List, ChevronDown, Filter, SortAsc } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimeCard from './AnimeCard';
import { Anime, Manga } from '../types/anime';

interface BrowseSectionProps {
  animeData: Anime[];
  mangaData: Manga[];
  searchQuery: string;
}

const BrowseSection: React.FC<BrowseSectionProps> = ({ 
  animeData, 
  mangaData, 
  searchQuery 
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'top' | 'season' | 'studio' | 'tag'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'rating' | 'title' | 'year' | 'popularity'>('rating');
  const [filterGenre, setFilterGenre] = useState<string>('all');
  const [filterType, setFilterType] = useState<'all' | 'anime' | 'manga'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const tabs = [
    { key: 'all' as const, label: 'View All', count: animeData.length + mangaData.length },
    { key: 'top' as const, label: 'Top Anime', count: animeData.filter(a => a.rating >= 8.5).length },
    { key: 'season' as const, label: 'Browse by Season', count: animeData.length },
    { key: 'studio' as const, label: 'Browse by Studio', count: animeData.length },
    { key: 'tag' as const, label: 'Browse by Tag', count: animeData.length + mangaData.length },
  ];

  const allGenres = useMemo(() => {
    const genres = new Set<string>();
    [...animeData, ...mangaData].forEach(item => {
      item.genres.forEach(genre => genres.add(genre));
    });
    return Array.from(genres).sort();
  }, [animeData, mangaData]);

  const filteredAndSortedItems = useMemo(() => {
    let items: (Anime | Manga)[] = [];

    // Filter by tab
    switch (activeTab) {
      case 'all':
        items = filterType === 'anime' ? animeData : 
               filterType === 'manga' ? mangaData : 
               [...animeData, ...mangaData];
        break;
      case 'top':
        items = animeData.filter(anime => anime.rating >= 8.5);
        break;
      case 'season':
        items = animeData.filter(anime => anime.status === 'Ongoing');
        break;
      case 'studio':
        items = animeData;
        break;
      case 'tag':
        items = [...animeData, ...mangaData];
        break;
    }

    // Filter by search query
    if (searchQuery) {
      items = items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.englishTitle && item.englishTitle.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by genre
    if (filterGenre !== 'all') {
      items = items.filter(item => item.genres.includes(filterGenre));
    }

    // Sort items
    items.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'title':
          return a.title.localeCompare(b.title);
        case 'year':
          return b.year - a.year;
        case 'popularity':
          return b.popularity - a.popularity;
        default:
          return 0;
      }
    });

    return items;
  }, [activeTab, filterType, filterGenre, searchQuery, sortBy, animeData, mangaData]);

  const totalPages = Math.ceil(filteredAndSortedItems.length / itemsPerPage);
  const currentItems = filteredAndSortedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPaginationNumbers = () => {
    const numbers = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-dark-800">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              setCurrentPage(1);
            }}
            className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
              activeTab === tab.key
                ? 'text-primary-400 border-primary-400'
                : 'text-dark-400 border-transparent hover:text-white hover:border-dark-600'
            }`}
          >
            {tab.label}
            <span className="ml-2 text-sm opacity-70">({tab.count.toLocaleString()})</span>
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8 bg-dark-800 p-4 rounded-lg">
        {/* Left Side - Filters */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Type Filter */}
          <div className="flex items-center space-x-2">
            <Filter size={18} className="text-dark-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as 'all' | 'anime' | 'manga')}
              className="bg-dark-700 text-white px-3 py-2 rounded-md border border-dark-600 focus:border-primary-400 focus:outline-none"
            >
              <option value="all">All Types</option>
              <option value="anime">Anime Only</option>
              <option value="manga">Manga Only</option>
            </select>
          </div>

          {/* Genre Filter */}
          <select
            value={filterGenre}
            onChange={(e) => setFilterGenre(e.target.value)}
            className="bg-dark-700 text-white px-3 py-2 rounded-md border border-dark-600 focus:border-primary-400 focus:outline-none"
          >
            <option value="all">All Genres</option>
            {allGenres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>

          {/* Sort */}
          <div className="flex items-center space-x-2">
            <SortAsc size={18} className="text-dark-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'rating' | 'title' | 'year' | 'popularity')}
              className="bg-dark-700 text-white px-3 py-2 rounded-md border border-dark-600 focus:border-primary-400 focus:outline-none"
            >
              <option value="rating">Sort by Rating</option>
              <option value="title">Sort by Title</option>
              <option value="year">Sort by Year</option>
              <option value="popularity">Sort by Popularity</option>
            </select>
          </div>
        </div>

        {/* Right Side - View Mode and Results Count */}
        <div className="flex items-center justify-between gap-4">
          <span className="text-dark-400 text-sm">
            {filteredAndSortedItems.length.toLocaleString()} results
          </span>
          
          <div className="flex bg-dark-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid'
                  ? 'bg-primary-400 text-black'
                  : 'text-dark-400 hover:text-white'
              }`}
            >
              <Grid3X3 size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-primary-400 text-black'
                  : 'text-dark-400 hover:text-white'
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeTab}-${currentPage}-${viewMode}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-8">
              {currentItems.map((item) => (
                <AnimeCard
                  key={`${item.id}-${'studio' in item ? 'anime' : 'manga'}`}
                  item={item}
                  type={'studio' in item ? 'anime' : 'manga'}
                  size="medium"
                  showAddButton={true}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4 mb-8">
              {currentItems.map((item) => (
                <div
                  key={`${item.id}-${'studio' in item ? 'anime' : 'manga'}`}
                  className="bg-dark-800 rounded-lg p-4 hover:bg-dark-700 transition-colors"
                >
                  <div className="flex space-x-4">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-16 h-24 object-cover rounded-md flex-shrink-0"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMjYyNjI2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIzMDAiIHJ4PSIxMCIgZmlsbD0iIzQwNDA0MCIvPgo8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjMwIiBmaWxsPSIjRkY2QjQ3Ii8+PC9zdmc+";
                      }}
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        <span className="text-primary-400">★ {item.rating}</span>
                        <span className="text-dark-400">
                          {'studio' in item ? item.studio : item.author}
                        </span>
                        <span className="text-dark-400">
                          {'episodes' in item ? `${item.episodes} episodes` : `${item.chapters} chapters`}
                        </span>
                        <span className="text-dark-400">{item.year}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {item.genres.slice(0, 4).map((genre) => (
                          <span
                            key={genre}
                            className="bg-primary-400/20 text-primary-400 px-2 py-1 rounded-md text-xs"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                      <p className="text-dark-300 text-sm line-clamp-2">{item.synopsis}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-md bg-dark-800 text-white hover:bg-dark-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ‹‹
          </button>

          {getPaginationNumbers().map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === number
                  ? 'bg-primary-400 text-black'
                  : 'bg-dark-800 text-white hover:bg-dark-700'
              }`}
            >
              {number}
            </button>
          ))}

          {totalPages > 5 && currentPage < totalPages - 2 && (
            <>
              <span className="text-dark-400">...</span>
              <button
                onClick={() => handlePageChange(totalPages)}
                className="px-3 py-2 rounded-md bg-dark-800 text-white hover:bg-dark-700 transition-colors"
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-md bg-dark-800 text-white hover:bg-dark-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ››
          </button>
        </div>
      )}
    </section>
  );
};

export default BrowseSection;