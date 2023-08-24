import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import useGetMovies from "../Hooks/useGetMovies";
import SearchMovies from "../components/movies/SearchMovies";
import MoviesList from "../components/movies/MoviesList";
import Loading from "../components/common/Loading";
import useSearchMovieByParams from "../Hooks/useSearchMovieByTitle";

function Movies() {
  const [searchParam, setSearchParam] = useState({
    page: 1,
    limit: 20,
    query: "",
    adult: false,
  });
  const [loading, setLoading] = useOutletContext();
  const movies = useGetMovies(searchParam);
  const searchResults = useSearchMovieByParams(searchParam);

  return (
    <>
        {
          <SearchMovies
            searchParam={searchParam}
            setSearchParam={setSearchParam}
          />
        }
        {loading && <Loading />}
        {!loading &&
          (searchResults.length && searchResults.length > 0 ? (
            <>
              <h5 className="text-center">
                Mostrando resultados de pesquisa para:{" "}
                <b>{searchParam.query}</b>
              </h5>
              <MoviesList movies={searchResults} />
            </>
          ) : (
            <>
              <h5 className="text-center">
                Sem filtros de pesquisa, exibindo mais populares
              </h5>
              
              <MoviesList movies={movies} />
            </>
          ))}
    </>
  );
}

export default Movies;
