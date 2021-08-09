import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderUnauth.css';

function HeaderUnauth() {
  return (
      <div className="Header__sign-wrap">
        <Link className="Header__signup" to="signup">
          Регистрация
        </Link>
        <Link to="signin" className="Header__signin">
          Войти
        </Link>
      </div>
  );
}

export default HeaderUnauth;
