import React from 'react';

import './Profile.css';

function Profile() {
  return (
    <form className="Profile">
      <h2>Привет!</h2>
      <input type="text"></input>
      <input type="email"></input>
      <button type="submit">Редактировать</button>
    </form>
  );
}

export default Profile;
