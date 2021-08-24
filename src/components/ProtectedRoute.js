import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log(props.loggedIn);
  (
  <Route>
    {() => (props.loggedIn === true ? <Component {...props} /> : <Redirect to="/movies" />)}
  </Route>
  );
};

export default ProtectedRoute;
