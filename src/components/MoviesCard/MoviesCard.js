import React, { useState, useEffect } from 'react';

import './MoviesCard.css';

function MoviesCard({
  movie, onClickSave, isSavedMovies, savedMovies,
}) {
  const url = 'https://api.nomoreparties.co';

  const title = movie.nameRU.toString();
  const duration = movie.duration.toString();

  const imageUrl = isSavedMovies === true ? movie.image : url + movie.image.url;
  const trailer = isSavedMovies === true ? movie.trailer : movie.trailerLink;

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

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (isSavedMovies) {
      setIsSaved(true);
    } else {
      setIsSaved(savedMovies.some((el) => el.movieId === movie.id));
    }
  }, [savedMovies]);

  /* Функция сохранения фильма */
  function handleClickOnSave() {
    if (!isSavedMovies) {
      setIsSaved(!isSaved);
    }
    onClickSave(movie, isSaved, isSavedMovies);
  }

  const isSavedBtn = `moviesCard__button-save ${
    isSaved && isSavedMovies === false ? 'moviesCard__button-save_active' : ''
  } ${isSavedMovies ? 'moviesCard__button-save_delete' : ''}`;

  return (
    <li className="moviesCard">
      <div className="moviesCard__title-wrap">
        <p className="moviesCard__title">{title}</p>
        <p className="moviesCard__time">{newTime}</p>
      </div>
      <a
        href={trailer}
        target="_blank"
        rel="noreferrer"
        className="moviesCard__image-link"
      >
        <img className="moviesCard__image" src={imageUrl} alt={title}></img>
      </a>
      <button className={isSavedBtn} type="button" onClick={handleClickOnSave}>
        {isSaved ? '' : 'Сохранить'}
      </button>
    </li>
  );
}

export default MoviesCard;
