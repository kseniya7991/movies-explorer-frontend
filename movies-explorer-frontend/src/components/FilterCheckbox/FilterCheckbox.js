import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="FilterCheckbox">
      <label className="FilterCheckbox__switch">
        <input className="FilterCheckbox__checkbox" type="checkbox"></input>
        <span className="FilterCheckbox__slider"></span>
      </label>
      <span className="FilterCheckbox__switch-description">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
