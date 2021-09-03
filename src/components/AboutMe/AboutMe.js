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
          <li className="resume__links-item">GitHub</li>
          <li className="resume__links-item">LinkedIn</li>
        </ul>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
