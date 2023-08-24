import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//find icon
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchMovies({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };
  return (
    <>
      <form className="form-inline my-2 mb-5" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-group">
          <input
            type="text"
            className="form-control mr-sm-2 "
            placeholder="Pesquisar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-secondary" type="submit">
            <FontAwesomeIcon icon={faSearch} />
            Pesquisar
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchMovies;
