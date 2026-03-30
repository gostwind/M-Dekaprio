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
    }
];
export const SITE_NAME = 'Vibeo';
export const WATCH_PAGE_META = {
    descriptionTemplate: `Watch {TITLE} For Free on {SITE}. In Full HD Quality, No Sign Up and One Click online streaming`
};

