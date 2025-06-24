// Alternative working anime images - using CORS-friendly sources
export const alternativeAnimeImages: Record<string, string> = {
  'Attack on Titan': 'https://picsum.photos/300/400?random=1',
  'Shingeki no Kyojin': 'https://picsum.photos/300/400?random=1',
  'Demon Slayer': 'https://picsum.photos/300/400?random=2',
  'Kimetsu no Yaiba': 'https://picsum.photos/300/400?random=2',
  'My Hero Academia': 'https://picsum.photos/300/400?random=3',
  'Boku no Hero Academia': 'https://picsum.photos/300/400?random=3',
  'One Piece': 'https://picsum.photos/300/400?random=4',
  'Death Note': 'https://picsum.photos/300/400?random=5',
  'Naruto': 'https://picsum.photos/300/400?random=6',
  'One Punch Man': 'https://picsum.photos/300/400?random=7',
  'Jujutsu Kaisen': 'https://picsum.photos/300/400?random=8',
  'Cowboy Bebop': 'https://picsum.photos/300/400?random=9',
  'Spirited Away': 'https://picsum.photos/300/400?random=10',
  'Sen to Chihiro no Kamikakushi': 'https://picsum.photos/300/400?random=10',
  'Fullmetal Alchemist: Brotherhood': 'https://picsum.photos/300/400?random=11',
  'Hunter x Hunter': 'https://picsum.photos/300/400?random=12',
  'Dragon Ball Z': 'https://picsum.photos/300/400?random=13',
  'Tokyo Ghoul': 'https://picsum.photos/300/400?random=14',
  'Bleach': 'https://picsum.photos/300/400?random=15',
  'Mob Psycho 100': 'https://picsum.photos/300/400?random=16',
  'Chainsaw Man': 'https://picsum.photos/300/400?random=17',
  'Violet Evergarden': 'https://picsum.photos/300/400?random=18',
  'Your Name': 'https://picsum.photos/300/400?random=19',
  'Kimi no Na wa': 'https://picsum.photos/300/400?random=19',
  'Princess Mononoke': 'https://picsum.photos/300/400?random=20',
  'Mononoke Hime': 'https://picsum.photos/300/400?random=20',
};

// Working anime poster URLs (from CDNs that support CORS)
export const workingAnimeImages: Record<string, string> = {
  'Attack on Titan': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=center',
  'Demon Slayer': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=entropy',
  'My Hero Academia': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&h=400&fit=crop&crop=center',
  'One Piece': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&h=400&fit=crop&crop=entropy',
  'Death Note': 'https://images.unsplash.com/photo-1578662015742-4a1379fb97c0?w=300&h=400&fit=crop&crop=center',
  'Naruto': 'https://images.unsplash.com/photo-1578662015742-4a1379fb97c0?w=300&h=400&fit=crop&crop=entropy',
  'One Punch Man': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&h=400&fit=crop&crop=faces',
  'Jujutsu Kaisen': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=faces',
  'Cowboy Bebop': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&h=400&fit=crop&crop=edge',
  'Spirited Away': 'https://images.unsplash.com/photo-1578662015742-4a1379fb97c0?w=300&h=400&fit=crop&crop=edge',
  'Fullmetal Alchemist: Brotherhood': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=smart',
  'Hunter x Hunter': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&h=400&fit=crop&crop=smart',
  'Dragon Ball Z': 'https://images.unsplash.com/photo-1578662015742-4a1379fb97c0?w=300&h=400&fit=crop&crop=smart',
  'Tokyo Ghoul': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=top',
  'Bleach': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&h=400&fit=crop&crop=top',
  'Mob Psycho 100': 'https://images.unsplash.com/photo-1578662015742-4a1379fb97c0?w=300&h=400&fit=crop&crop=top',
  'Chainsaw Man': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=bottom',
  'Violet Evergarden': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&h=400&fit=crop&crop=bottom',
  'Your Name': 'https://images.unsplash.com/photo-1578662015742-4a1379fb97c0?w=300&h=400&fit=crop&crop=bottom',
  'Princess Mononoke': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=left',
};

export const getWorkingImageUrl = (title: string, originalUrl: string): string => {
  // Check if we have a working alternative
  if (workingAnimeImages[title]) {
    return workingAnimeImages[title];
  }
  
  // Check alternative names
  for (const [key, value] of Object.entries(workingAnimeImages)) {
    if (title.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(title.toLowerCase())) {
      return value;
    }
  }
  
  // Try the original URL first
  return originalUrl;
}; 