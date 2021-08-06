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
        <button className="MoviesCard__button-save" type="button">Сохранить</button>
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
        <button className="MoviesCard__button-save" type="button">Сохранить</button>
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
        <button className="MoviesCard__button-save" type="button">Сохранить</button>
      </li>
    </>
  );
}

export default MoviesCard;
