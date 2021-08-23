import React, { useEffect, useState } from 'react';

import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import { useFormWithValidation } from '../ValidationForm/ValidationForm';

function Profile({ onUpdateUser, errorMessage, status }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  console.log(currentUser);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  const {
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      resetForm();
      onUpdateUser({ name, email });
    }
  }

  function handleInputNameChange(e) {
    setName(e.target.value);
    handleChange(e);
  }

  function handleInputEmailChange(e) {
    setEmail(e.target.value);
    handleChange(e);
  }

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <div>
          <h2 className="profile__title" >{`Привет, ${name || 'друг'}!`}</h2>
          <div className="profile__inputs-block">
            <label htmlFor="password" className="profile__label">
              Имя
            </label>
            <input
              name="name"
              className="profile__input"
              type="text"
              onChange={handleInputNameChange}
              placeholder="Виталий"
              value={name || ''}
              pattern="^[a-zA-Zа-яёЁА-Я\s-]+$"
              minLength="2"
                maxLength="30"
                required
            ></input>
            {errors.name && (
              <span className="profile__text-error">{errors.name}</span>
            )}
          </div>
          <div className="profile__inputs-block">
            <label htmlFor="password" className="profile__label">
              E-mail
            </label>
            <input
              name="email"
              className="profile__input"
              type="email"
              onChange={handleInputEmailChange}
              placeholder="vtal96@mail.ru"
              value={email || ''}
              required
            ></input>
            {errors.email && (
              <span className="profile__text-error">{errors.email}</span>
            )}
          </div>
        </div>
        <div>
          {errorMessage && (<p className={'profile__api profile__api_error'}>{errorMessage}</p>)}
          {status && (<p className={'profile__api profile__api_successful'}>Данные успешно обновлены!</p>)}
          <button className={`profile__submit-btn ${isValid === true ? 'profile__submit-btn_enabled' : ''}`} type="submit" disabled={!isValid}>
            Редактировать
          </button>
          <button className="profile__logout-btn" type="button">
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
