import React from 'react';
import './Portfolio.css';
import '../Main/Main.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <a
          className="portfolio__list-link"
          href="https://kseniya7991.github.io/how-to-learn/" target="_blank" rel="noreferrer"
        >
          <li className="portfolio__list-item">Статичный сайт</li>
        </a>
        <a
          className="portfolio__list-link"
          href="https://kseniya7991.github.io/russian-travel/index.html" target="_blank" rel="noreferrer"
        >
          <li className="portfolio__list-item">Адаптивный сайт</li>
        </a>
        <a
          className="portfolio__list-link"
          href="https://kst.mesto.nomoredomains.club/" target="_blank" rel="noreferrer"
        >
          <li className="portfolio__list-item">Одностраничное приложение</li>
        </a>
      </ul>
    </section>
  );
}

export default Portfolio;
