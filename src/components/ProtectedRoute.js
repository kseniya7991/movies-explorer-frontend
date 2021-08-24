import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  function render() {
    return (
      <Route>
        {() => (props.loggedIn === true ? <Component {...props} /> : <Redirect push to="/" />)}
      </Route>
    );
  }
  return setTimeout(render, 1000);
};

export default ProtectedRoute;
