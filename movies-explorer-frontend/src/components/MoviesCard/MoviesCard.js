import React from 'react';

import './MoviesCard.css';
import film from '../../images/film.jpg';

function MoviesCard({ isSavedMovies }) {
  return (
    <>
      <li className="moviesCard">
        <div className="moviesCard__title-wrap">
          <p className="moviesCard__title">В погоне за Бенкси</p>
          <p className="moviesCard__time">27 минут</p>
        </div>
        <img className="moviesCard__image" src={film}></img>
        <button className={`moviesCard__button-save ${isSavedMovies ? 'moviesCard__button-save_saved' : ''}`} type="button"></button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__title-wrap">
          <p className="moviesCard__title">В погоне за Бенкси</p>
          <p className="moviesCard__time">27 минут</p>
        </div>
        <img className="moviesCard__image" src={film}></img>
        <button className={`moviesCard__button-save ${isSavedMovies ? 'moviesCard__button-save_saved' : ''}`} type="button"></button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__title-wrap">
          <p className="moviesCard__title">В погоне за Бенкси</p>
          <p className="moviesCard__time">27 минут</p>
        </div>
        <img className="moviesCard__image" src={film}></img>
        <button className={`moviesCard__button-save ${isSavedMovies ? 'moviesCard__button-save_saved' : ''}`} type="button"></button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__title-wrap">
          <p className="moviesCard__title">В погоне за Бенкси</p>
          <p className="moviesCard__time">27 минут</p>
        </div>
        <img className="moviesCard__image" src={film}></img>
        <button className={`moviesCard__button-save ${isSavedMovies ? 'moviesCard__button-save_saved' : ''}`} type="button"></button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__title-wrap">
          <p className="moviesCard__title">В погоне за Бенкси</p>
          <p className="moviesCard__time">27 минут</p>
        </div>
        <img className="moviesCard__image" src="https://www.youtube.com/watch?v=S1oVkj5wAp8"></img>
        <button className={`moviesCard__button-save ${isSavedMovies ? 'moviesCard__button-save_saved' : ''}`} type="button"></button>
      </li>
    </>
  );
}

export default MoviesCard;
