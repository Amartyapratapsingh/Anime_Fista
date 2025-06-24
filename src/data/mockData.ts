import { Anime, Manga, Recommendation } from '../types/anime';
import { getWorkingImageUrl } from './alternativeImages';

// Real anime data with actual cover images - Updated with working URLs
export const realAnimeData: Anime[] = [
  {
    id: 1,
    title: 'Attack on Titan',
    englishTitle: 'Shingeki no Kyojin',
    coverImage: getWorkingImageUrl('Attack on Titan', 'https://cdn.myanimelist.net/images/anime/10/47347.jpg'),
    rating: 9.0,
    studio: 'Sunrise',
    type: 'TV',
    episodes: 87,
    year: 2013,
    season: 'Spring',
    status: 'Completed',
    genres: ['Action', 'Drama', 'Fantasy'],
    synopsis: 'Humanity fights for survival against giant humanoid Titans.',
    popularity: 1000000,
    staff: ['Hajime Isayama', 'Tetsuro Araki', 'Yuki Kaji'],
    themes: ['Military', 'Survival'],
  },
  {
    id: 2,
    title: 'Demon Slayer',
    englishTitle: 'Kimetsu no Yaiba',
    coverImage: getWorkingImageUrl('Demon Slayer', 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg'),
    rating: 8.7,
    studio: 'Ufotable',
    type: 'TV',
    episodes: 44,
    year: 2019,
    season: 'Spring',
    status: 'Completed',
    genres: ['Action', 'Supernatural', 'Historical'],
    synopsis: 'A young boy becomes a demon slayer to save his sister.',
    popularity: 950000,
    staff: ['Koyoharu Gotouge', 'Haruo Sotozaki', 'Natsuki Hanae'],
    themes: ['Demons', 'Family'],
  },
  {
    id: 3,
    title: 'My Hero Academia',
    englishTitle: 'Boku no Hero Academia',
    coverImage: getWorkingImageUrl('My Hero Academia', 'https://cdn.myanimelist.net/images/anime/10/78745.jpg'),
    rating: 7.9,
    studio: 'Bones',
    type: 'TV',
    episodes: 138,
    year: 2016,
    season: 'Spring',
    status: 'Ongoing',
    genres: ['Action', 'School', 'Superhero'],
    synopsis: 'In a world where most people have superpowers, a boy without them dreams of becoming a hero.',
    popularity: 900000,
    staff: ['Kohei Horikoshi', 'Kenji Nagasaki', 'Daiki Yamashita'],
    themes: ['School', 'Superhero'],
  },
  {
    id: 4,
    title: 'One Piece',
    englishTitle: 'One Piece',
    coverImage: getWorkingImageUrl('One Piece', 'https://cdn.myanimelist.net/images/anime/6/73245.jpg'),
    rating: 9.0,
    studio: 'Toei Animation',
    type: 'TV',
    episodes: 1000,
    year: 1999,
    season: 'Fall',
    status: 'Ongoing',
    genres: ['Action', 'Adventure', 'Comedy'],
    synopsis: 'A young pirate with rubber powers searches for the ultimate treasure.',
    popularity: 850000,
    staff: ['Eiichiro Oda', 'Eiichiro Oda', 'Mayumi Tanaka'],
    themes: ['Pirates', 'Adventure'],
  },
  {
    id: 5,
    title: 'Death Note',
    englishTitle: 'Death Note',
    coverImage: getWorkingImageUrl('Death Note', 'https://cdn.myanimelist.net/images/anime/9/9453.jpg'),
    rating: 9.0,
    studio: 'Madhouse',
    type: 'TV',
    episodes: 37,
    year: 2006,
    season: 'Fall',
    status: 'Completed',
    genres: ['Psychological', 'Supernatural', 'Thriller'],
    synopsis: 'A student finds a supernatural notebook that can kill anyone whose name is written in it.',
    popularity: 800000,
    staff: ['Tsugumi Ohba', 'Tetsuro Araki', 'Mamoru Miyano'],
    themes: ['Death', 'Justice'],
  },
  {
    id: 6,
    title: 'Naruto',
    englishTitle: 'Naruto',
    coverImage: getWorkingImageUrl('Naruto', 'https://cdn.myanimelist.net/images/anime/13/17405.jpg'),
    rating: 8.4,
    studio: 'Pierrot',
    type: 'TV',
    episodes: 720,
    year: 2002,
    season: 'Fall',
    status: 'Completed',
    genres: ['Action', 'Martial Arts', 'Supernatural'],
    synopsis: 'A young ninja with a sealed demon fox spirit inside him seeks recognition and dreams of becoming the Hokage.',
    popularity: 750000,
    staff: ['Masashi Kishimoto', 'Hayato Date', 'Junko Takeuchi'],
    themes: ['Ninja', 'Friendship'],
  },
  {
    id: 7,
    title: 'One Punch Man',
    englishTitle: 'One Punch Man',
    coverImage: getWorkingImageUrl('One Punch Man', 'https://cdn.myanimelist.net/images/anime/12/76049.jpg'),
    rating: 8.8,
    studio: 'Madhouse',
    type: 'TV',
    episodes: 24,
    year: 2015,
    season: 'Fall',
    status: 'Completed',
    genres: ['Action', 'Comedy', 'Superhero'],
    synopsis: 'A superhero who can defeat any enemy with a single punch struggles with the mundane problems that come with being too powerful.',
    popularity: 700000,
    staff: ['ONE', 'Shingo Natsume', 'Makoto Furukawa'],
    themes: ['Superhero', 'Parody'],
  },
  {
    id: 8,
    title: 'Jujutsu Kaisen',
    englishTitle: 'Jujutsu Kaisen',
    coverImage: getWorkingImageUrl('Jujutsu Kaisen', 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg'),
    rating: 8.6,
    studio: 'MAPPA',
    type: 'TV',
    episodes: 24,
    year: 2020,
    season: 'Fall',
    status: 'Ongoing',
    genres: ['Action', 'School', 'Supernatural'],
    synopsis: 'A student joins a secret organization of sorcerers to kill cursed demons.',
    popularity: 650000,
    staff: ['Gege Akutami', 'Sunghoo Park', 'Junya Enoki'],
    themes: ['Curses', 'School'],
  },
  {
    id: 9,
    title: 'Cowboy Bebop',
    englishTitle: 'Cowboy Bebop',
    coverImage: getWorkingImageUrl('Cowboy Bebop', 'https://cdn.myanimelist.net/images/anime/4/19644.jpg'),
    rating: 8.8,
    studio: 'Sunrise',
    type: 'TV',
    episodes: 26,
    year: 1998,
    season: 'Spring',
    status: 'Completed',
    genres: ['Action', 'Adventure', 'Drama'],
    synopsis: 'The adventures of a bounty hunter crew traveling in their spaceship called Bebop.',
    popularity: 600000,
    staff: ['Shinichiro Watanabe', 'Shinichiro Watanabe', 'Koichi Yamadera'],
    themes: ['Space', 'Bounty Hunters'],
  },
  {
    id: 10,
    title: 'Spirited Away',
    englishTitle: 'Sen to Chihiro no Kamikakushi',
    coverImage: getWorkingImageUrl('Spirited Away', 'https://cdn.myanimelist.net/images/anime/6/79597.jpg'),
    rating: 9.3,
    studio: 'Studio Ghibli',
    type: 'Movie',
    episodes: 1,
    year: 2001,
    season: 'Summer',
    status: 'Completed',
    genres: ['Adventure', 'Family', 'Fantasy'],
    synopsis: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods and witches.',
    popularity: 550000,
    staff: ['Hayao Miyazaki', 'Hayao Miyazaki', 'Rumi Hiiragi'],
    themes: ['Magic', 'Coming of Age'],
  },
  {
    id: 11,
    title: 'Fullmetal Alchemist: Brotherhood',
    englishTitle: 'Fullmetal Alchemist: Brotherhood',
    coverImage: getWorkingImageUrl('Fullmetal Alchemist: Brotherhood', 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg'),
    rating: 9.1,
    studio: 'Bones',
    type: 'TV',
    episodes: 64,
    year: 2009,
    season: 'Spring',
    status: 'Completed',
    genres: ['Action', 'Adventure', 'Drama'],
    synopsis: 'Two brothers search for the Philosopher\'s Stone to restore their bodies.',
    popularity: 500000,
    staff: ['Hiromu Arakawa', 'Yasuhiro Irie', 'Romi Park'],
    themes: ['Alchemy', 'Brotherhood'],
  },
  {
    id: 12,
    title: 'Hunter x Hunter',
    englishTitle: 'Hunter x Hunter',
    coverImage: getWorkingImageUrl('Hunter x Hunter', 'https://cdn.myanimelist.net/images/anime/11/33657.jpg'),
    rating: 9.0,
    studio: 'Madhouse',
    type: 'TV',
    episodes: 148,
    year: 2011,
    season: 'Fall',
    status: 'Completed',
    genres: ['Action', 'Adventure', 'Fantasy'],
    synopsis: 'A young boy searches for his father while becoming a Hunter.',
    popularity: 480000,
    staff: ['Yoshihiro Togashi', 'Hiroshi Kojina', 'Megumi Han'],
    themes: ['Adventure', 'Friendship'],
  },
  {
    id: 13,
    title: 'Dragon Ball Z',
    englishTitle: 'Dragon Ball Z',
    coverImage: getWorkingImageUrl('Dragon Ball Z', 'https://cdn.myanimelist.net/images/anime/1277/142187.jpg'),
    rating: 8.7,
    studio: 'Toei Animation',
    type: 'TV',
    episodes: 291,
    year: 1989,
    season: 'Spring',
    status: 'Completed',
    genres: ['Action', 'Adventure', 'Martial Arts'],
    synopsis: 'Goku and friends defend Earth from powerful enemies.',
    popularity: 460000,
    staff: ['Akira Toriyama', 'Daisuke Nishio', 'Masako Nozawa'],
    themes: ['Fighting', 'Power'],
  },
  {
    id: 14,
    title: 'Tokyo Ghoul',
    englishTitle: 'Tokyo Ghoul',
    coverImage: getWorkingImageUrl('Tokyo Ghoul', 'https://cdn.myanimelist.net/images/anime/5/64449.jpg'),
    rating: 7.8,
    studio: 'Pierrot',
    type: 'TV',
    episodes: 12,
    year: 2014,
    season: 'Summer',
    status: 'Completed',
    genres: ['Action', 'Horror', 'Supernatural'],
    synopsis: 'A college student becomes half-ghoul after a date gone wrong.',
    popularity: 440000,
    staff: ['Sui Ishida', 'Shuhei Morita', 'Natsuki Hanae'],
    themes: ['Ghouls', 'Identity'],
  },
  {
    id: 15,
    title: 'Bleach',
    englishTitle: 'Bleach',
    coverImage: getWorkingImageUrl('Bleach', 'https://cdn.myanimelist.net/images/anime/10/21519.jpg'),
    rating: 7.9,
    studio: 'Pierrot',
    type: 'TV',
    episodes: 366,
    year: 2004,
    season: 'Fall',
    status: 'Completed',
    genres: ['Action', 'Supernatural', 'Sword Fighting'],
    synopsis: 'A teenager gains Soul Reaper powers and must protect the living world.',
    popularity: 420000,
    staff: ['Tite Kubo', 'Noriyuki Abe', 'Noriaki Sugiyama'],
    themes: ['Soul Reapers', 'Spiritual Warfare'],
  },
  {
    id: 16,
    title: 'Mob Psycho 100',
    englishTitle: 'Mob Psycho 100',
    coverImage: getWorkingImageUrl('Mob Psycho 100', 'https://cdn.myanimelist.net/images/anime/8/80356.jpg'),
    rating: 8.6,
    studio: 'Bones',
    type: 'TV',
    episodes: 37,
    year: 2016,
    season: 'Summer',
    status: 'Completed',
    genres: ['Action', 'Comedy', 'Supernatural'],
    synopsis: 'A psychic middle schooler tries to live a normal life.',
    popularity: 400000,
    staff: ['ONE', 'Yuzuru Tachikawa', 'Setsuo Itou'],
    themes: ['Psychic Powers', 'Coming of Age'],
  },
  {
    id: 17,
    title: 'Chainsaw Man',
    englishTitle: 'Chainsaw Man',
    coverImage: getWorkingImageUrl('Chainsaw Man', 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg'),
    rating: 8.4,
    studio: 'MAPPA',
    type: 'TV',
    episodes: 12,
    year: 2022,
    season: 'Fall',
    status: 'Completed',
    genres: ['Action', 'Horror', 'Supernatural'],
    synopsis: 'A young man merges with his pet devil to become Chainsaw Man.',
    popularity: 380000,
    staff: ['Tatsuki Fujimoto', 'Ryu Nakayama', 'Kikunosuke Toya'],
    themes: ['Devils', 'Survival'],
  },
  {
    id: 18,
    title: 'Violet Evergarden',
    englishTitle: 'Violet Evergarden',
    coverImage: getWorkingImageUrl('Violet Evergarden', 'https://cdn.myanimelist.net/images/anime/3/88097.jpg'),
    rating: 8.5,
    studio: 'Kyoto Animation',
    type: 'TV',
    episodes: 13,
    year: 2018,
    season: 'Winter',
    status: 'Completed',
    genres: ['Drama', 'Fantasy', 'Slice of Life'],
    synopsis: 'A former soldier learns to write letters and understand emotions.',
    popularity: 360000,
    staff: ['Kana Akatsuki', 'Taichi Ishidate', 'Yui Ishikawa'],
    themes: ['Letters', 'Emotions'],
  },
  {
    id: 19,
    title: 'Your Name',
    englishTitle: 'Kimi no Na wa',
    coverImage: getWorkingImageUrl('Your Name', 'https://cdn.myanimelist.net/images/anime/5/87048.jpg'),
    rating: 8.4,
    studio: 'CoMix Wave Films',
    type: 'Movie',
    episodes: 1,
    year: 2016,
    season: 'Fall',
    status: 'Completed',
    genres: ['Drama', 'Romance', 'Supernatural'],
    synopsis: 'Two teenagers share a mysterious connection through their dreams.',
    popularity: 340000,
    staff: ['Makoto Shinkai', 'Makoto Shinkai', 'Ryunosuke Kamiki'],
    themes: ['Body Swapping', 'Fate'],
  },
  {
    id: 20,
    title: 'Princess Mononoke',
    englishTitle: 'Mononoke Hime',
    coverImage: getWorkingImageUrl('Princess Mononoke', 'https://cdn.myanimelist.net/images/anime/7/75919.jpg'),
    rating: 8.7,
    studio: 'Studio Ghibli',
    type: 'Movie',
    episodes: 1,
    year: 1997,
    season: 'Summer',
    status: 'Completed',
    genres: ['Action', 'Adventure', 'Drama'],
    synopsis: 'A prince becomes involved in a struggle between forest gods and humans.',
    popularity: 320000,
    staff: ['Hayao Miyazaki', 'Hayao Miyazaki', 'Yoji Matsuda'],
    themes: ['Nature', 'War'],
  },
];

// API service to fetch anime data
export class AnimeService {
  private static baseUrl = 'https://api.jikan.moe/v4';
  
  static async searchAnime(query: string): Promise<Anime[]> {
    try {
      const response = await fetch(`${this.baseUrl}/anime?q=${encodeURIComponent(query)}&limit=20`);
      const data = await response.json();
      
      return data.data.map((anime: any) => ({
        id: anime.mal_id,
        title: anime.title,
        englishTitle: anime.title_english || anime.title,
        coverImage: anime.images.jpg.large_image_url || anime.images.jpg.image_url,
        rating: anime.score || 0,
        studio: anime.studios?.[0]?.name || 'Unknown',
        type: anime.type as 'TV' | 'Movie' | 'OVA' | 'Special' | 'ONA',
        episodes: anime.episodes || 0,
        year: anime.year || new Date().getFullYear(),
        season: anime.season || 'Unknown',
        status: anime.status === 'Finished Airing' ? 'Completed' : 
                anime.status === 'Currently Airing' ? 'Ongoing' : 'Upcoming',
        genres: anime.genres?.map((g: any) => g.name) || [],
        synopsis: anime.synopsis || 'No synopsis available.',
        popularity: anime.popularity || 0,
        staff: anime.producers?.map((p: any) => p.name) || [],
        themes: anime.themes?.map((t: any) => t.name) || [],
      }));
    } catch (error) {
      console.error('Error fetching anime data:', error);
      return [];
    }
  }

  static async getTopAnime(limit: number = 25): Promise<Anime[]> {
    try {
      const response = await fetch(`${this.baseUrl}/top/anime?limit=${limit}`);
      const data = await response.json();
      
      return data.data.map((anime: any) => ({
        id: anime.mal_id,
        title: anime.title,
        englishTitle: anime.title_english || anime.title,
        coverImage: anime.images.jpg.large_image_url || anime.images.jpg.image_url,
        rating: anime.score || 0,
        studio: anime.studios?.[0]?.name || 'Unknown',
        type: anime.type as 'TV' | 'Movie' | 'OVA' | 'Special' | 'ONA',
        episodes: anime.episodes || 0,
        year: anime.year || new Date().getFullYear(),
        season: anime.season || 'Unknown',
        status: anime.status === 'Finished Airing' ? 'Completed' : 
                anime.status === 'Currently Airing' ? 'Ongoing' : 'Upcoming',
        genres: anime.genres?.map((g: any) => g.name) || [],
        synopsis: anime.synopsis || 'No synopsis available.',
        popularity: anime.popularity || 0,
        staff: anime.producers?.map((p: any) => p.name) || [],
        themes: anime.themes?.map((t: any) => t.name) || [],
      }));
    } catch (error) {
      console.error('Error fetching top anime:', error);
      return realAnimeData; // Fallback to hardcoded data
    }
  }

  static async getAnimeById(id: number): Promise<Anime | null> {
    try {
      const response = await fetch(`${this.baseUrl}/anime/${id}`);
      const data = await response.json();
      const anime = data.data;
      
      return {
        id: anime.mal_id,
        title: anime.title,
        englishTitle: anime.title_english || anime.title,
        coverImage: anime.images.jpg.large_image_url || anime.images.jpg.image_url,
        rating: anime.score || 0,
        studio: anime.studios?.[0]?.name || 'Unknown',
        type: anime.type as 'TV' | 'Movie' | 'OVA' | 'Special' | 'ONA',
        episodes: anime.episodes || 0,
        year: anime.year || new Date().getFullYear(),
        season: anime.season || 'Unknown',
        status: anime.status === 'Finished Airing' ? 'Completed' : 
                anime.status === 'Currently Airing' ? 'Ongoing' : 'Upcoming',
        genres: anime.genres?.map((g: any) => g.name) || [],
        synopsis: anime.synopsis || 'No synopsis available.',
        popularity: anime.popularity || 0,
        staff: anime.producers?.map((p: any) => p.name) || [],
        themes: anime.themes?.map((t: any) => t.name) || [],
      };
    } catch (error) {
      console.error('Error fetching anime by ID:', error);
      return null;
    }
  }
}

// Generate 1000+ anime entries with realistic data
export const generateAnimeData = (): Anime[] => {
  const studios = ['Studio Ghibli', 'Madhouse', 'Toei Animation', 'Bones', 'A-1 Pictures', 'Wit Studio', 'Pierrot', 'Trigger', 'Kyoto Animation', 'MAPPA', 'Sunrise', 'Production I.G', 'Shaft', 'White Fox', 'CloverWorks'];
  const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Slice of Life', 'Sports', 'Supernatural', 'Thriller', 'Mecha', 'Historical'];
  const types: ('TV' | 'Movie' | 'OVA' | 'Special' | 'ONA')[] = ['TV', 'Movie', 'OVA', 'Special', 'ONA'];
  const seasons: ('Spring' | 'Summer' | 'Fall' | 'Winter')[] = ['Spring', 'Summer', 'Fall', 'Winter'];
  const statuses: ('Completed' | 'Ongoing' | 'Upcoming')[] = ['Completed', 'Ongoing', 'Upcoming'];

  const baseAnimes = [
    { title: 'Attack on Titan', englishTitle: 'Shingeki no Kyojin' },
    { title: 'Demon Slayer', englishTitle: 'Kimetsu no Yaiba' },
    { title: 'My Hero Academia', englishTitle: 'Boku no Hero Academia' },
    { title: 'One Piece', englishTitle: 'One Piece' },
    { title: 'Naruto', englishTitle: 'Naruto' },
    { title: 'Dragon Ball Z', englishTitle: 'Dragon Ball Z' },
    { title: 'Death Note', englishTitle: 'Death Note' },
    { title: 'Fullmetal Alchemist', englishTitle: 'Fullmetal Alchemist' },
    { title: 'One Punch Man', englishTitle: 'One Punch Man' },
    { title: 'Tokyo Ghoul', englishTitle: 'Tokyo Ghoul' },
    { title: 'Jujutsu Kaisen', englishTitle: 'Jujutsu Kaisen' },
    { title: 'Spirited Away', englishTitle: 'Sen to Chihiro no Kamikakushi' },
    { title: 'Your Name', englishTitle: 'Kimi no Na wa' },
    { title: 'Princess Mononoke', englishTitle: 'Mononoke Hime' },
    { title: 'Akira', englishTitle: 'Akira' },
    { title: 'Ghost in the Shell', englishTitle: 'Koukaku Kidoutai' },
    { title: 'Cowboy Bebop', englishTitle: 'Cowboy Bebop' },
    { title: 'Neon Genesis Evangelion', englishTitle: 'Shinseiki Evangelion' },
    { title: 'Hunter x Hunter', englishTitle: 'Hunter x Hunter' },
    { title: 'Bleach', englishTitle: 'Bleach' },
  ];

  const animes: Anime[] = [];

  // Add real anime data first
  animes.push(...realAnimeData);

  // Generate diverse anime entries
  for (let i = realAnimeData.length; i < 1200; i++) {
    const baseAnime = baseAnimes[i % baseAnimes.length];
    const variation = i > baseAnimes.length ? ` ${Math.floor(i / baseAnimes.length)}` : '';
    
    const anime: Anime = {
      id: i + 1,
      title: baseAnime.title + variation,
      englishTitle: baseAnime.englishTitle + variation,
      coverImage: getWorkingImageUrl(baseAnime.title, `https://picsum.photos/300/400?random=${i + 100}`),
      rating: Math.round((Math.random() * 4 + 6) * 10) / 10, // 6.0 - 10.0
      studio: studios[i % studios.length],
      type: types[i % types.length],
      episodes: Math.floor(Math.random() * 200) + 1,
      year: 2010 + (i % 14),
      season: seasons[i % seasons.length],
      status: statuses[i % statuses.length],
      genres: genres.slice(i % 5, (i % 5) + 3),
      synopsis: `An epic ${genres[i % genres.length].toLowerCase()} anime that follows the journey of extraordinary characters through their adventures. This series has captivated audiences worldwide with its compelling storytelling and stunning animation.`,
      popularity: Math.floor(Math.random() * 1000000) + 10000,
      staff: [`Director ${i % 20}`, `Writer ${(i + 5) % 15}`, `Producer ${(i + 10) % 25}`],
      themes: genres.slice((i + 2) % 5, (i + 2) % 5 + 2),
    };

    animes.push(anime);
  }

  return animes;
};

export const generateMangaData = (): Manga[] => {
  const authors = ['Eiichiro Oda', 'Masashi Kishimoto', 'Tite Kubo', 'Hajime Isayama', 'Koyoharu Gotouge', 'Kohei Horikoshi', 'Gege Akutami', 'Naoya Matsumoto', 'Yuki Tabata', 'Kentaro Miura'];
  const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Slice of Life', 'Sports', 'Supernatural', 'Thriller'];
  const types: ('Manga' | 'Manhwa' | 'Manhua' | 'Novel')[] = ['Manga', 'Manhwa', 'Manhua', 'Novel'];
  const statuses: ('Completed' | 'Ongoing' | 'Hiatus')[] = ['Completed', 'Ongoing', 'Hiatus'];

  const baseManga = [
    { title: 'One Piece', englishTitle: 'One Piece' },
    { title: 'Naruto', englishTitle: 'Naruto' },
    { title: 'Bleach', englishTitle: 'Bleach' },
    { title: 'Attack on Titan', englishTitle: 'Shingeki no Kyojin' },
    { title: 'Demon Slayer', englishTitle: 'Kimetsu no Yaiba' },
    { title: 'My Hero Academia', englishTitle: 'Boku no Hero Academia' },
    { title: 'Jujutsu Kaisen', englishTitle: 'Jujutsu Kaisen' },
    { title: 'Chainsaw Man', englishTitle: 'Chainsaw Man' },
    { title: 'Tokyo Ghoul', englishTitle: 'Tokyo Ghoul' },
    { title: 'Berserk', englishTitle: 'Berserk' },
  ];

  const manga: Manga[] = [];

  for (let i = 0; i < 500; i++) {
    const baseMangaItem = baseManga[i % baseManga.length];
    const variation = i > baseManga.length ? ` ${Math.floor(i / baseManga.length)}` : '';
    
    const mangaItem: Manga = {
      id: i + 1,
      title: baseMangaItem.title + variation,
      englishTitle: baseMangaItem.englishTitle + variation,
      coverImage: getWorkingImageUrl(baseMangaItem.title, `https://picsum.photos/300/400?random=${i + 500}`),
      rating: Math.round((Math.random() * 4 + 6) * 10) / 10,
      author: authors[i % authors.length],
      type: types[i % types.length],
      chapters: Math.floor(Math.random() * 500) + 1,
      year: 2005 + (i % 19),
      status: statuses[i % statuses.length],
      genres: genres.slice(i % 4, (i % 4) + 3),
      synopsis: `A captivating ${genres[i % genres.length].toLowerCase()} manga series that explores deep themes through compelling characters and intricate plotlines.`,
      popularity: Math.floor(Math.random() * 500000) + 5000,
    };

    manga.push(mangaItem);
  }

  return manga;
};

export const animeData = generateAnimeData();
export const mangaData = generateMangaData();

// Generate sample recommendations
export const generateRecommendations = (animes: Anime[]): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  
  for (let i = 0; i < 100; i++) {
    const sourceIndex = Math.floor(Math.random() * Math.min(50, animes.length));
    const recommendedIndex = Math.floor(Math.random() * Math.min(50, animes.length));
    
    if (sourceIndex !== recommendedIndex) {
      recommendations.push({
        id: i + 1,
        sourceAnime: animes[sourceIndex],
        recommendedAnime: animes[recommendedIndex],
        reason: 'Similar themes and compelling storytelling',
        similarity: Math.round((Math.random() * 40 + 60) * 10) / 10, // 60-100% similarity
      });
    }
  }
  
  return recommendations;
};

export const recommendationData = generateRecommendations(animeData);