import React, { useEffect, useState } from "react";
import MoviesService from "../services/MoviesService";
import { useOutletContext } from "react-router-dom";

function useGetMovieById(id) {
  const [loading, setLoading] = useOutletContext();
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const { data } = await MoviesService.getMovie(id);
    setMovie(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovie();
  }, [id]);

  return movie;
}

export default useGetMovieById;
