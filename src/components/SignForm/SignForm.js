import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignForm.css';
import logo from '../../images/logo.svg';

import { useFormWithValidation } from '../ValidationForm/ValidationForm';

function SignForm({
  name, title, buttonValue, text, linkText, onSubmitForm,
}) {
  const sLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']; // Буквы в нижнем регистре
  const [isSLettersIncl, setIsSLettersIncl] = useState(false);

  /*
  const bLetters = 'QWERTYUIOPLKJHGFDSAZXCVBNM'; // Буквы в верхнем регистре
  const digits = '0123456789'; // Цифры
  const specials = '!@#$%^&*()_-+=|/.,:;[]{}'; // Спецсимволы

  const [isBLettersIncl, setIsBLettersIncl] = useState(false);
  const [isDigitsIncl, setIsDigitsIncl] = useState(false);
  const [isSpecialsIncl, setIsSpecialsIncl] = useState(false);

  const [passwordRate, setPasswordRate] = useState(0);
  const [passwordComplexity, setPasswordComplexity] = useState(0); */
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

    if (sLetters.some((el) => e.target.value.includes(el))) setIsSLettersIncl(true);
    /* for (let i = 0; i < password.length; i + 1) {
      if (sLetters.indexOf(password[i])) setIsSLettersIncl(true);
      if (bLetters.indexOf(password[i])) setIsBLettersIncl(true);
      if (digits.indexOf(password[i])) setIsDigitsIncl(true);
      if (specials.indexOf(password[i])) setIsSpecialsIncl(true);
    }

    if (isSLettersIncl)setPasswordRate(passwordRate + 1); // Пароль супер сильный
    if (isBLettersIncl)setPasswordRate(passwordRate + 1); // Пароль супер сильный
    if (isDigitsIncl) setPasswordRate(passwordRate + 1); // Пароль супер сильный
    if (isSpecialsIncl) setPasswordRate(passwordRate + 1); // Пароль супер сильный

    if (password.length < 6 && passwordRate < 3) setPasswordComplexity(1);
    else if (password.length < 6 && passwordRate >= 3) setPasswordComplexity(1);
    else if (password.length >= 8 && passwordRate < 3) setPasswordComplexity(2);
    else if (password.length >= 8 && passwordRate >= 3) setPasswordComplexity(3);
    else if (password.length >= 6 && passwordRate === 1) setPasswordComplexity(1);
    else if (password.length >= 6 && passwordRate > 1 && passwordRate < 4) setPasswordComplexity(2);
    else if (password.length >= 6 && passwordRate === 4) setPasswordComplexity(3); */

    console.log(e.target.value, values, isSLettersIncl);
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
             {/*  <span
                className={`signForm__text-password ${
                  passwordComplexity === 1 && !errors.password
                    ? 'password_weak'
                    : ''
                }`}
              >
                Пароль слабый
              </span>
              <span
                className={`signForm__text-password ${
                  passwordComplexity === 2 && !errors.password
                    ? 'password_middle'
                    : ''
                }`}
              >
                Пароль средний
              </span>
              <span
                className={`signForm__text-password ${
                  passwordComplexity === 3 && !errors.password
                    ? 'password_strong'
                    : ''
                }`}
              >
                Пароль сильный
              </span> */}
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
