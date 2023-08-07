import React from "react";
import "./artigo.css";

function Artigo({ img, texto, height, width }) {
  return (
    <div className="card text-center box">
      <a className="download-url" target="_blank" href={img}>
        <img src={img} className="card-img-top" alt="..." />
      </a>
      <div className="card-body">
        <div class="caption">
          <p>{texto}, {height}x{width}</p>
        </div>
      </div>
    </div>
  );
}

export default Artigo;
