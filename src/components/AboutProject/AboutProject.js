import React, { useState, useEffect } from 'react';

import './AboutProject.css';
import '../Main/Main.css';

function AboutProject() {
  const [isInWindow, setIsInWindow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function showAnimation() {
    const fromTop = window.innerHeight + window.pageYOffset;
    if (isMobile && fromTop > 1250) {
      setIsInWindow(true);
    } else if (!isMobile && fromTop > 1050) {
      setIsInWindow(true);
    } else {
      setIsInWindow(false);
    }
  }

  /* Определение типа устройства */
  const handleWindowResize = () => {
    if (window.innerWidth > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    showAnimation();
    window.addEventListener('scroll', showAnimation);

    return () => {
      window.removeEventListener('scroll', showAnimation);
    };
  }, []);

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
      <div className={`aboutProject__progress-bar ${!isInWindow ? 'aboutProject__progress-bar_disabled' : ''}`}>
        <div className={`aboutProject__progress-bar progress-bar_backend ${isInWindow ? 'progress-bar_backend_active' : ''}`}>
          1 неделя
        </div>
        <div className={`aboutProject__progress-bar progress-bar_frontend ${isInWindow ? 'progress-bar_frontend_active' : ''}`}>
          4 недели
        </div>
      </div>
      <div className="aboutProject__progress-bar aboutProject__progress-bar_caption">
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
