import React, { useEffect, useState } from "react";
import MoviesService from "../services/MoviesService";
import { useOutletContext, useParams } from "react-router-dom";
import { MovieDetail } from "../components/movies/MovieDetail";
import Loading from "../components/common/Loading";
import useGetMovieById from "../Hooks/useGetMovieById";

function SingleMovie() {
  const [loading, setLoading] = useOutletContext();
  const params = useParams();
  const movie = useGetMovieById(params.id);

  return (
    <>
      {loading && <Loading />}
      {!loading && <MovieDetail {...movie} />}
    </>
  );
}

export default SingleMovie;
