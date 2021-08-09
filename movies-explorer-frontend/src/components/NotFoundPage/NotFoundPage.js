import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.css';

function NotFoundPage() {
  return <section className="NotFoundPage">
      <p className="NotFoundPage__error">404</p>
      <p className="NotFoundPage__text">Страница не найдена</p>
      <Link to="/" className="NotFoundPage__previous-link">Назад</Link>
  </section>;
}

export default NotFoundPage;
