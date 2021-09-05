import React from 'react';
import { withRouter } from 'react-router-dom';

import './NotFoundPage.css';

function NotFoundPage({ onBack }) {
  return (
    <section className="notFoundPage">
      <p className="notFoundPage__error">404</p>
      <p className="notFoundPage__text">Страница не найдена</p>
      <button onClick={onBack} className="notFoundPage__previous-link">
        Назад
      </button>
    </section>
  );
}

export default withRouter(NotFoundPage);
