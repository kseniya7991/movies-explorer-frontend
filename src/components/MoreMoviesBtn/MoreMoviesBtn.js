import React from 'react';

import './MoreMoviesBtn.css';

function MoreMoviesBtn({ isEmpty }) {
  if (isEmpty) {
    return null;
  }
  return (
    <div className="moreMoviesBtn__block">
      <button className="moreMoviesBtn__btn" type="button">
        Ещё
      </button>
    </div>
  );
}

export default MoreMoviesBtn;
