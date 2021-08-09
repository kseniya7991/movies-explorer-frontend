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
/* import Profile from '../Profile/Profile'; */
import Register from '../Register/Register';
import InfoPopup from '../InfoPopup/InfoPopup';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import HeaderUnauth from '../Header/HeaderUnauth/HeaderUnauth';
import HeaderAuth from '../Header/HeaderAuth/HeaderAuth';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  /*   const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      history.push('/');
    }
  }, [history, loggedIn]); */

  function handleLoggedIn() {
    setLoggedIn(!loggedIn);
  }

  console.log(handleLoggedIn);

  return (
    <div className="App">
      <InfoPopup />

      <Switch>
        <Route exact path={['/movies', '/saved-movies', '/profile', '/']}>
          <Header isLogged={loggedIn}>
            <ProtectedRoute exact path="/" component={HeaderUnauth} loggedIn={loggedIn} name="unauth"/>
           <ProtectedRoute
              exact
              path={['/movies', '/saved-movies', '/profile']}
              component={HeaderAuth}
              loggedIn={loggedIn}
            />

          </Header>
        </Route>
      </Switch>

      <Switch>
        <Route path="/movies">
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile />
        </Route>
      </Switch>

      <Switch>
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
