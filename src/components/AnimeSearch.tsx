import React, { useState, useEffect } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { Anime } from '../types/anime';
import { AnimeService } from '../data/mockData';
import AnimeCard from './AnimeCard';

interface AnimeSearchProps {
  onAnimeSelect?: (anime: Anime) => void;
}

const AnimeSearch: React.FC<AnimeSearchProps> = ({ onAnimeSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Anime[]>([]);
  const [topAnime, setTopAnime] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Load top anime on component mount
  useEffect(() => {
    const loadTopAnime = async () => {
      setLoading(true);
      try {
        const animes = await AnimeService.getTopAnime(25);
        setTopAnime(animes);
      } catch (error) {
        console.error('Error loading top anime:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTopAnime();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setHasSearched(true);

    try {
      const results = await AnimeService.searchAnime(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAnimeClick = (anime: Anime) => {
    if (onAnimeSelect) {
      onAnimeSelect(anime);
    }
  };

  const displayedAnime = hasSearched ? searchResults : topAnime;

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for anime... (e.g., Attack on Titan, Naruto, etc.)"
            className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 text-primary-400 animate-spin" />
            ) : (
              <button
                type="submit"
                className="bg-primary-400 hover:bg-primary-500 text-black px-4 py-2 rounded-md font-medium transition-colors"
              >
                Search
              </button>
            )}
          </button>
        </div>
      </form>

      {/* Results Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">
          {hasSearched ? (
            `Search Results for "${searchQuery}"`
          ) : (
            'Top Anime'
          )}
        </h2>
        
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 text-primary-400 animate-spin" />
            <span className="ml-2 text-white">Loading anime data...</span>
          </div>
        )}

        {!loading && displayedAnime.length === 0 && hasSearched && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No results found for "{searchQuery}". Try a different search term.
            </p>
          </div>
        )}

        {!loading && displayedAnime.length > 0 && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {displayedAnime.map((anime) => (
                <div
                  key={anime.id}
                  onClick={() => handleAnimeClick(anime)}
                  className="cursor-pointer"
                >
                  <AnimeCard
                    item={anime}
                    type="anime"
                    size="medium"
                    showAddButton={true}
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Showing {displayedAnime.length} results
              </p>
            </div>
          </>
        )}
      </div>

      {/* API Info */}
      <div className="mt-8 p-4 bg-dark-800 rounded-lg border border-dark-700">
        <h3 className="text-white font-semibold mb-2">About This Data</h3>
        <p className="text-gray-300 text-sm">
          This anime data is fetched from the Jikan API (MyAnimeList unofficial API) to provide 
          accurate anime information including correct cover images, ratings, and details. 
          All images are official anime posters from MyAnimeList.
        </p>
      </div>
    </div>
  );
};

export default AnimeSearch; 