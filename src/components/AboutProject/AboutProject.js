import React, { useEffect } from 'react';

import './AboutProject.css';
import '../Main/Main.css';

function AboutProject() {
/*   const [isInWindow, setIsInWindow] = useState(false); */

  function showAnimation() {
    console.log(window.pageYOffset);
    /*     if (window.scrollTop > 1422) {
      setIsInWindow(true);
    } else {
      setIsInWindow(false);
    } */
  }

  useEffect(() => {
    showAnimation();
    window.addEventListener('scroll', showAnimation);

    return () => {
      window.removeEventListener('scroll', showAnimation);
    };
  }, []);

  function tester(e) {
    console.log(e.pageY, e.pageYOffset);
  }

  return (
    <section className="aboutProject">
      <h2 className="main__title">О проекте</h2>
      <hr className="main__line" />
      <div className="aboutProject__text-block">
        <p className="aboutProject__subtitle subtitle_one">
          Дипломный проект включал 5 этапов
        </p>
        <p className="main__description description_one">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>

        <p className="aboutProject__subtitle subtitle_two">
          На выполнение диплома ушло 5 недель
        </p>
        <p className="main__description description_two">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className={'aboutProject__progress-bar}'} onClick={tester}>
        <div className="aboutProject__progress-bar progress-bar_backend">
          1 неделя
        </div>
        <div className="aboutProject__progress-bar progress-bar_frontend">
          4 недели
        </div>
      </div>
      <div className="aboutProject__progress-bar">
        <div className="aboutProject__progress-bar progress-bar_backend progress-bar_caption">
          Backend
        </div>
        <div className="aboutProject__progress-bar progress-bar_frontend progress-bar_caption">
          Frontend
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
