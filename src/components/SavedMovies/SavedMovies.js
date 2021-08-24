import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMoviesContext from '../../contexts/SavedMoviesContext';
import filterMovies from '../../utils/FilterMovies';

import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList';

function SavedMovies({ onClickSave }) {
  const savedMovies = React.useContext(SavedMoviesContext);
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isEmptyText, setIsEmptyText] = useState('');

  const [isListEmpty, setIsListEmpty] = useState(false);

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  useEffect(() => {
    console.log(filteredMovies.length);
    if (filteredMovies.length === 0) {
      setIsListEmpty(true);
      setIsEmptyText('Мы ничего не нашли по вашему запросу');
    } else {
      setIsListEmpty(false);
    }

    if (savedMovies.length === 0) {
      setIsListEmpty(true);
      setIsEmptyText('У вас ещё нет сохраненных фильмов');
    } else {
      setIsListEmpty(false);
    }
  }, [filteredMovies]);

  const handleSearchMovies = (keys, checkbox) => {
    if (savedMovies.length !== 0 && keys !== '') {
      setFilteredMovies(filterMovies(savedMovies, keys, checkbox));
    } else if (keys === '') {
      setFilteredMovies(savedMovies);
    }
  };

  console.log(filteredMovies, savedMovies);

  return (
    <section className="savedMovies">
      <SearchForm handleSearch={handleSearchMovies} isRequired={false}/>
      <MoviesCardList
        isEmpty={isListEmpty}
        isSavedMovies={true}
        movies={filteredMovies}
        onClickSave={onClickSave}
      />

      {/* Если ни один фильм не был сохранен */}
      <EmptyMoviesList
        isEmpty={isListEmpty}
        text={isEmptyText}
      />
    </section>
  );
}

export default SavedMovies;

/* &#128148 */
