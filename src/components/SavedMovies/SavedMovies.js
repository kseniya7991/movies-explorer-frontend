import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import filterMovies from '../../utils/FilterMovies';

import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList';

function SavedMovies({ onClickSave, savedMovies }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isEmptyText, setIsEmptyText] = useState('');

  const [isListEmpty, setIsListEmpty] = useState(false);

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  useEffect(() => {
    if (filteredMovies.length === 0 && savedMovies.length === 0) {
      setIsListEmpty(true);
      setIsEmptyText('У вас ещё нет сохраненных фильмов');
    } else if (filteredMovies.length === 0) {
      setIsListEmpty(true);
      setIsEmptyText('Мы ничего не нашли по вашему запросу');
    } else {
      setIsListEmpty(false);
    }
  }, [filteredMovies]);

  function handleSearchMovies(keys, checkbox) {
    if (savedMovies.length !== 0 && keys !== '') {
      console.log('6', keys);
      setFilteredMovies(filterMovies(savedMovies, keys, checkbox));
    } else if (keys === '' && checkbox === true) {
      console.log('5');
      setFilteredMovies(filterMovies(savedMovies, keys, checkbox));
    } else if (keys === '') {
      console.log('4', savedMovies);
      setFilteredMovies(savedMovies);
    }
  }

  return (
    <section className="savedMovies">
      <SearchForm handleSearch={handleSearchMovies} isRequired={false}/>
      <MoviesCardList
        isEmpty={isListEmpty}
        isSavedMovies={true}
        movies={filteredMovies}
        onClickSave={onClickSave}
        savedMovies={savedMovies}
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
