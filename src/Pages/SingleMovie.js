import React, { useEffect, useState } from "react";
import MoviesService from "../services/MoviesService";
import { useOutletContext } from "react-router-dom";
import { MovieDetail } from "../components/MovieDetail";

function SingleMovie() {
  const [loading, setLoading] = useOutletContext();
  const [movie, setMovie] = useState({});

  const id = window.location.pathname.split("/")[2];

  const getMovie = async () => {
    const { data } = await MoviesService.getMovie(id);
    setMovie(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovie();
  }, []);

  console.log(movie);
  return (
    <>
      {loading && <p className="text-center">Carregando...</p>}
      {!loading && <MovieDetail {...movie} />}
    </>
  );
}

export default SingleMovie;
