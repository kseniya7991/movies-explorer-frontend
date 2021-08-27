import React, { useEffect, useState } from 'react';

import api from '../../utils/MoviesApi';
import filterMovies from '../../utils/FilterMovies';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreMoviesBtn from '../MoreMoviesBtn/MoreMoviesBtn';
import Preloader from '../Preloader/Preloader';
import EmptyMoviesList from '../EmptyMoviesList/EmptyMoviesList';

function Movies({ onShowError, onClickSave, savedMovies }) {
  const [previousKey, setPreviousKey] = useState('');
  /*  const dataForSearch = JSON.parse(localStorage.getItem('data-for-search')); */
  /*   const previousKey = dataForSearch.keys || ''; */
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

  /* Проверка отображены ли карточки */
  const [isCardsDisplaying, setIsCardsDisplaying] = useState(false);

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

  /* Поиск по ключевым словам */
  const handleSearchMovies = (keys, checkbox) => {
    const data = { keys, checkbox };
    localStorage.setItem('data-for-search', JSON.stringify(data));
    setIsLoading(true);
    const arrayMovies = JSON.parse(localStorage.getItem('movies'));

    if (!arrayMovies && allMovies.length === 0) {
      getAllMovies(keys, checkbox);
    } else {
      setFilteredMovies(filterMovies(arrayMovies, keys, checkbox));
      setIsLoading(false);
    }
    return null;
  };

  /* Управление количеством карточек фильмов для рендеринга */
  const selectionFilms = (movies) => movies.slice(slice.start, slice.end);

  /* Добавление карточек фильмов для рендеринга при нажатии на кнопку *Еще* */
  const showMoreMovies = () => {
    setSlice({ start: 0, end: slice.end + numberAddedMovies });
  };

  // Определение данных прошлого поиска фильмов
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('data-for-search')));
  }, []);

  // Отрисовка блока выдачи/не выдачи фильмов

  /* При нажатии на кнопку "ещё"  */
  useEffect(() => {
    if (filteredMovies.length !== 0) {
      setSelectedMovies(filteredMovies.slice(slice.start, slice.end));
    }
  }, [slice]);

  /* При поиске фильмов */
  useEffect(() => {
    handleWindowSize();

    if (filteredMovies.length !== 0) {
      setIsListEmpty(false);
      setSelectedMovies(selectionFilms(filteredMovies, slice));
      setIsCardsDisplaying(true);
    } else {
      setIsListEmpty(true);
      setMoviesBlockText('Мы ничего не нашли по вашему запросу');
    }
  }, [filteredMovies]);

  useEffect(() => {
    if (selectedMovies.length === filteredMovies.length) {
      setIsEnabledBtn(false);
    } else {
      setIsEnabledBtn(true);
    }
  }, [selectedMovies]);

  /* При первой загрузке страницы */
  useEffect(() => {
    const searchData = JSON.parse(localStorage.getItem('data-for-search'));
    if (searchData) {
      setPreviousKey(searchData.keys);
    }

    handleWindowSize();
    if (searchData && Object.keys(searchData).length !== 0) {
      const { keys, checkbox } = searchData;
      setIsListEmpty(false);
      handleSearchMovies(keys, checkbox);
    } else {
      setIsListEmpty(true);
      setMoviesBlockText('Введите запрос в строку поиска');
      setIsCardsDisplaying(false);
    }
  }, []);

  console.log(previousKey);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <SearchForm
        handleSearch={handleSearchMovies}
        isRequired={true}
        isCardsDisplaying={isCardsDisplaying}
        previousKey={previousKey}
      />

      <MoviesCardList
        isEmpty={isListEmpty}
        isSavedMovies={false}
        movies={selectedMovies}
        onClickSave={onClickSave}
        savedMovies={savedMovies}
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
