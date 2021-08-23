import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMoviesContext from '../../contexts/SavedMoviesContext';
import CurrentUserContext from '../../contexts/CurrentUserContext';
/* import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList'; */

function SavedMovies() {
  const currentUser = React.useContext(CurrentUserContext);
  const savedMovies = React.useContext(SavedMoviesContext);

  const [isListEmpty, setIsListEmpty] = useState(false);

  useEffect(() => {
    if (!savedMovies) {
      setIsListEmpty(true);
    }
    savedMovies.filter((movie) => movie.owner === currentUser._id);
  }, []);

  console.log(savedMovies);
  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList isEmty={isListEmpty} isSavedMovies={true} movies={savedMovies}/>

      {/* Если фильмы ни один фильм не был сохранен */}
      {/*  <EmptyMoviesList text='У вас еще нет сохраненных фильмов &#128148;' /> */}
    </section>
  );
}

export default SavedMovies;
