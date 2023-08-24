import React, { useEffect } from "react";
import MoviesService from "../services/MoviesService";
import { useOutletContext } from "react-router-dom";

function useSearchMovieByParams(params) {
  const [loading, setLoading] = useOutletContext();
  const [searchResults, setSearchResults] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    if (params) {
      MoviesService.searchMoviesByQueryParams(params)
        .then((response) => {
          setSearchResults(response.data.results);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [params]);

  return searchResults;
}

export default useSearchMovieByParams;
