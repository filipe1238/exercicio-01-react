import React from "react";
import MovieCard from "./MovieCard";

function MoviesList({ movies }) {
  return movies.map((artigo, index) => (
    <div className="col-3" key={artigo.id}>
      <MovieCard {...artigo} />
    </div>
  ));
}

export default MoviesList;
