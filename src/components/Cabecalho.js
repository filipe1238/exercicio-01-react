import React, { useState } from "react";

import "./cabecalho.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Cabecalho({ searchParam, setSearchParam }) {
  /*   const [active, setActive] = useState(1); */

  return (
    <div class="container-fluid buttons">
      <div class="nav justify-content-center">
        
        <div className="col-12">
          <p className="text-center"> Página {searchParam.page}</p>
        </div>

        <div className="col-0">
          <button
            class={"btn border-0"}
            href="#"
            disabled={searchParam.page === 1}
            onClick={() => {
              if (searchParam.page - 1 < 1) return;
              setSearchParam({ ...searchParam, page: searchParam.page - 1 });
            }}
          >
           <FontAwesomeIcon icon={faArrowLeft} />  
          </button>
          <button
            class={"btn border-0"}
            href="#"
            onClick={() =>
              setSearchParam({ ...searchParam, page: searchParam.page + 1 })
            }
          >
             <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cabecalho;
