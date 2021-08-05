import React from 'react';

import './Techs.css';
import '../Main/Main.css';

function Techs() {
  return (
    <section className="Techs">
      <h2 className="Main__title">Технологии</h2>
      <hr className="Main__line"/>
      <p className="Techs__subtitle">7 технологий</p>
      <p className="Main__description description_techs">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="Techs__list">
        <li className="Techs__list-item">HTML</li>
        <li className="Techs__list-item">CSS</li>
        <li className="Techs__list-item">JS</li>
        <li className="Techs__list-item"><span className="list-item__text-color">React</span></li>
        <li className="Techs__list-item">Git</li>
        <li className="Techs__list-item">Express.js</li>
        <li className="Techs__list-item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
