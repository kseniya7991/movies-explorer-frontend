import React, { useState } from 'react';

import api from '../../utils/MoviesApi';
import filterByKey from '../../utils/FilterMovies';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreMoviesBtn from '../MoreMoviesBtn/MoreMoviesBtn';
import Preloader from '../Preloader/Preloader';
import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList';

function Movies({ onShowError }) {
  /* Отображение прелоадера */
  const [isLoading, setIsLoading] = useState(false);

  /* Проверка наличия фильмов в выдаче */
  const [isListEmpty, setIsListEmpty] = useState(false);

  function handleSearchMovies(keys) {
    setIsLoading(!isLoading);
    return api
      .getMovies()
      .then((movies) => {
        const filteredMovies = filterByKey(movies, keys);
        if (!filteredMovies) {
          setIsListEmpty(true);
        } else {
          setIsListEmpty(false);
        }
        setIsLoading(false);
        console.log(filteredMovies);
      })
      .catch((err) => {
        console.log(err);
        onShowError();
        setIsLoading(false);
      });
  }

  return (
    <>
      <Preloader isLoading={isLoading} />
      <SearchForm handleSearch={handleSearchMovies}/>

      <MoviesCardList isEmpty={isListEmpty} />
      <MoreMoviesBtn isEmpty={isListEmpty} />

      {/* Отображаем компонент, если фильмы не найдены */}
     <EmptyMoviesList isEmpty={isListEmpty} text='Мы ничего не нашли по вашему запросу &#128270;' />
    </>
  );
}

export default Movies;
