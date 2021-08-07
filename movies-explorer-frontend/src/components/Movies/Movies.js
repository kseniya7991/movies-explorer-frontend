import React from 'react';

import './Movies.css';
/* import MoviesCardList from '../MoviesCardList/MoviesCardList'; */
import SearchForm from '../SearchForm/SearchForm';
/* import MoreMoviesBtn from '../MoreMoviesBtn/MoreMoviesBtn'; */
import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList';

function Movies() {
  return (
    <>
      <SearchForm />
{/*       <MoviesCardList />
      <MoreMoviesBtn /> */}
      <EmptyMoviesList />
    </>
  );
}

export default Movies;
