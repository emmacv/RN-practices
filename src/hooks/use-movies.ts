import React from 'react';
import movieDB from '../screens/api/movies-db';
import { Movie, MovieDB } from '../types/movie-types';

const useMovies = (urlArray: string[]) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [movies, setMovies] = React.useState<Movie[][]>([]);

  React.useEffect(() => {
    (async () => {
      // for (const url of urlArray) {
      //   const { data } = await movieDB.get<MovieDB>(`/${url}`);
      //   setMovies(prev => [...prev, data.results]);
      // }
      const movies = (await Promise.all(
        urlArray.map(async url => await movieDB.get<MovieDB>(`/${url}`))
      ))
        .reduce((prevMovie, movie) => 
          [...prevMovie, movie.data.results], []
        );
      setMovies(movies);
      setIsLoading(false);
    })();
  }, []);

  console.log('custom Hook rendered!');

  return {
    movies,
    isLoading,
  };
};

export default useMovies;
