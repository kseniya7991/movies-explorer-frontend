import React, { useState, useEffect } from 'react';

import './ButtonOnTop.css';

function ButtonOnTop() {
  const [isEnabled, setIsEnabled] = useState(false);

  function showButton() {
    if (window.pageYOffset > 600) {
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
  useEffect(() => {
    showButton();
    window.addEventListener('scroll', showButton);

    return () => {
      window.removeEventListener('scroll', showButton);
    };
  }, []);

  return (
    <button
    className={`buttonOnTop ${isEnabled ? 'buttonOnTop_active' : ''}`}
    onClick={handleOnTop}
    >
    </button>
  );
}

export default ButtonOnTop;
