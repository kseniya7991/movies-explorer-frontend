import React from 'react';

import './MoviesCard.css';
import film from '../../images/film.jpg';

function MoviesCard() {
  return (
    <>
      <li className="MoviesCard">
        <div className="MoviesCard__title-wrap">
          <p className="MoviesCard__title">В погоне за Бенкси</p>
          <p className="MoviesCard__time">27 минут</p>
        </div>
        <img className="MoviesCard__image" src={film}></img>
        <button className="MoviesCard__button-save MoviesCard__button-save_active" type="button">&#10003;</button>
      </li>

      <li className="MoviesCard">
        <div className="MoviesCard__title-wrap">
          <p className="MoviesCard__title">В погоне за Бенкси</p>
          <p className="MoviesCard__time">27 минут</p>
        </div>
        <img className="MoviesCard__image" src={film}></img>
        <button className="MoviesCard__button-save" type="button">Сохранить</button>
      </li>

      <li className="MoviesCard">
        <div className="MoviesCard__title-wrap">
          <p className="MoviesCard__title">В погоне за Бенкси</p>
          <p className="MoviesCard__time">27 минут</p>
        </div>
        <img className="MoviesCard__image" src={film}></img>
        <button className="MoviesCard__button-save MoviesCard__button-save_active" type="button">&#10003;</button>
      </li>

      <li className="MoviesCard">
        <div className="MoviesCard__title-wrap">
          <p className="MoviesCard__title">В погоне за Бенкси</p>
          <p className="MoviesCard__time">27 минут</p>
        </div>
        <img className="MoviesCard__image" src={film}></img>
        <button className="MoviesCard__button-save" type="button">Сохранить</button>
      </li>

      <li className="MoviesCard">
        <div className="MoviesCard__title-wrap">
          <p className="MoviesCard__title">В погоне за Бенкси</p>
          <p className="MoviesCard__time">27 минут</p>
        </div>
        <img className="MoviesCard__image" src="https://www.youtube.com/watch?v=S1oVkj5wAp8"></img>
        <button className="MoviesCard__button-save MoviesCard__button-save_active" type="button">&#10003;</button>
      </li>
    </>
  );
}

export default MoviesCard;
