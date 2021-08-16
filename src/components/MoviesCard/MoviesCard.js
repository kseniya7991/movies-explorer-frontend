import React from 'react';

import './MoviesCard.css';

function MoviesCard({ children }) {
  const url = 'https://api.nomoreparties.co';

  console.log(url + children.image.url);
  const title = children.nameRU.toString();
  const duration = children.duration.toString();
  console.log(duration);

  /* Расчет продолжительности фильма в часах и минутах */
  function handleTime(time) {
    if (time > 60) {
      const hours = Math.floor(time / 60);
      console.log('часов', hours);
      let minutes = time - hours * 60;
      if (minutes < 5) {
        minutes = 0;
      }
      console.log('hours', hours, 'minutes', minutes);
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
