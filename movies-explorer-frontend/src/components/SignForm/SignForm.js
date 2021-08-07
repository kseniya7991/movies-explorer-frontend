import React from 'react';
import { Link } from 'react-router-dom';

import './SignForm.css';
import logo from '../../images/logo.svg';

function SignForm() {
  return (
    <div className="SignForm__block">
      <form className="SignForm">
      <img className="Header__logo" src={logo} alt="Фильмы" title="Фильмы" />
        <h2 className="SignForm__title">Добро пожаловать!</h2>
        <section className="SignForm__inputs">
          <label htmlFor="name" className="SignForm__label">Имя</label>
          <input className="SignForm__input-text" type="text" id="name"></input>
          <label htmlFor="email" className="SignForm__label">E-mail</label>
          <input className="SignForm__input-text" type="email" id="email"></input>
          <label htmlFor="password" className="SignForm__label">Пароль</label>
          <input className="SignForm__input-text" type="password" id="password"></input>
        </section>
        <section className="SignForm__buttons">
          <button className="SignForm__register-btn" type="submit">Зарегистрироваться</button>
          <p className="SignForm__text">Уже зарегистрированы?&nbsp;
          <Link to="" className="SignForm__link">Войти</Link></p>
        </section>
      </form>
      <p></p>
    </div>
  );
}

export default SignForm;
