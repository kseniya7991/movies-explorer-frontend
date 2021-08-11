import React from 'react';

import './Popup.css';

function Popup({ popupOpened }) {
  return (
<section className={`popup ${popupOpened ? 'popup_opened' : ''}`}>
</section>
  );
}

export default Popup;
