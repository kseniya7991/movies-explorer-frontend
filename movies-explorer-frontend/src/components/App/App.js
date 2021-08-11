import React, { useState } from 'react';
/* import { useHistory } from 'react-router'; */
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
/* import Popup from '../Popup/Popup'; */
import NotFoundPage from '../NotFoundPage/NotFoundPage';
/* import HeaderUnauth from '../Header/HeaderUnauth/HeaderUnauth'; */
import HeaderAuth from '../Header/HeaderAuth/HeaderAuth';
import Preloader from '../Preloader/Preloader';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  /* Отключить прелоадер */
  const [isLoading, setIsLoading] = useState(false);

  function handleLoggedIn() {
    setLoggedIn(!loggedIn);
  }

  /* Временное отображение прелоадера */
  function handlePreloader() {
    setIsLoading(isLoading);
  }

  console.log(handleLoggedIn);

  return (
    <div className="app" onClick={handlePreloader}>
      <Preloader isLoading={isLoading}/>
      <Switch>
        <Route exact path={['/movies', '/saved-movies', '/profile', '/']}>
          <Header isLogged={loggedIn}>
            <ProtectedRoute
                 exact
                 path={['/movies', '/saved-movies', '/profile', '/']}
                 component={HeaderAuth}
                 loggedIn={loggedIn}
               />

          </Header>
        </Route>
      </Switch>

      <Switch>
        <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} />
        <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} component={SavedMovies} />
        <Route exact path="/">
        <Main />
        </Route>
        <ProtectedRoute path="/profile" loggedIn={loggedIn} component={Profile} />
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

      {/* <Route path="/movies">
        <Movies />
     </Route>
     <Route path="/saved-movies">
        <SavedMovies />
     </Route>
     <Route path="/profile">
        <Profile />
     </Route>
     <Route path="/signin">
        <Login />
     </Route>
     <Route path="/signup">
        <Register />
     </Route>
     <Footer /> */}
    </div>
  );
}

export default App;
