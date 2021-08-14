import React from 'react';
import Popup from '../Popup/Popup';

import './InfoPopup.css';

function InfoPopup({
  isOpen, onClose, status, message,
}) {
  return (
      <>
    <Popup popupOpened={isOpen} onClose={onClose} >
      <div className="infoPopup">
        <button
          type="reset"
          className="infoPopup__close-btn"
          aria-label="close"
          onClick={onClose}
        ></button>
        <div className={`${status ? 'infoPopup__success' : 'infoPopup__error'}`}></div>
        <p className="infoPopup__title popup__title_info">
          {status ? 'Вы успешно зарегистрировались!' : message}
        </p>
      </div>
      </Popup>
    </>
  );
}

export default InfoPopup;
