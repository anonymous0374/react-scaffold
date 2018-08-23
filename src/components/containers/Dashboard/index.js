import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from 'presentationals/Dashboard';
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
