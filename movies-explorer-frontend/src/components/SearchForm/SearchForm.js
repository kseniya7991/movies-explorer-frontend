import React from 'react';

import './SearchForm.css';

function SearchForm() {
  return (
    <form className="SearchForm">
      <div className="SearchForm__search-block">
        <input
          className="SearchForm__search"
          type="search"
          placeholder="Фильм"
        ></input>
        <div className="SearchForm__find-block">
          <input
            type="submit"
            className="SearchForm__find-btn"
            value=""
          ></input>
        </div>
      </div>

      <div className="SerchForm__switch-wrap">
        <label className="SearchForm__switch-block">
          <input className="SearchForm__checkbox" type="checkbox"></input>
          <span className="SearchForm__slider"></span>
        </label>
        <span className="SearchForm__switch-description">Короткометражки</span>
      </div>
      {/*
      <div className="SearchForm__short-block">
      <inpit className="SearchForm__short-checkbox" type="checkbox"></inpit>
      <p className="SearchForm__short-description"></p>
      </div> */}
    </form>
  );
}

export default SearchForm;
