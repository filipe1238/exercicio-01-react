import React, { useState } from "react";

function SearchMovies({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };
  return (
    <>
      <form className="form-inline my-2 my-lg-0" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="form-control mr-sm-2 mt-5 mb-1"
          placeholder="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-secondary" type="submit">
          Pesquisar
        </button>
      </form>
    </>
  );
}

export default SearchMovies;
