import React from 'react';
import SearchForm from '../SearchForm/SearchForm';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <section className="SavedMovies">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default SavedMovies;
