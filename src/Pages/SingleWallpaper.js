import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import WallpaperService from "../services/WallpaperService";
import ImageDetail from "../components/wallpaper/ImageDetail";
import Loading from "../components/common/Loading";

function SingleWallpaper() {
  const [loading, setLoading] = useOutletContext();
  const params = useParams();
  const [wallpaper, setWallpaper] = useState({});

  useEffect(() => {
    setLoading(true);
    WallpaperService.getWallpaper(params.id)
      .then((wallpaper) => {
        setWallpaper(wallpaper);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);

  const download = () => {
    window.open(wallpaper.download_url);
  };

  return (
    <>
      {loading && <Loading />}
      {!loading && <ImageDetail wallpaper={wallpaper} download={download} />}
    </>
  );
}

export default SingleWallpaper;
