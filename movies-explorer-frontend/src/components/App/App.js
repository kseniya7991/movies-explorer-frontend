import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';

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
import HeaderAuth from '../Header/HeaderAuth/HeaderAuth';
import Preloader from '../Preloader/Preloader';

function App() {
  /* Временная переменная для тестирования шапки и роутов */
  const loggedIn = true;

  /* Отключить прелоадер */
  const [isLoading, setIsLoading] = useState(false);

  /* Временное отображение прелоадера */
  function handlePreloader() {
    setIsLoading(isLoading);
  }

  return (
    <div className="app" onClick={handlePreloader}>
      <Preloader isLoading={isLoading} />
      <Switch>
        <Route exact path={['/movies', '/saved-movies', '/profile']}>
          <Header isLogged={loggedIn} isPromo={false}>
            <ProtectedRoute
              exact
              path={['/movies', '/saved-movies', '/profile']}
              component={HeaderAuth}
              loggedIn={loggedIn}
            />
          </Header>
        </Route>
        <Route exact path={'/'}>
          <Header isLogged={loggedIn} isPromo={true}>
            <ProtectedRoute
              exact
              path={'/'}
              component={HeaderAuth}
              loggedIn={loggedIn}
            />
          </Header>
        </Route>
      </Switch>

      <Switch>
        <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} />
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
          <Register />
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
