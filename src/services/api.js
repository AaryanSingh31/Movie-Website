const API_KEY = "b352b75dbecba19073f7844a7c459877";
const BASE_URL = "https://api.themoviedb.org/3";

//API REQ FOR POPULAR MOVIES
export const popularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}
//API REQ FOR SEARCHING MOVIES
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}