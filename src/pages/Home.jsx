import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react";
import "../styles/home.css"
import {popularMovies, searchMovies} from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //USE EFFECT TO FETCH THE POPULAR MOVIES ONCE THE COMPONENT IS RENDERED
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popMovies = await popularMovies();
                setMovies(popMovies);
            } catch (error){
                console.log(error);
                setError("Failed to load Movies..");
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, []);
    

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()){
            return;
        }
        if(loading) return;
        setLoading(true);
        try {
            const searchedMovies = await searchMovies(searchQuery);
            setMovies(searchedMovies);
            setError(null);

        }catch (err){
            setError("Failed to search movies..");
        }
        finally {
            setLoading(false);
        }

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for movies" className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => (
                    //Conditional rendering for searching movies based on the title of the movie and the search query.
                    //movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Home