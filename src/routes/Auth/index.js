import React from "react";
import Login from "components/Login";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "actions/auth";

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  login: credentials => {
    dispatch(login(credentials));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
