import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isSavedMovies }) {
  return (
    <>
      <ul className="moviesCardList">
        <MoviesCard isSavedMovies={isSavedMovies} />
      </ul>
    </>
  );
}

export default MoviesCardList;
