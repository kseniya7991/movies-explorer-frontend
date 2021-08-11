import React from 'react';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreMoviesBtn from '../MoreMoviesBtn/MoreMoviesBtn';
/* import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList'; */

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <MoreMoviesBtn />

{/* Отображаем компонент, если фильмы не найдены */}
{/*       <EmptyMoviesList text='Мы ничего не нашл по вашему запросу &#128270;' /> */}
    </>
  );
}

export default Movies;
