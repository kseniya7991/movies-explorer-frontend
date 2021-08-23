import React, { useEffect, useState } from 'react';

import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import { useFormWithValidation } from '../ValidationForm/ValidationForm';

function Profile({ onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid && currentUser.name !== name && currentUser.email !== email) {
      resetForm();
      onUpdateUser(values);
    }
  }

  function handleInputNameChange(e) {
    setName(e.target.value);
    if (currentUser && currentUser.name !== e.target.value) {
      setIsChanged(true);
      handleChange(e);
    } else {
      setIsChanged(false);
    }
  }

  function handleInputEmailChange(e) {
    setEmail(e.target.value);
    if (currentUser && currentUser.email !== e.target.value) {
      setIsChanged(true);
      handleChange(e);
    } else {
      setIsChanged(false);
    }
  }

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <div>
          <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
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
          <button className={`profile__submit-btn ${isChanged === true && isValid === true ? 'profile__submit-btn_enabled' : ''}`} type="submit">
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
