import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// Импорт компонентов
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
/* import Profile from "../Profile";
import SavedMovies from "../SavedMovies"; */
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import InfoPopup from '../InfoPopup/InfoPopup';

function App() {
/*   const [loggedIn, setLoggedIn] = useState(true);

  function handleLoggedIn() {
    setLoggedIn(!loggedIn);
  }

  console.log(handleLoggedIn); */

  return (
    <div>
       <InfoPopup />

      <Switch>
        <Route path="/movies">
        <Header />
          <Movies />
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
