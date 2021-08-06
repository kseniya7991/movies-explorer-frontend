import React from 'react';

import './Portfolio.css';
import '../Main/Main.css';

function Portfolio() {
  return (
    <section className="Portfolio">
      <h3 className="Portfolio__title">Портфолио</h3>
      <ul className="Portfolio__list">
        <li className="Portfolio__list-item">Статичный сайт</li>
        <li className="Portfolio__list-item">Адаптивный сайт</li>
        <li className="Portfolio__list-item">Одностраничное приложение</li>
      </ul>
    </section>
  );
}

export default Portfolio;
