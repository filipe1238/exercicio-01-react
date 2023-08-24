import React from 'react'

export const MovieDetail = ({title, status, tagline, overview, vote_average, poster_path, release_date, home_page}) => {
  return (
    <div className="container-fluid container">
      <div className="row">
        <div className="col-4">
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt={title} />
        </div>
        <div className="col-12">
          <h1>{title}</h1>
          <h2>{tagline}</h2>
          <p>{overview}</p>
          <p>{status}</p>
          <p>{vote_average}</p>
          <p>{release_date}</p>
          <p>{home_page}</p>
        </div>
      </div>
    </div>
  )
}
