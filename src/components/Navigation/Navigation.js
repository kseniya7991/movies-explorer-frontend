import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';
import '../Header/Header.css';
import Popup from '../Popup/Popup';

function Navigation() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Определяем девайс через ширину экрана при монтировании элемента
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
        setMenuOpened(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  console.log(isMobile);

  // Скрываем/раскрываем меню при клике на кнопку закрытия или гамбургера
  function handleMenuOpening() {
    if (isMobile) {
      setMenuOpened(!menuOpened);
    }
  }

  return (
    <>
      <Popup popupOpened={menuOpened} />
      <button
        className={`navigation__menu-btn ${
          isMobile ? 'navigation__menu-btn_enabled' : ''
        } `}
        type="button"
        onClick={handleMenuOpening}
      />
      <nav
        className={`header__wrap ${isMobile ? 'header__wrap_mobile' : ''} ${
          menuOpened ? 'header__wrap_mobile_opened' : ''
        }`}
      >
        <button
          className={`navigation__close-btn ${
            isMobile ? 'navigation__close-btn_enabled' : ''
          } `}
          type="button"
          onClick={handleMenuOpening}
        />
        <Link
          className={`navigation__link ${
            isMobile ? 'navigation__link_mobile' : 'navigation__link_disabled'
          } `}
          to="/"
          onClick={handleMenuOpening}
        >
          Главная
        </Link>
        <Link
          className={`navigation__link ${isMobile ? 'navigation__link_mobile' : ''} `}
          to="/movies"
          onClick={handleMenuOpening}
        >
          Фильмы
        </Link>
        <Link
          className={`navigation__link ${isMobile ? 'navigation__link_mobile' : ''} `}
          to="/saved-movies"
          onClick={handleMenuOpening}
        >
          Сохранённые фильмы
        </Link>
        <Link
          className={`navigation__link navigation__link-profile ${
            isMobile ? 'navigation__link_mobile' : ''
          } `}
          to="/profile"
          onClick={handleMenuOpening}
        >
          Аккаунт
          <div className="navigation__logo-account" />
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
