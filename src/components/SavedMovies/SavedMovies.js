import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMoviesContext from '../../contexts/SavedMoviesContext';

import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList';

function SavedMovies({ onClickSave }) {
  const savedMovies = React.useContext(SavedMoviesContext);

  const [isListEmpty, setIsListEmpty] = useState(false);

  useEffect(() => {
    if (savedMovies.length === 0) {
      setIsListEmpty(true);
    }
  }, []);

  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList
        isEmpty={isListEmpty}
        isSavedMovies={true}
        movies={savedMovies}
        onClickSave={onClickSave}
      />

      {/* Если ни один фильм не был сохранен */}
      <EmptyMoviesList
        isEmpty={isListEmpty}
        text="У вас еще нет сохраненных фильмов &#128148;"
      />
    </section>
  );
}

export default SavedMovies;
