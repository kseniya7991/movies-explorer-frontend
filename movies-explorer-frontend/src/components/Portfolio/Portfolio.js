import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import '../Main/Main.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
      <Link className="portfolio__list-link" to="https://kseniya7991.github.io/how-to-learn/" ><li className="portfolio__list-item">Статичный сайт</li></Link>
      <Link className="portfolio__list-link" to="https://kseniya7991.github.io/russian-travel/index.html"><li className="portfolio__list-item">Адаптивный сайт</li></Link>
      <Link className="portfolio__list-link" to="https://kst.mesto.nomoredomains.club/"><li className="portfolio__list-item">Одностраничное приложение</li></Link>
      </ul>
    </section>
  );
}

export default Portfolio;
