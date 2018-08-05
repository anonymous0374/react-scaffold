import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Auth from "routes/Auth";
import Assets from "routes/Assets";

export default function Routes(props) {
  const { login } = props;
  console.info("login in routes: ", login);
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={() => {
            if (login) {
              return <Assets />;
            }
            return <Auth />;
          }}
        />
        <Route path="/login" render={() => <Auth />} />
        <Route path="/assets" render={() => <Assets />} />
      </Switch>
    </Router>
  );
}
