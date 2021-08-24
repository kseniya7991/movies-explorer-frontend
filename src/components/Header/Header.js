import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

import './Header.css';

function Header({ children, isPromo }) {
  return (
    <header className={`header ${isPromo ? 'header_promo' : ''}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Сервис Фильмы" title="Сервис Фильмы" />
      </Link>
      {children}
    </header>
  );
}

export default Header;
