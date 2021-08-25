import React, { useState } from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import '../SignForm/SignForm.css';
import './SearchForm.css';

import { useFormWithValidation } from '../ValidationForm/ValidationForm';

function SearchForm({ handleSearch, isRequired }) {
  /* Хук чекбокса "короткометражка" */
  const [checked, setChecked] = useState(false);
  /*   const [keys, setKeys] = useState(''); */

  console.log();
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      resetForm();
      handleSearch(values);
      console.log(values);
      /*  onSubmitForm(values); */
    }
  }

  /*  const onSubmit = (data) => {
    setKeys(data.searchField.toString().toLowerCase());
    handleSearch(data.searchField.toString().toLowerCase(), checked);
  };

  function handleCheckbox() {
    setChecked(!checked);
    onSubmit();
  } */

  function handleCheckbox() {
    setChecked(!checked);
  }

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <div className="searchForm__search-block">
        <input
          id="searchField"
          className="searchForm__search"
          type="text"
          placeholder="Фильм"
          onChange={handleChange}
          required={isRequired}
        ></input>
        {errors.searchField && <span className={'searchForm__text-error'}>
          {errors.searchField}
        </span>}

        <div className="searchForm__find-block">
          <button
            type="submit"
            className="searchForm__find-btn"
            value=""
          ></button>
        </div>
      </div>
      <FilterCheckbox onClick={handleCheckbox} isChecked={checked}/>
    </form>
  );
}

export default SearchForm;
