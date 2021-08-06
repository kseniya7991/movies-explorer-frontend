import React from 'react';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreMoviesBtn from '../MoreMoviesBtn/MoreMoviesBtn';

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <MoreMoviesBtn />
    </>
  );
}

export default Movies;
