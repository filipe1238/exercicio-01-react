import React, { useEffect, useState } from "react";
import MoviesService from "../services/MoviesService";
import { useOutletContext, useParams } from "react-router-dom";
import { MovieDetail } from "../components/MovieDetail";

function SingleMovie() {
  const [loading, setLoading] = useOutletContext();
  const [movie, setMovie] = useState({});
  const params = useParams();

  const getMovie = async () => {
    const { data } = await MoviesService.getMovie(params.id);
    setMovie(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovie();
  }, []);

  return (
    <>
      {loading && <p className="text-center">Carregando...</p>}
      {!loading && <MovieDetail {...movie} />}
    </>
  );
}

export default SingleMovie;
