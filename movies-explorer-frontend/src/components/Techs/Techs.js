import React from 'react';

import './Techs.css';
import '../Main/Main.css';

function Techs() {
  return (
    <section className="techs">
      <h2 className="main__title">Технологии</h2>
      <hr className="main__line"/>
      <p className="techs__subtitle">7 технологий</p>
      <p className="main__description description_techs">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <li className="techs__list-item">HTML</li>
        <li className="techs__list-item">CSS</li>
        <li className="techs__list-item">JS</li>
        <li className="techs__list-item"><span className="list-item__text-color">React</span></li>
        <li className="techs__list-item">Git</li>
        <li className="techs__list-item">Express.js</li>
        <li className="techs__list-item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
