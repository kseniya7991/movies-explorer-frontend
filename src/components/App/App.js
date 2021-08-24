import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';
import ProtectedRoute from '../ProtectedRoute';

import * as mainApi from '../../utils/MainApi';

// Импорт компонентов
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Navigation from '../Navigation/Navigation';
import InfoPopup from '../InfoPopup/InfoPopup';
import Preloader from '../Preloader/Preloader';
import HeaderUnauth from '../Header/HeaderUnauth/HeaderUnauth';

// Импорт контекста
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SavedMoviesContext from '../../contexts/SavedMoviesContext';

function App() {
  const [allSavedMovies, setAllSavedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  /* Отображение прелоадера */
  const [isLoading, setIsLoading] = useState(false);

  /* Переменная залогинености пользователя */
  const [loggedIn, setLoggedIn] = useState('false');

  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [statusRequest, setStatusRequest] = useState(false);
  const [message, setMessage] = useState('');

  function getData() {
    Promise.all([mainApi.getUser(), mainApi.getSavedMovies()])
      .then(([userData, moviesData]) => {
        setCurrentUser(userData.user);
        setAllSavedMovies(moviesData.movies);
        setSavedMovies(
          moviesData.movies.filter((movie) => {
            console.log(movie.owner, userData.user._id);
            return movie.owner === userData.user._id;
          }),
        );
      })
      .catch((err) => console.log(err));
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
      getData();
    }
  }

  /*   function filterAllSavedMovies() {
    setSavedMovies(
      allSavedMovies.filter((movie) => movie.owner === currentUser._id),
    );
  }
 */
  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn === true) {
      history.push('/movies');
    }
  }, [loggedIn]);

  function closeInfoPopup() {
    if (statusRequest) {
      setIsInfoPopupOpen(false);
      history.push('/signin');
    } else {
      setIsInfoPopupOpen(false);
    }
  }

  function handleErrors() {
    setMessage(
      'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
    );
    setIsInfoPopupOpen(true);
  }

  function handleSubmitLogin(values) {
    const { email, password } = values;
    setIsLoading(true);

    mainApi
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          getData();
          history.push('/movies');
        }
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => console.err(err));
  }

  function handleSubmitRegister(values) {
    const { name, email, password } = values;
    setIsLoading(true);

    mainApi
      .register(name, email, password)
      .then((res) => {
        if (res.message) {
          setMessage(res.message);
          setIsInfoPopupOpen(true);
        } else {
          setCurrentUser({ name, email });
          handleSubmitLogin({ email, password });
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        handleErrors();
        setIsLoading(false);
      });
  }

  function handleUpdateUser(values) {
    const { name, email } = values;
    setIsLoading(true);
    setMessage('');

    return mainApi
      .updateUser(name, email)
      .then((res) => {
        if (res.message) {
          setMessage(res.message);
          setStatusRequest(false);
        } else {
          setCurrentUser(res.user);
          setStatusRequest(true);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

  function deleteMovie(movieId) {
    mainApi.deleteMovie(movieId).then(() => {
      setSavedMovies(savedMovies.filter((el) => el._id !== movieId));
    });
  }

  function saveMovie(movie) {
    mainApi.saveMovie(movie).then((savedMovie) => {
      setSavedMovies([savedMovie.movie, ...savedMovies]);
    });
  }

  function handleSaveMovie(movie, isSaved) {
    console.log(movie);

    if (isSaved === true) {
      const movieId = savedMovies.find((el) => el.movieId === movie.id)._id;
      deleteMovie(movieId);
    } else {
      saveMovie(movie);
    }
  }

  console.log(setStatusRequest, setMessage);
  console.log(allSavedMovies, savedMovies);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedMoviesContext.Provider value={savedMovies}>
        <div className="app">
          <Preloader isLoading={isLoading} />
          <InfoPopup
            isOpen={isInfoPopupOpen}
            onClose={closeInfoPopup}
            status={statusRequest}
            message={message}
          />
          <Switch>
            <Route exact path={['/movies', '/saved-movies', '/profile']}>
              <Header isLogged={loggedIn} isPromo={false}>
                <ProtectedRoute
                  exact
                  path={['/movies', '/saved-movies', '/profile']}
                  component={Navigation}
                  loggedIn={loggedIn}
                />
              </Header>
            </Route>
            <Route exact path={'/'}>
              <Header isLogged={loggedIn} isPromo={true}>
                <Route exact path={'/'}>
                  {() => (loggedIn === true ? <Navigation /> : <HeaderUnauth />)
                  }
                </Route>
              </Header>
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/signup">
              <Register onRegister={handleSubmitRegister} />
            </Route>
            <Route exact path="/signin">
              <Login onLogin={handleSubmitLogin} />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>

            <ProtectedRoute
              exact
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              onShowError={handleErrors}
              onClickSave={handleSaveMovie}
            />
            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              onClickSave={handleSaveMovie}
            />
            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              onUpdateUser={handleUpdateUser}
              message={message}
              status={statusRequest}
            />
            <Route path="/*">
              <NotFoundPage />
            </Route>
          </Switch>

          <Route exact path={['/movies', '/saved-movies', '/']}>
            <Footer />
          </Route>
        </div>
      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
