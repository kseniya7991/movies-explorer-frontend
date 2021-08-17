import React, { useEffect, useState } from 'react';

import api from '../../utils/MoviesApi';
import filterMovies from '../../utils/FilterMovies';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreMoviesBtn from '../MoreMoviesBtn/MoreMoviesBtn';
import Preloader from '../Preloader/Preloader';
import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList';

function Movies({ onShowError }) {
  /* Отфильтрованные по ключ. словам фильмы */
  const [filteredMovies, setFilteredMovies] = useState([]);

  /* Проверка наличия фильмов в выдаче */
  const [isListEmpty, setIsListEmpty] = useState(false);
  const [moviesBlockText, setMoviesBlockText] = useState('');

  /* Выдача фильмов */
  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsListEmpty(true);
    } else {
      setIsListEmpty(false);
    }
    setMoviesBlockText('Мы ничего не нашли по вашему запросу');
  }, [filteredMovies]);

  useEffect(() => {
    setMoviesBlockText('Введите запрос в строку поиска');
  }, []);

  /* Отображение прелоадера */
  const [isLoading, setIsLoading] = useState(false);

  function handleSearchMovies(keys, checkbox) {
    setIsLoading(!isLoading);
    return api
      .getMovies()
      .then((movies) => {
        setFilteredMovies(filterMovies(movies, keys, checkbox));
        console.log(filteredMovies);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        onShowError();
        setIsLoading(false);
      });
  }

  return (
    <>
      <Preloader isLoading={isLoading} />
      <SearchForm handleSearch={handleSearchMovies}/>

      <MoviesCardList isEmpty={isListEmpty} movies={filteredMovies}/>
      <MoreMoviesBtn isEmpty={isListEmpty} />

      {/* Отображаем компонент, если фильмы не найдены */}
     <EmptyMoviesList isEmpty={isListEmpty} text={moviesBlockText}/>
    </>
  );
}

export default Movies;
