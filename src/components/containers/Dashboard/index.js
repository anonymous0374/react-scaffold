import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Dashboard from 'presentationals/Dashboard';
import Header from 'containers/Header';
import REFRESH_DASHBOARD from 'actions/dashboard';

const mapStateToProps = state => ({
  dashboard: state.dashboard,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  refresh: () => dispatch({
    type: REFRESH_DASHBOARD,
  }),
});

function DashboardContainer(props) {
  return (
    <Fragment>
      <Header {...props} />
      <Dashboard {...props} />
    </Fragment>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardContainer);
