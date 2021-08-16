import React from 'react';

import './MoviesCard.css';

function MoviesCard({ children }) {
  const url = 'https://api.nomoreparties.co';

  const title = children.nameRU.toString();
  const duration = children.duration.toString();

  /* Расчет продолжительности фильма в часах и минутах */
  function handleTime(time) {
    if (time > 60) {
      const hours = Math.floor(time / 60);
      let minutes = time - hours * 60;
      if (minutes < 5) {
        minutes = 0;
      }
      const newTime = `${hours} ч ${minutes || ''} ${minutes ? 'мин' : ''}`;
      return newTime;
    }
    return `${time} мин`;
  }
  const newTime = handleTime(duration);

  return (
    <>
      <li className="moviesCard">
        <div className="moviesCard__title-wrap">
          <p className="moviesCard__title">{title}</p>
          <p className="moviesCard__time">{newTime}</p>
        </div>
        <img className="moviesCard__image" src={url + children.image.url} alt="Фильм В погоне за Бенкси"></img>
        <button
          className={'moviesCard__button-save'}
          type="button"
        ></button>
      </li>

{/*       <li className="moviesCard">
        <div className="moviesCard__title-wrap">
          <p className="moviesCard__title">В погоне за Бенкси</p>
          <p className="moviesCard__time">27 минут</p>
        </div>
        <img
          className="moviesCard__image"
          src="https://www.youtube.com/watch?v=S1oVkj5wAp8"
          alt="Фильм В погоне за Бенкси"
        ></img>
        <button
          className={`moviesCard__button-save ${
            isSavedMovies ? 'moviesCard__button-save_saved' : ''
          }`}
          type="button"
        ></button>
      </li> */}
    </>
  );
}

export default MoviesCard;
