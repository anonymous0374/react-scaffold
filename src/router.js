import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import Login from "containers/Auth";
import Assets from "containers/Assets";
import Register from "containers/Register";
import getRestrictedComponent from "hocs/RestrictedComponent";

function Routes(props) {
  const {
    auth: { authenticated }
  } = props;

  const RestrictedAssets = getRestrictedComponent(authenticated, Assets);
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/assets" />} />
        <Route
          path="/login"
          render={() => (authenticated ? <Redirect to="/assets" /> : <Login />)}
        />
        <Route path="/assets" render={() => <RestrictedAssets />} />
        <Route path="/register" exact component={Register} />
        <Route path="*" render={() => <span>404 Page Not Found</span>} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

// connect Routes to auth section
export default connect(mapStateToProps)(Routes);
