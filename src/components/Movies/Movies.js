import React, { useState } from 'react';

import api from '../../utils/MoviesApi';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreMoviesBtn from '../MoreMoviesBtn/MoreMoviesBtn';
import Preloader from '../Preloader/Preloader';
/* import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList'; */

function Movies() {
  /* Отображение прелоадера */
  const [isLoading, setIsLoading] = useState(false);

  function handleSearchMovies() {
    setIsLoading(!isLoading);
    return api
      .getMovies()
      .then((movies) => { console.log(movies); setIsLoading(false); })
      .catch((err) => { console.log(err); setIsLoading(false); });
  }

  return (
    <>
      <Preloader isLoading={isLoading} />
      <SearchForm onSubmit={handleSearchMovies}/>

      <MoviesCardList />
      <MoreMoviesBtn />

      {/* Отображаем компонент, если фильмы не найдены */}
     {/*        <EmptyMoviesList text='Мы ничего не нашли по вашему запросу &#128270;' /> */}
    </>
  );
}

export default Movies;
