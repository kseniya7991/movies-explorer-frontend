import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <>
    <ul className="MoviesCardList">
      <MoviesCard />
    </ul>
  </>
  );
}

export default MoviesCardList;
