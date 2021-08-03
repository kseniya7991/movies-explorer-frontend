import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

//Импорт компонентов
import Header from "../Header/Header";
import Main from "../Main/Main";
/* import Movies from "../Movies";
import SavedMovies from "../SavedMovies";
import Profile from "../Profile";
import Login from "../Login";
import Register from "../Register";
import Footer from "../Footer"; */

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Main />
      </Route>
      {/*<Route path="/movies">
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
