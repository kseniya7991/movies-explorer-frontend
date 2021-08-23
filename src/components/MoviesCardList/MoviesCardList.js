import React, { useState } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isEmpty, isSavedMovies, movies }) {
  const [movieIsSaved, setMovieIsSaved] = useState(false);
  console.log(movies, isSavedMovies);

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
        {movies.map(({ ...item }) => (
          <MoviesCard
            key={item._id}
            {...item}
            onClickSave={handleSaveMovie}
            movieIsSaved={movieIsSaved}
          />
        ))}
      </ul>
    </>
  );
}

export default MoviesCardList;
