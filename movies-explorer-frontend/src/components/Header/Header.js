import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

import './Header.css';

function Header() {
  return (
    <header className="Header Header_promo">
      <Link to="/">
        <img className="Header__logo" src={logo} alt="Фильмы" title="Фильмы" />
      </Link>
      <div className="Header__sign-wrap">
        <Link className="Header__signup" to="signup">
          Регистрация
        </Link>
        <Link to="signin" className="Header__signin">
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;
