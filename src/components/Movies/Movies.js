import React from 'react';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreMoviesBtn from '../MoreMoviesBtn/MoreMoviesBtn';
import Preloader from '../Preloader/Preloader';
/* import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList'; */

function Movies() {
  /* Константа для тестирования прелоадера */
  const isLoading = false;

  return (
    <>
      <Preloader isLoading={isLoading} />
      <SearchForm />

      <MoviesCardList />
      <MoreMoviesBtn />

      {/* Отображаем компонент, если фильмы не найдены */}
     {/*        <EmptyMoviesList text='Мы ничего не нашли по вашему запросу &#128270;' /> */}
    </>
  );
}

export default Movies;
