import React, { useEffect, useState } from "react";
import Artigos from "../components/wallpaper/Artigos";
import axios from "axios";
import Cabecalho from "../components/wallpaper/Cabecalho";
import Footer from "../components/menu/Footer";
import { useOutletContext } from "react-router-dom";
import useSearchWallpapers from "../Hooks/useSearchWallpapers";
import Loading from "../components/common/Loading";

function Wallpapers() {
  const [loading, setLoading] = useOutletContext();

  let baseUrl = "https://picsum.photos/v2/list";
  const [searchParam, setSearchParam] = useState({ page: 1, limit: 20 });
  const wallpapers = useSearchWallpapers(searchParam);

  return (
    <>
      <Cabecalho searchParam={searchParam} setSearchParam={setSearchParam} />
      <div className="container-fluid">
        {loading && <Loading />}
        {!loading && <Artigos artigos={wallpapers} />}
      </div>
      <Footer searchParam={searchParam} setSearchParam={setSearchParam} />
    </>
  );
}

export default Wallpapers;
