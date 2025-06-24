import React, { useState, useEffect } from 'react';

interface AnimeImageProps {
  src: string;
  alt: string;
  className?: string;
  title: string;
}

const AnimeImage: React.FC<AnimeImageProps> = ({ src, alt, className = '', title }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);

  const generateFallbackImage = (title: string) => {
    // Use a simple picsum fallback instead of canvas
    const fallbackId = Math.abs(title.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % 1000 + 300;
    return `https://picsum.photos/300/400?random=${fallbackId}`;
  };

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      setImageSrc(generateFallbackImage(title));
      setLoading(false);
    }
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    setImageSrc(src);
    setImageError(false);
    setLoading(true);
  }, [src]);

  return (
    <div className="relative">
      {loading && (
        <div className={`absolute inset-0 bg-gray-700 animate-pulse rounded ${className}`} />
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default AnimeImage; 