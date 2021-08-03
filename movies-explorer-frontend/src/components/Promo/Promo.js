import React from "react";
import { Link } from "react-router-dom";
import promo from "../../images/promo.svg";

import "./Promo.css";

function Promo() {
  return (
    <section className="Promo">
      <h1 className="Promo__title">
        Учебный проект студента факультета Веб&#8209;разработки.
      </h1>
      <img
        src={promo}
        alt="Спираль"
        title="Спираль"
        className="Promo__img"
      ></img>
    </section>
  );
}

export default Promo;
