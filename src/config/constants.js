export const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';
export const TMDB_BACKDROP_BASE = 'https://image.tmdb.org/t/p/w1280';

export const STREAM_PROVIDERS = [
    {
        key: 'videasy',
        label: 'Videasy',
        movieUrl: (id) => `https://player.videasy.net/movie/${id}`,
        tvUrl: (id, season, episode) => `https://player.videasy.net/tv/${id}/${season}/${episode}`,
    },
    {
        key: '111movies',
        label: '111Movies',
        movieUrl: (id) => `https://111movies.net/movie/${id}`,
        tvUrl: (id, season, episode) => `https://111movies.net/tv/${id}/${season}/${episode}`,
    },
    {
        key: 'vidcore',
        label: 'Vidcore',
        movieUrl: (id) => `https://vidcore.net/movie/${id}`,
        tvUrl: (id, season, episode) => `https://vidcore.net/tv/${id}/${season}/${episode}`,
    },
    {
        key: 'vidsrc',
        label: 'VidSrc',
        movieUrl: (id) => `https://vidsrc-embed.ru/embed/movie?tmdb=${id}`,
        tvUrl: (id, season, episode) => `https://vsembed.ru/embed/tv?tmdb=${id}&season=${season}&episode=${episode}`,
    }
];

// Add this new constant to store default provider
export const DEFAULT_PROVIDER_KEY = 'videasy'; // Change this to your desired default

export const SITE_NAME = 'Vibeo';
export const WATCH_PAGE_META = {
    descriptionTemplate: `Watch {TITLE} For Free on {SITE}. In Full HD Quality, No Sign Up and One Click online streaming`
};

