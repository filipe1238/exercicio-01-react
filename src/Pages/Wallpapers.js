import React, { useEffect, useState } from "react";
import Artigos from "../components/wallpaper/Artigos";
import axios from "axios";
import NavigateButtonsParams from "../components/common/NavigateButtonsParams";
import FooterNextPage from "../components/menu/FooterNextPage";
import { useOutletContext } from "react-router-dom";
import useSearchWallpapers from "../Hooks/useSearchWallpapers";
import Loading from "../components/common/Loading";

function Wallpapers() {
  const [loading, setLoading] = useOutletContext();
  const [searchParam, setSearchParam] = useState({ page: 1, limit: 20 });
  const wallpapers = useSearchWallpapers(searchParam);

  return (
    <>
      <NavigateButtonsParams searchParam={searchParam} setSearchParam={setSearchParam} />
      <div className="container-fluid">
        {loading && <Loading />}
        {!loading && <Artigos artigos={wallpapers} />}
      </div>
      <FooterNextPage searchParam={searchParam} setSearchParam={setSearchParam} />
    </>
  );
}

export default Wallpapers;
