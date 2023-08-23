import React, { useEffect, useState } from 'react'
import MoviesService from '../services/MoviesService';
import { useOutletContext } from 'react-router-dom';

function useGetMovies() {
    const [loading, setLoading] = useOutletContext();
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
      const {
        data: { results },
      } = await MoviesService.getMovies();
      setMovies(results);
      setLoading(false);
    };
  
    useEffect(() => {
      setLoading(true);
      getMovies();
    }, []);
    
  return movies;
}

export default useGetMovies