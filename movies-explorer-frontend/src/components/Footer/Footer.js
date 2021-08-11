import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import '../Main/Main.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <hr className="main__line main__line_footer"/>
      <div className="footer__wrap-block">
        <p className="footer__year">&copy;2021</p>
        <nav className="footer__nav">
          <Link className="footer__nav-item" to="https://praktikum.yandex.ru/">Яндекс.Практикум</Link>
          <Link className="footer__nav-item" to="https://github.com/kseniya7991">GitHub</Link>
          <Link className="footer__nav-item" to="https://www.linkedin.com/in/kseniya-stoychikova-907594201/">
            LinkedIn
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
