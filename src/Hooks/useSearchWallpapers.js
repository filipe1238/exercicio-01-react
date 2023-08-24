import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import axios from "axios";
import WallpaperService from '../services/WallpaperService';

function useSearchWallpapers(searchParam) {
  const baseUrl = "https://picsum.photos/v2/list";
  const [loading, setLoading] = useOutletContext();
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    setLoading(true);
    WallpaperService.getWallpapers(searchParam)
      .then((artigos) => {
        setArtigos(artigos);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [searchParam, baseUrl, setLoading]);

  return artigos;
}

export default useSearchWallpapers