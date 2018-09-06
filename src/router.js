import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from 'containers/Auth';
import Assets from 'containers/Assets';
import Register from 'containers/Register';
import Dashboard from 'containers/Dashboard';
import Cashflow from 'containers/Cashflow';
import getRestrictedComponent from 'hocs/RestrictedComponent';

function Routes(props) {
  const {
    auth: { authenticated },
    history,
  } = props;

  const RestrictedAssets = getRestrictedComponent(authenticated, Assets);
  const RestrictedCashflow = getRestrictedComponent(authenticated, Cashflow);
  const historyArray = history.length > 0 ? JSON.parse(history) : ['/dashboard'];
  const lastLocation = historyArray.slice(-1)[0];
  const { location: { origin } } = window;
  const lastPath = lastLocation.replace(origin, '');
  console.info('react history: ', history, ' last locatoin: ', lastLocation);

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to={lastPath} />} />
        <Route
          path="/login"
          render={() => (authenticated ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/assets" render={() => <RestrictedAssets />} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/cashflow" exact render={() => <RestrictedCashflow />} />
        <Route path="*" render={() => <span>404 Page Not Found</span>} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  history: state.history,
});

// connect Routes to auth section
export default connect(mapStateToProps)(Routes);
