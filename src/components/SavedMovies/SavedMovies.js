import React from 'react';
import SearchForm from '../SearchForm/SearchForm';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMoviesContext from '../../contexts/SavedMoviesContext copy';
/* import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList'; */

function SavedMovies() {
  const savedMovies = React.useContext(SavedMoviesContext);

  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList isSavedMovies={true} savedMovies={savedMovies}/>

      {/* Если фильмы ни один фильм не был сохранен */}
      {/*  <EmptyMoviesList text='У вас еще нет сохраненных фильмов &#128148;' /> */}
    </section>
  );
}

export default SavedMovies;
