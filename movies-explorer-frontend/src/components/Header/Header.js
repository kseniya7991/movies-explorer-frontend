import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

import './Header.css';

function Header() {
/*   if (!isLogged) {
    return null;
  } */
  return (
    <header className="Header">
{/*     <header className="Header Header_promo"> */}
      <Link to="/">
        <img className="Header__logo" src={logo} alt="Фильмы" title="Фильмы" />
      </Link>

{/*       Блок для неавторизованного пользователя */}
      <div className="Header__sign-wrap">
        <Link className="Header__signup" to="signup">
          Регистрация
        </Link>
        <Link to="signin" className="Header__signin">
          Войти
        </Link>
      </div>

{/*       Блок для авторизованного пользователя */}

    </header>
  );
}

export default Header;
