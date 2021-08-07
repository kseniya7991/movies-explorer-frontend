import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

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
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
