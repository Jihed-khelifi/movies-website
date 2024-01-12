export default interface Movie   {
    movieId: number | string;
    title: string;
    description: string;
    year: number;
    duration: number;
    director: string;
    actors: string[];
}