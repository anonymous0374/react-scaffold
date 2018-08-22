import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterForm from "presentationals/Register";
import { register } from "actions/register";

function Register(props) {
  // spread those props mapped with "connect" manually
  return (
    <RegisterForm
      auth={props.auth}
      user={props.user}
      register={props.register}
    />
  );
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