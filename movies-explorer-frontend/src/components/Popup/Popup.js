import React from 'react';

import './Popup.css';

function Popup({ popupOpened }) {
  return (
<section className={`Popup ${popupOpened ? 'Popup_opened' : ''}`}>
</section>
  );
}

export default Popup;
