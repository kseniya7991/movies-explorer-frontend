import React from 'react';

import './NotFoundPage.css';

function NotFoundPage({ history }) {
  return (
    <section className="notFoundPage">
      <p className="notFoundPage__error">404</p>
      <p className="notFoundPage__text">Страница не найдена</p>
      <button onClick={() => history.goBack()} className="notFoundPage__previous-link">
        Назад
      </button>
    </section>
  );
}

export default NotFoundPage;
