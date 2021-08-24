import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMoviesContext from '../../contexts/SavedMoviesContext';
import filterMovies from '../../utils/FilterMovies';

import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList';

function SavedMovies({ onClickSave }) {
  const savedMovies = React.useContext(SavedMoviesContext);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [isListEmpty, setIsListEmpty] = useState(false);

  useEffect(() => {
    if (savedMovies.length === 0) {
      setIsListEmpty(true);
    }
  }, []);

  /* Функция поиска фильмов: получение фильмов из API и фильтрация по условиям */
  /*     const getAllMovies = (keys, checkbox) => api
    .getMovies()
    .then((movies) => {
      setAllMovies(movies);
      setFilteredMovies(filterMovies(movies, keys, checkbox));
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      onShowError();
      setIsLoading(false);
    }); */

  const handleSearchMovies = (keys, checkbox) => {
    if (savedMovies.length !== 0) {
      setFilteredMovies(filterMovies(savedMovies, keys, checkbox));
    } else {
      setFilteredMovies([]);
    }
  };

  console.log(filteredMovies, savedMovies);

  return (
    <section className="savedMovies">
      <SearchForm handleSearch={handleSearchMovies}/>
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
