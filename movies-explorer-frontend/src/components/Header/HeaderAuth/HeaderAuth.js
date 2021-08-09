import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderAuth.css';

function HeaderAuth() {
/*   if (!isLogged) {
    return null;
  } */
  return (
      <div className="Header__sign-wrap">
        <Link className="Header__signup" to="signup">
          Регистрацияsds
        </Link>
        <Link to="signin" className="Header__signin">
          Войти
        </Link>
      </div>

  );
}

export default HeaderAuth;
