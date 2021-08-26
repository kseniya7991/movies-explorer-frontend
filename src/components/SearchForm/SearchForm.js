import React, { useState } from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import '../SignForm/SignForm.css';
import './SearchForm.css';

import { useFormWithValidation } from '../ValidationForm/ValidationForm';

function SearchForm({
  handleSearch, isRequired, isCardsDisplaying, previousKey,
}) {
  /* Хук чекбокса "короткометражка" */
  const [checked, setChecked] = useState(false);
  const [inputPrevious, setInputPrevious] = useState(previousKey);

  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      handleSearch(values.searchField.toLowerCase(), checked);
    }
  }

  function handleCheckbox() {
    setChecked(!checked);
    console.log(previousKey, isCardsDisplaying, isValid);
    if (previousKey && isCardsDisplaying && isValid) {
      handleSearch(previousKey.toLowerCase(), !checked);
    }
  }

  function handleInput(e) {
    setInputPrevious(e.target.value);
    handleChange(e);
  }

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <div className="searchForm__search-block">
        <input
          name="searchField"
          className="searchForm__search"
          type="text"
          placeholder="Фильм"
          onChange={handleInput}
          required={isRequired}
          value={inputPrevious || ''}
          disabled={false}
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
