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
  const [selectedMovies, setSelectedMovies] = useState([]);

  /* Проверка наличия фильмов в выдаче */
  const [isListEmpty, setIsListEmpty] = useState(false);
  const [moviesBlockText, setMoviesBlockText] = useState('');
  const [slice, setSlice] = useState({ start: 0, end: 12 });

  /* Отображение прелоадера */
  const [isLoading, setIsLoading] = useState(false);

  function selectionFilms(movies) {
    return movies.slice(slice.start, slice.end);
  }

  /* Отрисовка блока выдачи/не выдачи фильмов */

  /* При поиске фильмов */
  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsListEmpty(true);
    } else {
      setIsListEmpty(false);

      setSelectedMovies(selectionFilms(filteredMovies, slice));
    }
    setMoviesBlockText('Мы ничего не нашли по вашему запросу');
  }, [filteredMovies]);

  function showMoreMovies() {
    setSlice({ start: 0, end: slice.end + 3 });
  }

  /* При нажатии на кнопку "ещё"  */
  useEffect(() => {
    setSelectedMovies(filteredMovies.slice(slice.start, slice.end));
  }, [slice]);

  /* При первой загрузке страницы */
  useEffect(() => {
    setMoviesBlockText('Введите запрос в строку поиска');
  }, []);

  /* Функция поиска фильмов: получение фильмов из API и фильтрация по условиям */
  function handleSearchMovies(keys, checkbox) {
    setIsLoading(!isLoading);
    return api
      .getMovies()
      .then((movies) => {
        /* const slice = { start: 0, end: 12 }; */
        setFilteredMovies(filterMovies(movies, keys, checkbox));
        /*  setSelectedMovies(selectionFilms(filteredMovies, slice)); */
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
      <SearchForm handleSearch={handleSearchMovies} />

      <MoviesCardList isEmpty={isListEmpty} movies={selectedMovies} />
      <MoreMoviesBtn isEmpty={isListEmpty} onMoreMovies={showMoreMovies} />

      {/* Отображаем компонент, если фильмы не найдены */}
      <EmptyMoviesList isEmpty={isListEmpty} text={moviesBlockText} />
    </>
  );
}

export default Movies;
