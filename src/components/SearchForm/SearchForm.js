import React from 'react';
/* import { useForm } from 'react-hook-form'; */

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import '../SignForm/SignForm.css';
import './SearchForm.css';

function SearchForm() {
/*   const { register } = useForm(); */
  const errorMessage = '';
  const isValid = true;

  /*   const onSubmit = (data) => console.log(data); */
  const tester = () => console.log('smth');

  return (
<form className="searchForm" onSubmit={tester}>
      <div className="searchForm__search-block">
        <input
        name="searchField"
          id="searchField"
          className="searchForm__search"
          type="text"
          placeholder="Фильм"
        ></input>
        {errorMessage && !isValid && (
          <span className="searchForm__text-error">{errorMessage}</span>
        )}
        <div className="searchForm__find-block">
          <button
            type="submit"
            className="searchForm__find-btn"
            value="1"
          ></button>
        </div>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;

/* {errorMessage && !isValid && (
  <span className="error">{errorMessage}</span>
)} */

/*    <form className="searchForm" id="searchForm">
      <div className="searchForm__search-block">
        <input
        name="searchField"
          id="searchField"
          className="searchForm__search"
          type="text"
          placeholder="Фильм"
        ></input>
        {errorMessage && !isValid && (
          <span className="searchForm__text-error">{errorMessage}</span>
        )}
                  <button
            type="submit"
            className="searchForm__find-btn"
            value="1"
            form="searchForm"
          ></button>
        <div className="searchForm__find-block">
          <button
            type="submit"
            className="searchForm__find-btn"
            value="1"
            form="searchForm"
          ></button>
        </div>
      </div>
      <FilterCheckbox />
    </form>  */
