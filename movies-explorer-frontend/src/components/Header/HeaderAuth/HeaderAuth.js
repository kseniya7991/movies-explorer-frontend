import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './HeaderAuth.css';
import '../Header.css';
import Popup from '../../Popup/Popup';

function HeaderAuth() {
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

  // Скрываем/раскрываем меню при клике на кнопку закрытия или гамбургера
  function handleMenuOpening() {
    if (isMobile) {
      setMenuOpened(!menuOpened);
    }
  }

  return (
    <>
    <Popup popupOpened={menuOpened}/>
   <button className={`header__menu-btn ${isMobile ? 'header__menu-btn_enabled' : ''} `} type="button" onClick={handleMenuOpening}/>
      <nav className={`header__wrap ${isMobile ? 'header__wrap_mobile' : ''} ${menuOpened ? 'header__wrap_mobile_opened' : ''}`}>
        <button className={`header__close-btn ${isMobile ? 'header__close-btn_enabled' : ''} `} type="button" onClick={handleMenuOpening}/>
      <Link className={`header__link ${isMobile ? 'header__link_mobile' : 'header__link_disabled'} `} to="/" onClick={handleMenuOpening}>
          Главная
        </Link>
        <Link className={`header__link ${isMobile ? 'header__link_mobile' : ''} `} to="/movies" onClick={handleMenuOpening}>
          Фильмы
        </Link>
        <Link className={`header__link ${isMobile ? 'header__link_mobile' : ''} `} to="/saved-movies" onClick={handleMenuOpening}>
          Сохранённые фильмы
        </Link>
        <Link className={`header__link header__link-profile ${isMobile ? 'header__link_mobile' : ''} `} to="/profile" onClick={handleMenuOpening}>
          Аккаунт
          <div className="header__logo-account" />
        </Link>
      </nav>
</>
  );
}

export default HeaderAuth;
