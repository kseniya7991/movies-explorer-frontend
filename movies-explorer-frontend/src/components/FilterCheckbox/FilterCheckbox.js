import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filterCheckbox">
      <div className="filterCheckbox__switch">
        <input className="filterCheckbox__checkbox" type="checkbox"></input>
        <span className="filterCheckbox__slider"></span>
      </div>
      <label className="filterCheckbox__switch-description">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
