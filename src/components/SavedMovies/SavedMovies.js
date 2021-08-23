import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMoviesContext from '../../contexts/SavedMoviesContext';
/* import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList'; */

function SavedMovies() {
  const savedMovies = React.useContext(SavedMoviesContext);

  const [isListEmpty, setIsListEmpty] = useState(false);

  useEffect(() => {
    if (!savedMovies) {
      setIsListEmpty(true);
    }
  }, []);

  console.log(savedMovies);
  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList isEmty={isListEmpty} isSavedMovies={true} savedMovies={savedMovies}/>

      {/* Если фильмы ни один фильм не был сохранен */}
      {/*  <EmptyMoviesList text='У вас еще нет сохраненных фильмов &#128148;' /> */}
    </section>
  );
}

export default SavedMovies;
