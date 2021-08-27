import React, { useState } from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import '../SignForm/SignForm.css';
import './SearchForm.css';

import { useFormWithValidation } from '../ValidationForm/ValidationForm';

function SearchForm({
  handleSearch,
  isRequired,
  isCardsDisplaying,
  previousKey,
}) {
  /* Хук чекбокса "короткометражка" */
  const [checked, setChecked] = useState(false);
  const [inputPrevious, setInputPrevious] = useState(previousKey);
  const [keys, setKeys] = useState('');

  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    if (values.searchField && isValid) {
      setKeys(values.searchField.toLowerCase());
      handleSearch(values.searchField.toLowerCase(), checked);
    } else if (previousKey) {
      handleSearch(previousKey, checked);
    } else if (isValid) {
      handleSearch(keys, checked);
    }
  }

  function handleCheckbox() {
    setChecked(!checked);
    if (previousKey && isCardsDisplaying) {
      handleSearch(previousKey.toLowerCase(), !checked);
    } else if (previousKey) {
      handleSearch(previousKey, !checked);
    } else {
      handleSearch(keys, !checked);
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
        {errors.searchField && (
          <span className={'searchForm__text-error'}>{errors.searchField}</span>
        )}

        <div className="searchForm__find-block">
          <button
            type="submit"
            className="searchForm__find-btn"
            value=""
          ></button>
        </div>
      </div>
      <FilterCheckbox
        onClick={handleCheckbox}
        isChecked={checked}
      />
    </form>
  );
}

export default SearchForm;
