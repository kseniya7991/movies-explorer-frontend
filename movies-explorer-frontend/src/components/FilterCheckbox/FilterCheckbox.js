import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__switch">
        <input className="filterCheckbox__checkbox" type="checkbox"></input>
        <span className="filterCheckbox__slider"></span>
      </label>
      <span className="filterCheckbox__switch-description">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
