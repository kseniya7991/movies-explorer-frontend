import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignForm.css';
import logo from '../../images/logo.svg';

import { useForm } from '../ValidationForm/ValidationForm';

function SignForm({
  name, title, buttonValue, text, linkText,
}) {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const {
    values, handleChange, errors, isValid, resetForm,
  } = useForm();

  function onShowPassword() {
    setIsVisiblePassword(!isVisiblePassword);
  }

  function handleSubmit() {
    console.log('отпрвлено', values);
    if (isValid) {
      resetForm();
    }
  }

  return (
    <section className="signForm">
      <form className="signForm__form" onSubmit={handleSubmit}>
        <div>
          <img
            className="header__logo logo_sign"
            src={logo}
            alt="Логотип проекта"
            title="Логотип проекта"
          />
          <h2 className="signForm__title">{title}</h2>

          <section className="signForm__inputs">
            <div
              className={`signForm__inputs-block ${
                name === 'login' ? 'signForm_disabled' : ''
              }`}
            >
              <label htmlFor="name" className="signForm__label">
                Имя
              </label>
              <input
                name="name"
                className="signForm__input-text"
                type="text"
                id="name"
                placeholder="Виталий"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className={'signForm__inputs-block'}>
              <label htmlFor="email" className="signForm__label">
                E-mail
              </label>
              <input
              name="email"
                className="signForm__input-text"
                type="email"
                id="email"
                placeholder="vital90@mail.ru"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className={'signForm__inputs-block'}>
              <label htmlFor="password" className="signForm__label">
                Пароль
              </label>
              <input
              name="password"
                className="signForm__input-text signForm__input-text_error"
                type={`${isVisiblePassword ? 'text' : 'password'}`}
                id="password"
                onChange={handleChange}
                required
              ></input>
              {!isValid && (
                <span className="signForm__text-error">{errors}</span>
              )}
              <button
                className={`signForm__password_unvisible ${
                  isVisiblePassword ? 'signForm__password_visible' : ''
                }`}
                onClick={onShowPassword}
                type="button"
              />
            </div>
          </section>
        </div>

        <section className="signForm__buttons">
          <button
            className="signForm__register-btn"
            type="submit"
            value="buttonValue"
          >
            {buttonValue}
          </button>
          <p className="signForm__text">
            {text}
            <Link
              to={`${name === 'login' ? '/signup' : '/signin'}`}
              className="signForm__link"
            >
              {linkText}
            </Link>
          </p>
        </section>
      </form>
      <p></p>
    </section>
  );
}

export default SignForm;
