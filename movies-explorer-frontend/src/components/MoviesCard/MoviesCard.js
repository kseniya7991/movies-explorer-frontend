import React from 'react';

import './MoviesCard.css';

function MoviesCard() {
  return (
    <div className="MoviesCard">
      <div className="MoviesCard__title-wrap">
        <p classnName="MoviesCard__title"></p>
        <p classnName="MoviesCard__time"></p>
      </div>
      <img className="MoviesCard__image"></img>
      <button className="MoviesCard__button-save" type="button"></button>
    </div>
  );
}

export default MoviesCard;
