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

  // Alternative image sources to try
  const getAlternativeSources = (originalSrc: string) => {
    const alternatives = [];
    
    // If it's a MyAnimeList image, try different variations
    if (originalSrc.includes('myanimelist.net')) {
      alternatives.push(originalSrc);
      
      // Try smaller version if large fails
      if (originalSrc.includes('large_image_url')) {
        alternatives.push(originalSrc.replace('large_image_url', 'image_url'));
      }
      
      // Try different CDN endpoints
      alternatives.push(originalSrc.replace('cdn.myanimelist.net', 'myanimelist.net'));
      
      // Try with CORS proxy
      alternatives.push(`https://api.allorigins.win/raw?url=${encodeURIComponent(originalSrc)}`);
    } else {
      alternatives.push(originalSrc);
    }

    return alternatives;
  };

  const generateFallbackImage = (title: string) => {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Background
      ctx.fillStyle = '#262626';
      ctx.fillRect(0, 0, 300, 400);
      
      // Inner rectangle with rounded corners (manual implementation)
      ctx.fillStyle = '#404040';
      const rectX = 50, rectY = 50, width = 200, height = 300, radius = 10;
      ctx.beginPath();
      ctx.moveTo(rectX + radius, rectY);
      ctx.lineTo(rectX + width - radius, rectY);
      ctx.quadraticCurveTo(rectX + width, rectY, rectX + width, rectY + radius);
      ctx.lineTo(rectX + width, rectY + height - radius);
      ctx.quadraticCurveTo(rectX + width, rectY + height, rectX + width - radius, rectY + height);
      ctx.lineTo(rectX + radius, rectY + height);
      ctx.quadraticCurveTo(rectX, rectY + height, rectX, rectY + height - radius);
      ctx.lineTo(rectX, rectY + radius);
      ctx.quadraticCurveTo(rectX, rectY, rectX + radius, rectY);
      ctx.closePath();
      ctx.fill();
      
      // Circle
      ctx.fillStyle = '#FF6B47';
      ctx.beginPath();
      ctx.arc(150, 150, 30, 0, 2 * Math.PI);
      ctx.fill();
      
      // Title text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const maxWidth = 180;
      const text = title.length > 20 ? title.slice(0, 20) + '...' : title;
      
      // Word wrap for title
      const words = text.split(' ');
      let line = '';
      let textY = 250;
      
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, 150, textY);
          line = words[n] + ' ';
          textY += 20;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 150, textY);
      
      // "No Image" text
      ctx.fillStyle = '#cccccc';
      ctx.font = '12px Arial, sans-serif';
      ctx.fillText('No Image Available', 150, textY + 30);
    }
    
    return canvas.toDataURL();
  };

  const handleImageError = async () => {
    if (!imageError) {
      setImageError(true);
      const alternatives = getAlternativeSources(src);
      
      // Try each alternative source
      for (let i = 1; i < alternatives.length; i++) {
        try {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          
          const loadPromise = new Promise<boolean>((resolve) => {
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = alternatives[i];
          });
          
          const loaded = await loadPromise;
          if (loaded) {
            setImageSrc(alternatives[i]);
            setImageError(false);
            return;
          }
        } catch (error) {
          console.log(`Failed to load alternative ${i}:`, error);
        }
      }
      
      // If all alternatives fail, use generated fallback
      setImageSrc(generateFallbackImage(title));
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
        className={className}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading="lazy"
        crossOrigin="anonymous"
        style={{ display: loading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default AnimeImage; 