import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMoviesContext from '../../contexts/SavedMoviesContext';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList';

function SavedMovies() {
  const currentUser = React.useContext(CurrentUserContext);
  const allSavedMovies = React.useContext(SavedMoviesContext);
  const [savedMovies, setSavedMovies] = useState([]);

  const [isListEmpty, setIsListEmpty] = useState(false);

  function filterAllSavedMovies() {
    setSavedMovies(allSavedMovies.filter((movie) => movie.owner === currentUser._id));
  }

  useEffect(() => {
    filterAllSavedMovies();
  }, []);

  useEffect(() => {
    if (!savedMovies) {
      setIsListEmpty(true);
    }
  }, []);

  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList isEmty={isListEmpty} isSavedMovies={true} movies={savedMovies}/>

      {/* Если ни один фильм не был сохранен */}
      <EmptyMoviesList isEmpty={isListEmpty} text='У вас еще нет сохраненных фильмов &#128148;' />
    </section>
  );
}

export default SavedMovies;
