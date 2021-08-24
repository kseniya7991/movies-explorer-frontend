import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
/* import * as mainApi from '../../utils/MainApi'; */

function MoviesCardList({
  isEmpty, isSavedMovies, movies, onClickSave,
}) {
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
