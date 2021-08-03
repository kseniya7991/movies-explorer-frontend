import React from "react";
import { Link } from "react-router-dom";

import "./Main.css";

function Main() {
  return (
    <div>
      <section className="Main__about-project">
        <h2>О проекте</h2>
        <hr />
        <div>
          <p>
            <h3>Дипломный проект включал 5 этапов</h3>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
          <p>
            <h3>На выполнение диплома ушло 5 недель</h3>У каждого этапа был
            мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
        <div className="Main__progress-bar"></div>
        <p className="progress-bar__caption"></p>
      </section>

      <section className="Main__techs ">
        <h2>Технологии</h2>
        <hr />
        <h3></h3>
        <p></p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>React</li>
          <li>Git</li>
          <li>Express.js</li>
          <li>mongoDB</li>
        </ul>
      </section>

      <section className="Main__about-me">
        <h2>Студент</h2>
        <hr />
        <div>
          <p></p>
          <p></p>
          <p></p>
          <img></img>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>

      <section className="Main__portfolio">
        <h3>Портфолио</h3>
        <hr />
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </div>
  );
}

export default Main;
