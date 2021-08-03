import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <p>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <hr />
      <div>
        <p>@ 2021</p>
        <nav>
          <Link to="https://praktikum.yandex.ru/">Яндекс.Практикум</Link>
          <Link to="https://github.com/kseniya7991">GitHub</Link>
          <Link to="https://www.linkedin.com/in/kseniya-stoychikova-907594201/">
            LinkedIn
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
