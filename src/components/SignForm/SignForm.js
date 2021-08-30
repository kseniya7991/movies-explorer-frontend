import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignForm.css';
import logo from '../../images/logo.svg';

import { useFormWithValidation } from '../ValidationForm/ValidationForm';

function SignForm({
  name, title, buttonValue, text, linkText, onSubmitForm,
}) {
  /*   const sLetters = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
  ]; // Буквы в нижнем регистре */
  /*   const [isSLettersIncl, setIsSLettersIncl] = useState(false);
  const bLetters = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'L',
    'K',
    'J',
    'H',
    'G',
    'F',
    'D',
    'S',
    'A',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
  ]; // Буквы в верхнем регистре */
  /* const [isBLettersIncl, setIsBLettersIncl] = useState(false);
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // Цифры
  const [isDigitsIncl, setIsDigitsIncl] = useState(false);
  const specials = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '-',
    '+',
    "'",
    '=',
    '|',
    '/',
    '.',
    ',',
    ':',
    ';',
    '[',
    ']',
    '{',
    '}',
  ]; // Спецсимволы */
  /*   const [isSpecialsIncl, setIsSpecialsIncl] = useState(false); */
  /*
  const bLetters = 'QWERTYUIOPLKJHGFDSAZXCVBNM'; // Буквы в верхнем регистре

  const specials = '!@#$%^&*()_-+=|/.,:;[]{}'; // Спецсимволы

  const [isBLettersIncl, setIsBLettersIncl] = useState(false);
  const [isDigitsIncl, setIsDigitsIncl] = useState(false);
  const [isSpecialsIncl, setIsSpecialsIncl] = useState(false); */

  const [passwordStrength, setPasswordStrength] = useState(0);
  /* const [passwordComplexity, setPasswordComplexity] = useState(0); */
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
    const password = e.target.value;

    const reg = /(?=.*[0-9])(?=.*[!@#$%^&*])((?=.*[a-z])|(?=.*[а-я]))((?=.*[A-Z])|(?=.*[А-Я]))/g;
    if (reg.test(password) && password.length >= 8) {
      setPasswordStrength(3);
    } else if (reg.test(password) || password.length >= 8) {
      setPasswordStrength(2);
    } else {
      setPasswordStrength(1);
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
              <span
                className={`signForm__text-password ${
                  passwordStrength === 1 && !errors.password
                    ? 'password_weak'
                    : ''
                }`}
              >
                Пароль слабый. Рекомендация: длина пароля от 8-ми символов,
                пароль должен содержать хотя бы одну цифру, одну букву в нижнем
                регистре, одну букву в верхнем регистре, один специальный
                символ.
              </span>
              <span
                className={`signForm__text-password ${
                  passwordStrength === 2 && !errors.password
                    ? 'password_middle'
                    : ''
                }`}
              >
                Пароль средний. Рекомендация: длина пароля от 8-ми символов,
                пароль должен содержать хотя бы одну цифру, одну букву в нижнем
                регистре, одну букву в верхнем регистре, один специальный
                символ.
              </span>
              <span
                className={`signForm__text-password ${
                  passwordStrength === 3 && !errors.password
                    ? 'password_strong'
                    : ''
                }`}
              >
                Проверка сложности пароля пройдена!
              </span>
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
