import React, { Component } from 'react';
import Login from 'presentationals/Login';
import { connect } from 'react-redux';
import { login } from 'actions/auth';

require('./style.less');

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  login: (credentials) => {
    dispatch(login(credentials));
  },
});

const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default () => <div className="auth"><ConnectedLogin /></div>;
