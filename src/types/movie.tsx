export interface MovieType {
    [x: string]: any;
    id?: number;
    title?: string;
    poster_path?: string;
    overview?: string;
    release_date?: string;
    runtime?: number;
    genres?: GenreType[];
    videos?: {
        result: VideoType[];
    };
};

export interface VideoType {
    id?: string;
    key?: string;
    name?: string;
};

type GenreType = {
    id?: number;
    name?: string;
};