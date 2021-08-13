import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm() {
  return (
    <form className="searchForm">
      <div className="searchForm__search-block">
        <input
          className="searchForm__search"
          type="search"
          placeholder="Фильм"
          required
        ></input>
        <span className="searchForm__text-error">Что-то пошло не так..</span>
        <div className="searchForm__find-block">
          <button
            type="submit"
            className="searchForm__find-btn"
            value=""
          ></button>
        </div>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
