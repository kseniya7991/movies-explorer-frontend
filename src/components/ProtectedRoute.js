import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  (
  <Route>
    {() => (props.loggedIn === true ? <Component {...props} /> : <Redirect push to="/" />)}
  </Route>
  );
};

export default ProtectedRoute;
