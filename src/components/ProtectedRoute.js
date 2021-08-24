import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log('protect', props.loggedIn, props.history);
  return (
  <Route>
    {() => (props.loggedIn === true ? <Component {...props} /> : <Redirect push to="/" />)}
  </Route>
  );
};

export default ProtectedRoute;
