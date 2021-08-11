import React from 'react';
import promo from '../../images/promo.svg';

import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб&#8209;разработки.
      </h1>
      <img
        src={promo}
        alt="Спираль"
        title="Спираль"
        className="promo__img"
      ></img>
    </section>
  );
}

export default Promo;
