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
        ></input>
        <div className="searchForm__find-block">
          <input
            type="submit"
            className="searchForm__find-btn"
            value=""
          ></input>
        </div>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
