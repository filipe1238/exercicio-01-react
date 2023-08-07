import React, { useState } from "react";
import "./cabecalho.css";

function Cabecalho({ searchParam, setSearchParam }) {
  /*   const [active, setActive] = useState(1); */

  return (
    <div class="container-fluid buttons">
      <div class="nav justify-content-center">
        <div className="col-10">
          <p className="text-center"> Página {searchParam.page}</p>
        </div>

        <div className="col-2">
          <button
            class={"btn"}
            href="#"
            disabled={searchParam.page === 1}
            onClick={() => {
              if (searchParam.page - 1 < 1) return;
              setSearchParam({ ...searchParam, page: searchParam.page - 1 });
            }}
          >
            Anterior
          </button>
          <button
            class={"btn"}
            href="#"
            onClick={() =>
              setSearchParam({ ...searchParam, page: searchParam.page + 1 })
            }
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cabecalho;
