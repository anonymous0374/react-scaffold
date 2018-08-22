import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "presentational/Dashboard";
import REFRESH_DASHBOARD from 'actions/'

class DashboardContainer extends Component {
  render() {
    return <Dashboard />;
  }
}

const mapStateToProps = (state) => {
  dashboard: state.dashboard
}

const mapDispatchToProps = (dispatch) => {
  refresh: () => {
    return dispatch({
      type: 
    })
  }
}
