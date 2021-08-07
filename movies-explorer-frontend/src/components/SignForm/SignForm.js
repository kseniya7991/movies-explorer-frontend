import React from 'react';
import { Link } from 'react-router-dom';

import './SignForm.css';
import logo from '../../images/logo.svg';

function SignForm({
  name, title, buttonValue, text, linkText,
}) {
  return (
    <div className="SignForm__block">
      <form className="SignForm">
        <img
          className="Header__logo logo_sign"
          src={logo}
          alt="Фильмы"
          title="Фильмы"
        />
        <h2 className="SignForm__title">{title}</h2>

        <section className="SignForm__inputs">
          <div
            className={`SignForm__inputs-block ${
              name === 'login' ? 'SignForm_disabled' : ''
            }`}
          >
            <label htmlFor="name" className="SignForm__label">
              Имя
            </label>
            <input
              className="SignForm__input-text"
              type="text"
              id="name"
            ></input>
          </div>

          <div className={'SignForm__inputs-block'}>
            <label htmlFor="email" className="SignForm__label">
              E-mail
            </label>
            <input
              className="SignForm__input-text"
              type="email"
              id="email"
            ></input>
          </div>

          <div className={'SignForm__inputs-block'}>
            <label htmlFor="password" className="SignForm__label">
              Пароль
            </label>
            <input
              className="SignForm__input-text"
              type="password"
              id="password"
            ></input>
          </div>
        </section>

        <section className="SignForm__buttons">
          <button
            className="SignForm__register-btn"
            type="submit"
            value="buttonValue"
          >
            {buttonValue}
          </button>
          <p className="SignForm__text">
            {text}
            <Link
              to={`${name === 'login' ? '/signup' : '/signin'}`}
              className="SignForm__link"
            >
              {linkText}
            </Link>
          </p>
        </section>
      </form>
      <p></p>
    </div>
  );
}

export default SignForm;
