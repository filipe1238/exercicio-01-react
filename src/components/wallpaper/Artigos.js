import React from 'react'
import Artigo from './Artigo';

function Artigos({ artigos }) {
    return (
      <div className="row">
        {artigos.map((artigo, index) => (
          <div className="col-3" key={artigo.id}>
            <Artigo id={artigo.id} img={artigo.download_url} texto={artigo.author} height={artigo.height} width={artigo.width} />
          </div>
        ))}
      </div>
    );
  }
export default Artigos