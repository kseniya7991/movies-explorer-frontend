import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import '../Main/Main.css';

function Footer() {
  return (
    <footer className="Footer">
      <p className="Footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <hr className="Main__line Main__line_footer"/>
      <div className="Footer__wrap-block">
        <p className="Footer__year">&copy;2021</p>
        <nav className="Footer__nav">
          <Link className="Footer__nav-item" to="https://praktikum.yandex.ru/">Яндекс.Практикум</Link>
          <Link className="Footer__nav-item" to="https://github.com/kseniya7991">GitHub</Link>
          <Link className="Footer__nav-item" to="https://www.linkedin.com/in/kseniya-stoychikova-907594201/">
            LinkedIn
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
