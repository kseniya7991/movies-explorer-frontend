import React from 'react';

import './AboutMe.css';
import '../Main/Main.css';

import photo from '../../images/profile-photo.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="main__title">Студент</h2>
      <hr className="main__line" />
      <div className="aboutMe__resume">
        <p className="resume__name">Ксения</p>
        <p className="resume__profession">
          Junior фронтенд-разработчик, 24 года
        </p>
        <p className="resume__about">
          Я живу в городе Минске, Беларусь. Занимаюсь бегом около 6-ти лет.
          Люблю ультрамарафоны. Имею высшее образование в области маркетинга и
          2х-летний опыт работы в отделе маркетинга. Разработка - это моё
          хобби и немного больше, чем просто работа. Интересно будет попробовать
          работать в компании по разработке игр, потому что я тот еще геймер со стажем.
        </p>
        <img className="resume__image" src={photo} alt="Фото студента"></img>
        <ul className="resume__links">
          <li className="resume__links-item"><a className="resume__link" href="https://github.com/kseniya7991" rel="noreferrer" target="_blank">GitHub</a></li>
          <li className="resume__links-item"><a className="resume__link" href="https://www.linkedin.com/in/kseniya-stoychikova-907594201/" rel="noreferrer" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
