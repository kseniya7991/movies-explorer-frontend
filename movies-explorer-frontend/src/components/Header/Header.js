import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header className="Header">
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
