import React from "react";
import { Route, Redirect } from "react-router-dom";
import BubblePage from "./BubblePage";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          console.log("redirecting");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
