import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';
import ProtectedRoute from '../ProtectedRoute';

import * as auth from '../../utils/MainApi';

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

function App() {
  /* Отображение прелоадера */
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  /* Временная переменная для тестирования шапки и роутов */
  const loggedIn = true;

  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [statusInfoPopup, setStatusInfoPopup] = useState(false);
  const [message, setMessage] = useState('');

  function closeInfoPopup() {
    if (statusInfoPopup) {
      setIsInfoPopupOpen(false);
      history.push('/sign-in');
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

  function handleSubmitRegister(values) {
    const { name, email, password } = values;
    console.log(values);
    setIsLoading(true);

    auth
      .register(name, email, password)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        handleErrors();
        setIsLoading(false);
      });
  }

  console.log(setStatusInfoPopup, setMessage);

  return (
    <div className="app">
      <Preloader isLoading={isLoading} />
      <InfoPopup
        isOpen={isInfoPopupOpen}
        onClose={closeInfoPopup}
        status={statusInfoPopup}
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
            <ProtectedRoute
              exact
              path={'/'}
              component={Navigation}
              loggedIn={loggedIn}
            />
          </Header>
        </Route>
      </Switch>

      <Switch>
        <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          onShowError={handleErrors}
        />
        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
        />
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
        />
        <Route path="/signup">
          <Register loggedIn={loggedIn} onRegister={handleSubmitRegister}/>
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/*">
          <NotFoundPage />
        </Route>
      </Switch>

      <Route exact path={['/movies', '/saved-movies', '/']}>
        <Footer />
      </Route>
    </div>
  );
}

export default App;
