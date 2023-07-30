import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import MovieCard from "../components/MovieCard/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);

  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="title">Melhores filmes:</h2>
        <div className="mvies-container">
          {topMovies.length === 0 && <p>Carregando...</p>}
          {topMovies.length > 0 && topMovies.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;