import React from 'react';

import './MoreMoviesBtn.css';

function MoreMoviesBtn({ isEmpty, onMoreMovies }) {
  function handleMoreMoviesBtn() {
    onMoreMovies();
  }

  if (isEmpty) {
    return null;
  }
  return (
    <div className="moreMoviesBtn__block">
      <button className="moreMoviesBtn__btn" type="button" onClick={handleMoreMoviesBtn}>
        Ещё
      </button>
    </div>
  );
}

export default MoreMoviesBtn;
