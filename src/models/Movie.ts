export default interface Movie {
    id: number;
    title: string;
    year: number;
    director: string;
    rating: number;
    description: string;
    posterUrl: string;
    genres: string[];
    releaseDate: string;
}