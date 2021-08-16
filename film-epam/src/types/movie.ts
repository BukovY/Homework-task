export interface movieDetails {
    backdrop_path: string;
    revenue: number;
    overview: string;
    release_date: string;
    genres: { id: number; name: string }[];
    runtime: number | null;
    title: string;
    id: number;
    vote_average: number;
}