import React from 'react';
import { useForm } from 'react-hook-form';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import api from '../../utils/MoviesApi';

import '../SignForm/SignForm.css';
import './SearchForm.css';

function SearchForm() {
  function handleSearchMovies() {
    return api
      .getMovies()
      .then((movies) => console.log(movies))
      .catch((err) => console.log(err));
  }

  /* Хуки для валидации формы */
  const { register, formState: { errors }, handleSubmit } = useForm();
  const errorMessage = 'Нужно ввести ключевое слово';

  const onSubmit = () => handleSearchMovies();

  return (
    <form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="searchForm__search-block">
        <input
          {...register('searchField', { required: true })}
          id="searchField"
          className="searchForm__search"
          type="text"
          placeholder="Фильм"
        ></input>
        {errors.searchField?.type === 'required' && <span className={'searchForm__text-error'}>
          {errorMessage}
        </span>}

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
