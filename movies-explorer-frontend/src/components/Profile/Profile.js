import React from 'react';

import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <form className="profile__form">
        <div>
          <h2 className="profile__title">Привет!</h2>
          <div className="profile__inputs-block">
            <label htmlFor="password" className="profile__label">
              Имя
            </label>
            <input className="profile__input" type="text" placeholder="Виталий"></input>
          </div>
          <div className="profile__inputs-block">
            <label htmlFor="password" className="profile__label">
              E-mail
            </label>
            <input className="profile__input" type="email" placeholder="vital90@mail.ru"></input>
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
