import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import WallpaperService from "../services/WallpaperService";
import ImageDetail from "../components/wallpaper/ImageDetail";
import Loading from "../components/common/Loading";
import useGetWallpaperById from "../Hooks/useGetWallpaperById";

function SingleWallpaper() {
  const [loading, setLoading] = useOutletContext();
  const params = useParams();
  const wallpaper = useGetWallpaperById(params.id);

  return (
    <>
      {loading && <Loading />}
      {!loading && <ImageDetail wallpaper={wallpaper} />}
    </>
  );
}

export default SingleWallpaper;
