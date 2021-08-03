import React from "react";
import { Link } from "react-router-dom";

import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="AboutProject">
      <h2>О проекте</h2>
      <hr />
      <div>
        <p>
          <h3>Дипломный проект включал 5 этапов</h3>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p>
          <h3>На выполнение диплома ушло 5 недель</h3>У каждого этапа был мягкий
          и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
          защититься.
        </p>
      </div>
      <div className="AboutProject__progress-bar"></div>
      <p className="progress-bar__caption"></p>
    </section>
  );
}

export default AboutProject;
