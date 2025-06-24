import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Recommendation } from '../types/anime';

interface RecommendationSectionProps {
  recommendations: Recommendation[];
  title: string;
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({ 
  recommendations, 
  title 
}) => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-white">{title}</h2>
        <button className="group flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors font-medium">
          <span>See all recommendations</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.slice(0, 6).map((rec, index) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-dark-800 rounded-lg p-6 hover:bg-dark-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-400/10"
          >
            <div className="text-center mb-4">
              <span className="text-dark-400 text-sm font-medium">If you liked</span>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              {/* Source Anime */}
              <div className="flex-1">
                <div className="relative group cursor-pointer">
                  <img
                    src={rec.sourceAnime.coverImage}
                    alt={rec.sourceAnime.title}
                    className="w-full h-32 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMjYyNjI2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIzMDAiIHJ4PSIxMCIgZmlsbD0iIzQwNDA0MCIvPgo8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjMwIiBmaWxsPSIjRkY2QjQ3Ii8+PC9zdmc+";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-md" />
                </div>
                <h3 className="text-white font-medium text-sm mt-2 line-clamp-2">
                  {rec.sourceAnime.title}
                </h3>
                <div className="flex items-center space-x-1 mt-1">
                  <Heart size={12} className="text-primary-400 fill-current" />
                  <span className="text-xs text-dark-400">{rec.sourceAnime.rating}</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center space-y-2">
                <ArrowRight className="text-primary-400" size={20} />
                <div className="text-xs text-primary-400 font-medium bg-primary-400/20 px-2 py-1 rounded-full">
                  {rec.similarity}%
                </div>
              </div>

              {/* Recommended Anime */}
              <div className="flex-1">
                <div className="relative group cursor-pointer">
                  <img
                    src={rec.recommendedAnime.coverImage}
                    alt={rec.recommendedAnime.title}
                    className="w-full h-32 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMjYyNjI2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIzMDAiIHJ4PSIxMCIgZmlsbD0iIzQwNDA0MCIvPgo8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjMwIiBmaWxsPSIjRkY2QjQ3Ii8+PC9zdmc+";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-md" />
                </div>
                <h3 className="text-white font-medium text-sm mt-2 line-clamp-2">
                  {rec.recommendedAnime.title}
                </h3>
                <div className="flex items-center space-x-1 mt-1">
                  <Heart size={12} className="text-primary-400 fill-current" />
                  <span className="text-xs text-dark-400">{rec.recommendedAnime.rating}</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <span className="text-dark-400 text-sm font-medium mb-2 block">You might like</span>
              <p className="text-dark-300 text-xs leading-relaxed">{rec.reason}</p>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="flex-1 bg-primary-400 hover:bg-primary-500 text-black py-2 px-4 rounded-md text-sm font-medium transition-colors">
                Add to List
              </button>
              <button className="flex-1 border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black py-2 px-4 rounded-md text-sm font-medium transition-colors">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecommendationSection;