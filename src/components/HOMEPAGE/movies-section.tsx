import React from 'react';
import MovieCard from './movie-card';
import { Movie } from '@/types/types';

interface MovieProps{
  movies: Movie[];
}


const MoviesSection: React.FC<MovieProps> = async ({movies}) => {

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.id}
          id={movie.id}
          imageUrl={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          title={movie.title || movie.original_title || movie.name || movie.original_name}
          description={movie.overview}
          releaseDate={movie.release_date || movie.first_air_date}
          likes={movie.vote_count}
        />
      ))}
    </div>
  );
}

export default MoviesSection;
