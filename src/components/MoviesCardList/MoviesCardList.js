import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isEmpty, movies }) {
  if (isEmpty) {
    return null;
  }
  return (
    <>
      <ul className="moviesCardList">
      {movies.map(({ ...movie }) => (<MoviesCard key={movie.key}>{movie}</MoviesCard>))}
        {/*
        <MoviesCard isSavedMovies={isSavedMovies} /> */}
      </ul>
    </>
  );
}

export default MoviesCardList;
