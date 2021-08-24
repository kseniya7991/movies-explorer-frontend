import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
/* import * as mainApi from '../../utils/MainApi'; */

function MoviesCardList({
  isEmpty, isSavedMovies, movies, onClickSave,
}) {
  /*  const [renderedMovies, setRenderedMovies] = useState(movies); */

  /* Функция сохранения фильма - пока без обращения к API */
  /*   function handleSaveMovie(movie) {

         mainApi
      .saveMovie(movie)
      .then((newMovie) => {
        )
      });
  } */

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
