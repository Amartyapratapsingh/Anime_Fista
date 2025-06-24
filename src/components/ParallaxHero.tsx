import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Star, TrendingUp } from 'lucide-react';

const ParallaxHero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 600], [0, -200]);
  const middlegroundY = useTransform(scrollY, [0, 600], [0, -100]);
  const foregroundY = useTransform(scrollY, [0, 600], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleStartExploring = () => {
    const browseSection = document.getElementById('browse-section');
    if (browseSection) {
      browseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewTrending = () => {
    // Scroll to the first carousel section (Popular This Week)
    const firstCarousel = document.querySelector('[data-carousel="popular-anime"]');
    if (firstCarousel) {
      firstCarousel.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to scrolling down by a fixed amount
      window.scrollBy({ top: 800, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[600px] overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900/20">
      {/* Background Layer - Japanese Wave Pattern */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-20"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 400C200 350 400 450 600 400C800 350 1000 450 1200 400V600H0V400Z"
            fill="url(#wave1)"
          />
          <path
            d="M0 450C200 400 400 500 600 450C800 400 1000 500 1200 450V600H0V450Z"
            fill="url(#wave2)"
          />
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B47" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#FF4920" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FF6B47" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF4920" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#FF6B47" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FF4920" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        style={{ y: middlegroundY }}
        className="absolute inset-0"
      >
        {/* Floating Stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-primary-400/20 to-primary-600/30 blur-sm"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: foregroundY }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to
              <br />
              <span className="text-primary-400">Anime Fista</span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-dark-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover anime, track your progress, get personalized recommendations
              <br />
              <span className="text-primary-400 font-semibold">Join the ultimate anime community</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button 
                onClick={handleStartExploring}
                className="group bg-primary-400 hover:bg-primary-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-400/25"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Play size={20} className="group-hover:scale-110 transition-transform" />
                  <span>Start Exploring</span>
                </div>
              </button>
              
              <button 
                onClick={handleViewTrending}
                className="group border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-2">
                  <TrendingUp size={20} className="group-hover:scale-110 transition-transform" />
                  <span>View Trending</span>
                </div>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">1,200+</div>
                <div className="text-dark-400 text-sm">Anime Series</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">500+</div>
                <div className="text-dark-400 text-sm">Manga Titles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">50K+</div>
                <div className="text-dark-400 text-sm">Community</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Planet */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 shadow-2xl shadow-primary-400/30 flex items-center justify-center relative overflow-hidden">
                {/* Planet Surface Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary-300 rounded-full blur-sm"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-primary-600 rounded-full blur-sm"></div>
                  <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-primary-200 rounded-full blur-sm"></div>
                </div>
                
                {/* Custom Image replacing AF Logo */}
                <img 
                  src="/ChatGPT Image Jun 16, 2025, 10_45_10 AM-Photoroom.png" 
                  alt="Anime Fista Hero" 
                  className="w-72 h-72 rounded-full object-cover z-10 border-4 border-primary-300/50"
                  onError={(e) => {
                    // Fallback to original AF text if image fails to load
                    const target = e.target as HTMLImageElement;
                    const parent = target.parentElement!;
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'text-6xl font-bold text-black z-10 select-none';
                    fallbackDiv.textContent = 'AF';
                    parent.replaceChild(fallbackDiv, target);
                  }}
                />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-primary-700/50"></div>
              </div>

              {/* Orbiting Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-400 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent"></div>
    </div>
  );
};

export default ParallaxHero;