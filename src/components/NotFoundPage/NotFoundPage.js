import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import './NotFoundPage.css';

function NotFoundPage() {
  const history = useHistory();
  console.log(history.goBack());

  return (
    <section className="notFoundPage">
      <p className="notFoundPage__error">404</p>
      <p className="notFoundPage__text">Страница не найдена</p>
      <Link to="" className="notFoundPage__previous-link">
        Назад
      </Link>
    </section>
  );
}

export default NotFoundPage;
