import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterForm from "components/Register";
import { register } from "actions/register";

function Register() {
  return <RegisterForm />;
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  register: payload => {
    dispatch(register(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
