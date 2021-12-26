import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const selector = useSelector(state => state);
  return (
    <Route {...rest} render={
      props => {
        if (selector.user) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={"/unauthorized"}/>
        }
      }
    } />
  )
};
