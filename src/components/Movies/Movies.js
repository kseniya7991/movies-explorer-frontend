import React, { useEffect, useState } from 'react';

import api from '../../utils/MoviesApi';
import filterMovies from '../../utils/FilterMovies';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreMoviesBtn from '../MoreMoviesBtn/MoreMoviesBtn';
import Preloader from '../Preloader/Preloader';
import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList';

function Movies({ onShowError, onClickSave }) {
  const [allMovies, setAllMovies] = useState([]);

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

  // Отрисовка блока выдачи/не выдачи фильмов
  useEffect(() => {
    handleWindowSize();

    const filtered = JSON.parse(localStorage.getItem('filtered-movies'));

    if (filteredMovies.length !== 0) {
      setIsListEmpty(false);
      setSelectedMovies(selectionFilms(filteredMovies, slice));
      console.log(filteredMovies);
      localStorage.setItem('filtered-movies', JSON.stringify(filteredMovies));
    } else if (filtered && filtered.length !== 0) {
      setIsListEmpty(false);
      setSelectedMovies(selectionFilms(filtered, slice));
    } else {
      setIsListEmpty(true);
      setMoviesBlockText('Мы ничего не нашли по вашему запросу');
    }
  }, [filteredMovies]);

  /* При первой загрузке страницы */
  useEffect(() => {
    console.log('first');
    const filtered = JSON.parse(localStorage.getItem('filtered-movies'));
    if (filtered && filtered.length !== 0) {
      console.log('set selected');
      setIsListEmpty(false);
      setSelectedMovies(selectionFilms(filtered, slice));
    } else {
      setIsListEmpty(true);
      console.log('empty');
      setMoviesBlockText('Введите запрос в строку поиска');
    }
  }, []);

  console.log(isListEmpty);

  /* При поиске фильмов */

  useEffect(() => {
    if (selectedMovies.length === filteredMovies.length) {
      setIsEnabledBtn(false);
    } else {
      setIsEnabledBtn(true);
    }
  }, [selectedMovies]);

  /* При нажатии на кнопку "ещё"  */
  useEffect(() => {
    setSelectedMovies(filteredMovies.slice(slice.start, slice.end));
  }, [slice]);

  // Запрос к API
  /* Функция поиска фильмов: получение фильмов из API и фильтрация по условиям */
  const getAllMovies = (keys, checkbox) => api
    .getMovies()
    .then((movies) => {
      setAllMovies(movies);
      setFilteredMovies(filterMovies(movies, keys, checkbox));
      setIsLoading(false);
    })
    .catch((err) => {
      onShowError(err.status);
      setIsLoading(false);
    });

  const handleSearchMovies = (keys, checkbox) => {
    setIsLoading(true);
    const arrayMovies = JSON.parse(localStorage.getItem('movies'));

    if (!arrayMovies && allMovies.length === 0) {
      getAllMovies(keys, checkbox);
    }
    if (allMovies.length !== 0) {
      setFilteredMovies(filterMovies(allMovies, keys, checkbox));
      setIsLoading(false);
    } else {
      setFilteredMovies(filterMovies(arrayMovies, keys, checkbox));
      setIsLoading(false);
    }
    return null;
  };

  return (
    <>
      <Preloader isLoading={isLoading} />
      <SearchForm handleSearch={handleSearchMovies} isRequired={true} />

      <MoviesCardList
        isEmpty={isListEmpty}
        isSavedMovies={false}
        movies={selectedMovies}
        onClickSave={onClickSave}
      />
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
