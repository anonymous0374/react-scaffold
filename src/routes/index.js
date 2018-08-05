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
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() =>
            login ? <Redirect to="/assets" /> : <Redirect to="/login" />
          }
        />
        <Route path="/login" exact render={() => <Auth />} />
        <Route
          path="/assets"
          exact
          render={() => (login ? <Assets /> : <Redirect to="/login" />)}
        />
      </Switch>
    </Router>
  );
}
