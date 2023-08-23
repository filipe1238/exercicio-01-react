import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useGetMovies from "../Hooks/useGetMovies";
import SearchMovies from "../components/SearchMovies";
import useSearchMovieByTitle from "../Hooks/useSearchMovieByTitle";
import MoviesList from "../components/MoviesList";

function Movies() {
  const [movieTitle, setMovieTitle] = useState("");
  const [loading, setLoading] = useOutletContext();
  const movies = useGetMovies();
  const searchResults = useSearchMovieByTitle(movieTitle);

  const onSearch = (movieTitle) => {
    setMovieTitle(movieTitle);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {<SearchMovies onSearch={onSearch} />}
          {loading && <p className="text-center">Carregando...</p>}
          {!loading && (
            <MoviesList
              movies={searchResults.length > 0 ? searchResults : movies}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Movies;
