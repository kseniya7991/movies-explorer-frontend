import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import '../Main/Main.css';

function Portfolio() {
  return (
    <section className="Portfolio">
      <h3 className="Portfolio__title">Портфолио</h3>
      <ul className="Portfolio__list">
      <Link className="Portfolio__list-link" to="https://kseniya7991.github.io/how-to-learn/" ><li className="Portfolio__list-item">Статичный сайт</li></Link>
      <Link className="Portfolio__list-link" to="https://kseniya7991.github.io/russian-travel/index.html"><li className="Portfolio__list-item">Адаптивный сайт</li></Link>
      <Link className="Portfolio__list-link" to="https://kst.mesto.nomoredomains.club/"><li className="Portfolio__list-item">Одностраничное приложение</li></Link>
      </ul>
    </section>
  );
}

export default Portfolio;
