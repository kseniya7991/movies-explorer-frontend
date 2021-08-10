import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderUnauth.css';
import '../Header.css';

function HeaderUnauth() {
  return (
      <nav className="Header__wrap">
        <Link className="Header__signup" to="/signup">
          Регистрация
        </Link>
        <Link to="/signin" className="Header__signin">
          Войти
        </Link>
      </nav>
  );
}

export default HeaderUnauth;
