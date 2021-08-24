import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const tester = () => {
    console.log('test', props.loggedIn);
  };
  setTimeout(tester, 3000);
  return (
  <Route>
    {() => (props.loggedIn === true ? <Component {...props} /> : <Redirect push to="/" />)}
  </Route>
  );
};

export default ProtectedRoute;
