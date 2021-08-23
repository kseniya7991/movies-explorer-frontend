import React, { useState } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isEmpty, savedMovies }) {
  const [movieIsSaved, setMovieIsSaved] = useState(false);
  console.log(savedMovies);

  /* Функция сохранения фильма - пока без обращения к API */
  function handleSaveMovie(movie) {
    setMovieIsSaved(!movieIsSaved);
    console.log(movie);
  }

  if (isEmpty) {
    return null;
  }
  return (
    <>
      <ul className="moviesCardList">
        {savedMovies.map(({ ...movie }) => (
          <MoviesCard
            key={movie.id}
            onClickSave={handleSaveMovie}
            movieIsSaved={movieIsSaved}
          >
            {movie}
          </MoviesCard>
        ))}
        {/*
        <MoviesCard isSavedMovies={isSavedMovies} /> */}
      </ul>
    </>
  );
}

export default MoviesCardList;
