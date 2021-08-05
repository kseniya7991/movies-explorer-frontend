import React from 'react';

import './AboutProject.css';
import '../Main/Main.css';

function AboutProject() {
  return (
    <section className="AboutProject">
      <h2 className="Main__title">О проекте</h2>
      <hr className="Main__line" />
      <div className="AboutProject__text-block">
          <p className="AboutProject__subtitle subtitle_one">Дипломный проект включал 5 этапов</p>
          <p className="Main__description description_one">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>

          <p className="AboutProject__subtitle subtitle_two">На выполнение диплома ушло 5 недель</p>
          <p className="Main__description description_two">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.</p>

      </div>
      <div className="AboutProject__progress-bar">
        <div className="AboutProject__progress-bar progress-bar_backend">1 неделя</div>
        <div className="AboutProject__progress-bar progress-bar_frontend">4 недели</div>
      </div>
      <div className="AboutProject__progress-bar">
        <div className="AboutProject__progress-bar progress-bar_backend progress-bar_caption">Backend</div>
        <div className="AboutProject__progress-bar progress-bar_frontend progress-bar_caption">Frontend</div>
      </div>
    </section>
  );
}

export default AboutProject;
