import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import WallpaperService from "../services/WallpaperService";

function useGetWallpaperById(id) {
  const [loading, setLoading] = useOutletContext();
  const [wallpaper, setWallpaper] = useState({});

  useEffect(() => {
    setLoading(true);
    WallpaperService.getWallpaper(id)
      .then((wallpaper) => {
        setWallpaper(wallpaper);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return wallpaper;
}

export default useGetWallpaperById;
