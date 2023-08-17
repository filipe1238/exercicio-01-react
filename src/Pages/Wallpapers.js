import React, { useEffect, useState } from "react";
import Artigos from "../components/Artigos";
import axios from "axios";
import Cabecalho from "../components/Cabecalho";
import Footer from "../components/Footer";
import { useOutletContext } from "react-router-dom";

function Wallpapers() {
  const [loading, setLoading] = useOutletContext();

  let baseUrl = "https://picsum.photos/v2/list";
  const [artigos, setArtigos] = useState([]);
  const [searchParam, setSearchParam] = useState({ page: 1, limit: 20 });

  useEffect(() => {
    setLoading(true);
    axios
      .get(baseUrl, {
        params: searchParam,
      })
      .then((response) => {
        setArtigos(response.data);
        setLoading(false);
      });
  }, [searchParam, baseUrl, setLoading]);

  return (
    <>
      <Cabecalho searchParam={searchParam} setSearchParam={setSearchParam} />
      <div className="container-fluid">
        {loading && <p className="text-center">Carregando...</p>}
        {!loading && <Artigos artigos={artigos} />}
      </div>
      <Footer searchParam={searchParam} setSearchParam={setSearchParam} />
    </>
  );
}

export default Wallpapers;
