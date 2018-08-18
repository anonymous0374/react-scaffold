import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import Login from "routes/Auth";
import Assets from "routes/Assets";
import Register from "routes/Register";

function Routes(props) {
  const {
    auth: { authenticated }
  } = props;

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/assets" />} />
        <Route path="/login" exact component={Login} />
        <Route
          path="/assets"
          exact
          render={() => (authenticated ? <Assets /> : <Redirect to="/login" />)}
        />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

// connect Routes to auth section
export default connect(mapStateToProps)(Routes);
