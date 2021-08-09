import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => (
    <Route>{() => (
      ((props.loggedIn && props.name !== 'unauth') || (!props.loggedIn && props.name === 'unauth')) ? <Component {...props} /> : <Redirect push to={`${props.name === 'unauth' ? '/movies' : '/'}`} />
    )}</Route>
);

export default ProtectedRoute;
