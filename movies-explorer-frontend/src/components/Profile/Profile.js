import React from 'react';

import './Profile.css';

/* <div className="SignForm__block">
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
        type={`${isVisiblePassword ? 'text' : 'password'}`}
        id="password"
      ></input>
      <button
        className={`SignForm__password_unvisible ${
          isVisiblePassword ? 'SignForm__password_visible' : ''
        }`}
        onClick={onShowPassword}
        type="button"
      />
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
 */
function Profile() {
  return (
    <section className="Profile">
      <form className="Profile__form">
        <div>
          <h2 className="Profile__title">Привет!</h2>
          <div className="Profile__inputs-block">
            <label htmlFor="password" className="Profile__label">
              Имя
            </label>
            <input className="Profile__input" type="text" placeholder="Виталий"></input>
          </div>
          <div className="Profile__inputs-block">
            <label htmlFor="password" className="Profile__label">
              E-mail
            </label>
            <input className="Profile__input" type="email" placeholder="vital90@mail.ru"></input>
          </div>
        </div>
        <div>
          <button className="Profile__submit-btn" type="submit">
            Редактировать
          </button>
          <button className="Profile__logout-btn" type="button">
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
