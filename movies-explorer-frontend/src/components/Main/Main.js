import React from 'react';

import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main() {
  return (
    <div>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      {/*  <section className="Main__portfolio">
        <h3>Портфолио</h3>
        <hr />
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section> */}
    </div>
  );
}

export default Main;
