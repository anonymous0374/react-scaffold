import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import Auth from "routes/Auth";
import Assets from "routes/Assets";
import Register from "routes/Register";

function Routes(props) {
  const { auth } = props;
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/assets" />} />
        <Route
          path="/login"
          exact
          render={() => (auth.authenticated ? <Auth /> : <Auth />)}
        />
        } />
        <Route
          path="/assets"
          exact
          render={() => (auth.authenticated ? <Assets /> : <Auth />)}
        />
        <Route
          path="/register"
          exact
          render={() => (auth.authenticated ? <Register /> : <Auth />)}
        />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Routes);
