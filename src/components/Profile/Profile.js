import React from 'react';

import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile() {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className="profile">
      <form className="profile__form">
        <div>
          <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
          <div className="profile__inputs-block">
            <label htmlFor="password" className="profile__label">
              Имя
            </label>
            <input
              className="profile__input"
              type="text"
            >{currentUser.name}</input>
          </div>
          <div className="profile__inputs-block">
            <label htmlFor="password" className="profile__label">
              E-mail
            </label>
            <input
              className="profile__input"
              type="email"
            >{currentUser.email}</input>
          </div>
        </div>
        <div>
          <button className="profile__submit-btn" type="submit">
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
