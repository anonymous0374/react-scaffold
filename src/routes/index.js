import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Auth from "routes/Auth";
import Assets from "routes/Assets";
import Register from "routes/Register";

export default function Routes(props) {
  const { login, userName, msg } = props;
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
        <Route path="/login" exact render={() => <Auth msg={msg} />} />
        <Route
          path="/assets"
          exact
          render={() => (login ? <Assets /> : <Redirect to="/login" />)}
        />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}
