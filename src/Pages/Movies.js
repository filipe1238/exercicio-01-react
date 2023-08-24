import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import useGetMovies from "../Hooks/useGetMovies";
import SearchMovies from "../components/movies/SearchMovies";
import useSearchMovieByTitle from "../Hooks/useSearchMovieByTitle";
import MoviesList from "../components/movies/MoviesList";
import Loading from "../components/common/Loading";

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
          {loading && <Loading />}
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
