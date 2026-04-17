const API_KEY = "b352b75dbecba19073f7844a7c459877";
const BASE_URL = "https://api.themoviedb.org/3";

// Popular Movies
export const popularMovies = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
            {
                method: "GET",
                mode: "cors",
            }
        );

        console.log("POPULAR STATUS:", response.status);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data.results;

    } catch (error) {
        console.error("POPULAR API ERROR:", error.message);
        return [];
    }
};


// Search Movies
export const searchMovies = async (query) => {
    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
            {
                method: "GET",
                mode: "cors",
            }
        );

        console.log("SEARCH STATUS:", response.status);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data.results;

    } catch (error) {
        console.error("SEARCH API ERROR:", error.message);
        return [];
    }
};