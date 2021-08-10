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
   <button className={`Header__menu-btn ${isMobile ? 'Header__menu-btn_enabled' : ''} `} type="button" onClick={handleMenuOpening}/>
      <nav className={`Header__wrap ${isMobile ? 'Header__wrap_mobile' : ''} ${menuOpened ? 'Header__wrap_mobile_opened' : ''}`}>
        <button className={`Header__close-btn ${isMobile ? 'Header__close-btn_enabled' : ''} `} type="button" onClick={handleMenuOpening}/>
      <Link className={`Header__link ${isMobile ? 'Header__link_mobile' : 'Header__link_disabled'} `} to="/" onClick={handleMenuOpening}>
          Главная
        </Link>
        <Link className={`Header__link ${isMobile ? 'Header__link_mobile' : ''} `} to="/movies" onClick={handleMenuOpening}>
          Фильмы
        </Link>
        <Link className={`Header__link ${isMobile ? 'Header__link_mobile' : ''} `} to="/saved-movies" onClick={handleMenuOpening}>
          Сохранённые фильмы
        </Link>
        <Link className={`Header__link Header__link-profile ${isMobile ? 'Header__link_mobile' : ''} `} to="/profile" onClick={handleMenuOpening}>
          Аккаунт
          <div className="Header__logo-account" />
        </Link>
      </nav>
</>
  );
}

export default HeaderAuth;
