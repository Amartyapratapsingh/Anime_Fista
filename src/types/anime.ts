export interface Anime {
  id: number;
  title: string;
  englishTitle?: string;
  coverImage: string;
  rating: number;
  studio: string;
  type: 'TV' | 'Movie' | 'OVA' | 'Special' | 'ONA';
  episodes: number;
  year: number;
  season: 'Spring' | 'Summer' | 'Fall' | 'Winter';
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  genres: string[];
  synopsis: string;
  popularity: number;
  staff: string[];
  themes: string[];
}

export interface Manga {
  id: number;
  title: string;
  englishTitle?: string;
  coverImage: string;
  rating: number;
  author: string;
  type: 'Manga' | 'Manhwa' | 'Manhua' | 'Novel';
  chapters: number;
  year: number;
  status: 'Completed' | 'Ongoing' | 'Hiatus';
  genres: string[];
  synopsis: string;
  popularity: number;
}

export interface UserList {
  id: number;
  userId: string;
  animeId?: number;
  mangaId?: number;
  status: 'watching' | 'completed' | 'dropped' | 'plan-to-watch' | 'on-hold';
  progress: number;
  rating?: number;
  addedAt: Date;
}

export interface Recommendation {
  id: number;
  sourceAnime: Anime;
  recommendedAnime: Anime;
  reason: string;
  similarity: number;
}