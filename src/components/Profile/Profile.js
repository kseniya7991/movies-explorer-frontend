import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import { useFormWithValidation } from '../ValidationForm/ValidationForm';

function Profile({
  onUpdateUser, message, status, onSignOut,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  console.log('status', status, showMessage);
  const {
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  async function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      resetForm();
      await onUpdateUser({ name, email });
      setShowMessage(true);
    }
  }

  function handleInputNameChange(e) {
    setName(e.target.value);
    handleChange(e);
    setShowMessage(false);
  }

  function handleInputEmailChange(e) {
    setEmail(e.target.value);
    handleChange(e);
    setShowMessage(false);
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
          <p className={`profile__api  ${status === false && showMessage === true ? 'profile__api_error profile__api_enabled' : ''}`}>{message}</p>
          <p className={`profile__api  ${status === true && showMessage === true ? 'profile__api_successful profile__api_enabled' : ''}`}>Данные обновлены успешно!</p>
          <button className={`profile__submit-btn ${isValid === true ? 'profile__submit-btn_enabled' : ''}`} type="submit" disabled={!isValid}>
            Редактировать
          </button>
            <Link className="profile__logout-btn" type="button" to="/" onClick={onSignOut}>
            Выйти из аккаунта
            </Link>
        </div>
      </form>
    </section>
  );
}

export default Profile;
