import React, { useEffect, useState } from "react";
import MoviesService from "../services/MoviesService";
import { useOutletContext } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [loading, setLoading] = useOutletContext();
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: { results },
    } = await MoviesService.getMovies();
    setMovies(results);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {loading && <p className="text-center">Carregando...</p>}
          {!loading &&
            movies.map((artigo, index) => (
              <div className="col-3" key={artigo.id}>
                <MovieCard {...artigo} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Movies;
