import React from 'react';

import './AboutMe.css';
import '../Main/Main.css';

import photo from '../../images/profile-photo.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="AboutMe">
      <h2 className="Main__title">Студент</h2>
      <hr className="Main__line"/>
      <div className="AboutMe__resume">
        <p className="resume__name">Ксения</p>
        <p className="resume__profession">Junior фронтенд-разработчик, 24 года</p>
        <p className="resume__about">Я живу в городе Минске, Беларусь.
        Занимаюсь бегом уже около 6-ти лет. Люблю ультрамарафоны.
        У меня высшее образование в области маркетинга и 2х-летний опыт
        работы в интернет-маркетинге.
        Разработка - это моё большое хобби.
        Хочу попробовать работу в компании по разработке игр, потому что я геймер со стажем.
        И еще планирую попробовать фриланс.</p>
        <img className="resume__image" src={photo}></img>
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
