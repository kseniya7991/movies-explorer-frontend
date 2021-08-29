import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignForm.css';
import logo from '../../images/logo.svg';

import { useFormWithValidation } from '../ValidationForm/ValidationForm';

function SignForm({
  name, title, buttonValue, text, linkText, onSubmitForm,
}) {
  const sLetters = 'qwertyuiopasdfghjklzxcvbnm'; // Буквы в нижнем регистре
  const bLetters = 'QWERTYUIOPLKJHGFDSAZXCVBNM'; // Буквы в верхнем регистре
  const digits = '0123456789'; // Цифры
  const specials = '!@#$%^&*()_-+=|/.,:;[]{}'; // Спецсимволы

  const [passwordСomplexity, setPasswordСomplexity] = useState(0);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  function onShowPassword() {
    setIsVisiblePassword(!isVisiblePassword);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      resetForm();
      onSubmitForm(values);
    }
  }

  function checkPasswordComplexity(e) {
    handleChange(e);
    if (sLetters.indexOf(e.target.value)) {
      setPasswordСomplexity(1); // Пароль слабый
    }

    if (bLetters.indexOf(e.target.value)) {
      setPasswordСomplexity(2); // Пароль хороший
    }

    if (digits.indexOf(e.target.value)) {
      setPasswordСomplexity(3); // Пароль сильный
    }

    if (specials.indexOf(e.target.value)) {
      setPasswordСomplexity(4); // Пароль супер сильный
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
                className={`signForm__input-text ${
                  errors.name ? 'signForm__input-text_error' : ''
                }`}
                type="text"
                id="name"
                placeholder="Виталий"
                onChange={handleChange}
                minLength="2"
                maxLength="30"
                pattern="^[a-zA-Zа-яёЁА-Я\s-]+$"
                required
                disabled={`${name === 'login' ? 'true' : ''}`}
              ></input>
              {errors.name && (
                <span className="signForm__text-error">{errors.name}</span>
              )}
            </div>

            <div className={'signForm__inputs-block'}>
              <label htmlFor="email" className="signForm__label">
                E-mail
              </label>
              <input
                name="email"
                className={`signForm__input-text ${
                  errors.email ? 'signForm__input-text_error' : ''
                }`}
                type="email"
                id="email"
                placeholder="vital90@mail.ru"
                onChange={handleChange}
                required
              ></input>
              {errors.email && (
                <span className="signForm__text-error">{errors.email}</span>
              )}
                            <span
                className={`signForm__text-password ${
                  passwordСomplexity === 1 && !errors.name
                    ? 'password_weak'
                    : ''
                }`}
              >
                Пароль слабый
              </span>
              <span
                className={`signForm__text-password ${
                  passwordСomplexity === 2 && !errors.name
                    ? 'password_good'
                    : ''
                }`}
              >
                Пароль хороший
              </span>
              <span
                className={`signForm__text-password ${
                  passwordСomplexity === 3 && !errors.name
                    ? 'password_strong'
                    : ''
                }`}
              >
                Пароль отличный
              </span>
              <span
                className={`signForm__text-password ${
                  passwordСomplexity === 4 && !errors.name
                    ? 'password_very-strong'
                    : ''
                }`}
              >
                Пароль супер отличный
              </span>
            </div>

            <div className={'signForm__inputs-block'}>
              <label htmlFor="password" className="signForm__label">
                Пароль
              </label>
              <input
                name="password"
                className={`signForm__input-text ${
                  errors.password ? 'signForm__input-text_error' : ''
                }`}
                type={`${isVisiblePassword ? 'text' : 'password'}`}
                id="password"
                onChange={checkPasswordComplexity}
                required
              ></input>
              {errors.password && (
                <span className="signForm__text-error">{errors.password}</span>
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
            className={`signForm__register-btn ${
              isValid ? '' : 'signForm__register-btn_disabled'
            }`}
            type="submit"
            value="buttonValue"
            disabled={!isValid}
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
