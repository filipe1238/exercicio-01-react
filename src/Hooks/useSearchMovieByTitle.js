import React, { useEffect } from "react";
import MoviesService from "../services/MoviesService";
import { useOutletContext } from "react-router-dom";

function useSearchMovieByTitle(movieTitle) {
  const [loading, setLoading] = useOutletContext();
  const [searchResults, setSearchResults] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    if (movieTitle) {
      MoviesService.searchMoviesByQuery(movieTitle).then((response) => {
        setSearchResults(response.data.results);
        setLoading(false);
      });
    }
  }, [movieTitle]);

  return searchResults;
}

export default useSearchMovieByTitle;
