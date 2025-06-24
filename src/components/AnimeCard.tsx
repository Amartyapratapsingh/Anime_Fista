import React, { useState } from 'react';
import { Star, Plus, Play, Heart, BookOpen } from 'lucide-react';
import { Anime, Manga } from '../types/anime';
import AnimeImage from './AnimeImage';

interface AnimeCardProps {
  item: Anime | Manga;
  type: 'anime' | 'manga';
  size?: 'small' | 'medium' | 'large';
  showAddButton?: boolean;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ 
  item, 
  type, 
  size = 'medium', 
  showAddButton = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const sizeClasses = {
    small: 'w-32 h-48',
    medium: 'w-40 h-56',
    large: 'w-48 h-64',
  };

  const handleAddToList = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdded(!isAdded);
  };

  return (
    <div
      className={`${sizeClasses[size]} relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card */}
      <div className="relative h-full bg-dark-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary-400/20 transition-all duration-300">
        {/* Cover Image */}
        <div className="relative h-3/4 overflow-hidden">
          <AnimeImage
            src={item.coverImage}
            alt={item.title}
            title={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Rating Badge */}
          <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md flex items-center space-x-1">
            <Star size={12} className="text-yellow-400 fill-current" />
            <span className="text-xs font-medium text-white">{item.rating}</span>
          </div>

          {/* Type Badge */}
          <div className="absolute top-2 right-2 bg-primary-400 text-black px-2 py-1 rounded-md text-xs font-bold">
            {'type' in item ? item.type : 'Manga'}
          </div>

          {/* Real Data Badge */}
          {(item.coverImage.includes('myanimelist.net') || item.coverImage.includes('cdn.myanimelist.net')) && (
            <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold">
              Real ✓
            </div>
          )}

          {/* Hover Play Button */}
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 animate-fade-in">
              <div className="bg-primary-400 hover:bg-primary-500 text-black p-3 rounded-full transform transition-all duration-200 hover:scale-110">
                {type === 'anime' ? <Play size={24} /> : <BookOpen size={24} />}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3 h-1/4 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-white text-sm line-clamp-2 leading-tight mb-1">
              {item.title}
            </h3>
            <p className="text-dark-400 text-xs">
              {'studio' in item ? item.studio : item.author} • {item.year}
            </p>
          </div>
        </div>

        {/* Add to List Button */}
        {showAddButton && (
          <button
            onClick={handleAddToList}
            className={`absolute bottom-2 right-2 p-2 rounded-full transition-all duration-200 transform hover:scale-110 ${
              isAdded
                ? 'bg-green-500 text-white'
                : 'bg-primary-400 hover:bg-primary-500 text-black'
            }`}
          >
            {isAdded ? <Heart size={14} className="fill-current" /> : <Plus size={14} />}
          </button>
        )}
      </div>

      {/* Hover Card Extension */}
      {isHovered && size !== 'small' && (
        <div className="absolute left-full top-0 ml-2 w-80 bg-dark-800 border border-dark-700 rounded-lg shadow-2xl z-20 p-4 animate-slide-in">
          <div className="flex space-x-4">
            <AnimeImage
              src={item.coverImage}
              alt={item.title}
              title={item.title}
              className="w-20 h-28 object-cover rounded-md flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <div className="flex items-center space-x-4 mb-2">
                <div className="flex items-center space-x-1">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span className="text-sm text-white">{item.rating}</span>
                </div>
                <span className="text-sm text-dark-400">
                  {'episodes' in item ? `${item.episodes} eps` : `${item.chapters} ch`}
                </span>
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {item.genres.slice(0, 3).map((genre) => (
                  <span
                    key={genre}
                    className="bg-primary-400/20 text-primary-400 px-2 py-1 rounded-md text-xs"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <p className="text-dark-300 text-sm line-clamp-3">
                {item.synopsis}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeCard;