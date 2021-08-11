import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderUnauth.css';
import '../Header.css';

function HeaderUnauth() {
  return (
      <nav className="header__wrap">
        <Link className="header__signup" to="/signup">
          Регистрация
        </Link>
        <Link to="/signin" className="header__signin">
          Войти
        </Link>
      </nav>
  );
}

export default HeaderUnauth;
