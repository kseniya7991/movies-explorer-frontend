import React, { useState, useEffect } from 'react';
import SavedMoviesContext from '../../contexts/SavedMoviesContext';

import './MoviesCard.css';

function MoviesCard({ movie, onClickSave, isSavedMovies }) {
  const savedMovies = React.useContext(SavedMoviesContext);
  const url = 'https://api.nomoreparties.co';

  const title = movie.nameRU.toString();
  const duration = movie.duration.toString();

  const imageUrl = isSavedMovies === true ? movie.image : url + movie.image.url;

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
    setIsSaved(savedMovies.some((el) => el.movieId === movie.id));
  }, []);

  /* Функция сохранения фильма */
  function handleClickOnSave() {
    setIsSaved(!isSaved);
    onClickSave(movie, isSaved);
  }

  /* const isSaved = savedMovies.some((item) => item.id === movie.id); */
  const isSavedBtn = `moviesCard__button-save ${isSaved ? 'moviesCard__button-save_active' : ''}`;

  return (
    <>
      <li className="moviesCard">
        <div className="moviesCard__title-wrap">
          <p className="moviesCard__title">{title}</p>
          <p className="moviesCard__time">{newTime}</p>
        </div>
        <a href={movie.trailerLink} target="_blank" rel="noreferrer" className="moviesCard__image-link"><img className="moviesCard__image" src={imageUrl} alt={title}></img></a>
        <button
          className={isSavedBtn}
          type="button"
          onClick={handleClickOnSave}
        >Сохранить
        </button>
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
