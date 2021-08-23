import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isEmpty, isSavedMovies, movies }) {
  console.log(movies, isSavedMovies);

  /* Функция сохранения фильма - пока без обращения к API */
  function handleSaveMovie(movie) {
    console.log(movie);
  }

  if (isEmpty) {
    return null;
  }
  return (
    <>
      <ul className="moviesCardList">
        {movies.map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie._id}
            onClickSave={handleSaveMovie}
          />
        ))}
      </ul>
    </>
  );
}

export default MoviesCardList;
