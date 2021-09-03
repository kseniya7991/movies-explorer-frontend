import React, { useState } from 'react';

import './ButtonOnTop.css';

function ButtonOnTop() {
  const [isEnabled, setIsEnabled] = useState(false);

  function showButton() {
    if (window.pageYOffset > 100) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }
  //
  function handleOnTop() {
    window.scrollTo(0, 0);
    setIsEnabled(false);
  }

  // When scrolling, we run the function
  window.onscroll = showButton;

  return (
    <button
    className={`buttonOnTop ${isEnabled ? 'buttonOnTop_active' : ''}`}
    onClick={handleOnTop}
    >
    </button>
  );
}

export default ButtonOnTop;
