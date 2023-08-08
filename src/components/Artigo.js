import React from "react";
import "./artigo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCircleMinus } from "@fortawesome/free-solid-svg-icons";

function Artigo({ img, texto, height, width }) {
  let url = new URL(img);
  let imgThumb = url.origin + "/id/" + url.pathname.split("/")[2] + "/960/540";

  return (
    <div className="box">
      {/* <div className="icons">
        <FontAwesomeIcon className="icon regular" icon={faHeart} />
      </div> */}

      <a className="download-url" target="blank" href={img}>
        <img src={imgThumb} className="card-img-top" alt="..." />
      </a>
      <div className="card-body">
        <div class="caption mb-0">
          <p class="text-break text-end">
            By {texto}
            <p class="text-break text-muted">
            {height}x{width}
          </p>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Artigo;
