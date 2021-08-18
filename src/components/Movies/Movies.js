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

  /* Управление количеством выводимых фильмов в зависимости от ширины экрана */
  const [slice, setSlice] = useState({ start: 0, end: 12 });
  const [numberAddedMovies, setNumberAddedMovies] = useState(3);

  /* Отображение кнопки *Ещё* в зависимости полной подгрузки фильмов */
  const [isEnabledBtn, setIsEnabledBtn] = useState(true);

  /* Отображение прелоадера */
  const [isLoading, setIsLoading] = useState(false);

  /* Определяем количество фильмов для рендеринга в зависимости от ширины экрана */
  const handleWindowSize = () => {
    if (window.innerWidth > 1100) {
      setSlice({ start: 0, end: 12 });
      setNumberAddedMovies(3);
    } else if (window.innerWidth > 700 && window.innerWidth <= 1100) {
      setSlice({ start: 0, end: 8 });
      setNumberAddedMovies(2);
    } else if (window.innerWidth <= 700) {
      setSlice({ start: 0, end: 5 });
    }
  };

  /* Управление количеством карточек фильмов для рендеринга */
  const selectionFilms = (movies) => movies.slice(slice.start, slice.end);

  /* Добавление карточек фильмов для рендеринга при нажатии на кнопку *Еще* */
  const showMoreMovies = () => {
    setSlice({ start: 0, end: slice.end + numberAddedMovies });
  };

  useEffect(() => {
    handleWindowSize();
    window.addEventListener('resize', handleWindowSize);
    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);

  // Отрисовка блока выдачи/не выдачи фильмов
  /* При поиске фильмов */
  useEffect(() => {
    handleWindowSize();

    if (filteredMovies.length === 0) {
      setIsListEmpty(true);
    } else {
      setIsListEmpty(false);
      setSelectedMovies(selectionFilms(filteredMovies, slice));
    }
    setMoviesBlockText('Мы ничего не нашли по вашему запросу');
  }, [filteredMovies]);

  useEffect(() => {
    if (selectedMovies.length === filteredMovies.length) {
      console.log('все');
      setIsEnabledBtn(false);
    } else {
      setIsEnabledBtn(true);
    }
    console.log(selectedMovies.length, filteredMovies.length);
  }, [selectedMovies]);

  /* При нажатии на кнопку "ещё"  */
  useEffect(() => {
    setSelectedMovies(filteredMovies.slice(slice.start, slice.end));
  }, [slice]);

  /* При первой загрузке страницы */
  useEffect(() => {
    setMoviesBlockText('Введите запрос в строку поиска');
  }, []);

  // Запросы к API
  /* Функция поиска фильмов: получение фильмов из API и фильтрация по условиям */
  const handleSearchMovies = (keys, checkbox) => {
    setIsLoading(!isLoading);
    return api
      .getMovies()
      .then((movies) => {
        setFilteredMovies(filterMovies(movies, keys, checkbox));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        onShowError();
        setIsLoading(false);
      });
  };

  return (
    <>
      <Preloader isLoading={isLoading} />
      <SearchForm handleSearch={handleSearchMovies} />

      <MoviesCardList isEmpty={isListEmpty} movies={selectedMovies} />
      <MoreMoviesBtn
        isEmpty={isListEmpty}
        onMoreMovies={showMoreMovies}
        isEnabledBtn={isEnabledBtn}
      />

      {/* Отображаем компонент, если фильмы не найдены */}
      <EmptyMoviesList isEmpty={isListEmpty} text={moviesBlockText} />
    </>
  );
}

export default Movies;
