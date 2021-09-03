import React from 'react';

import './Techs.css';
import '../Main/Main.css';

function Techs() {
  return (
    <section className="techs">
      <h2 className="main__title">Технологии</h2>
      <hr className="main__line" />
      <p className="techs__subtitle">7 технологий</p>
      <p className="main__description description_techs">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__list-item techs__list-item_html">
          <span className="list-item__text">HTML</span>
        </li>
        <li className="techs__list-item techs__list-item_css">
          <span className="list-item__text">CSS</span>
        </li>
        <li className="techs__list-item techs__list-item_js">
          <span className="list-item__text">JS</span>
        </li>
        <li className="techs__list-item techs__list-item_react">
          <span className="list-item__text">React</span>
        </li>
        <li className="techs__list-item techs__list-item_git">
          <span className="list-item__text">Git</span>
        </li>
        <li className="techs__list-item techs__list-item_express">
          <span className="list-item__text">Express.js</span>
        </li>
        <li className="techs__list-item techs__list-item_mongo">
          <span className="list-item__text">mongoDB</span>
        </li>
      </ul>
      <div id="page"></div>
    </section>
  );
}

export default Techs;
