import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  isEmpty, isSavedMovies, movies, onClickSave,
}) {
  console.log(isEmpty);
  if (isEmpty) {
    return null;
  }
  return (
    <>
      <ul className="moviesCardList">
        {movies.map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id}
            onClickSave={onClickSave}
            isSavedMovies={isSavedMovies}
          />
        ))}
      </ul>
    </>
  );
}

export default MoviesCardList;
