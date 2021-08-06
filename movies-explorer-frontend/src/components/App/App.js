import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// Импорт компонентов
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
/* import SavedMovies from "../SavedMovies";
import Profile from "../Profile";
import Login from "../Login";
import Register from "../Register"; */

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
         <Route path="/movies">
            <Movies />
         </Route>
         <Route path="/">
            <Main />
         </Route>
      </Switch>
      <Footer />
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
