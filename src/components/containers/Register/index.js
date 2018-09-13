import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from 'containers/Header';
import RegisterForm from 'presentationals/Register';
import { register } from 'actions/register';

function Register(props) {
  const {
    auth: { authenticated: registerDone },
    auth,
    user,
    register,
    msg,
  } = props;
  return (
    <Fragment>
      <Header />
      <RegisterForm auth={auth} user={user} register={register} />
      {registerDone ? (
        <Redirect to="/dashboard" />
      ) : (
        <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: msg }} />
      )}
    </Fragment>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  register: (payload) => {
    dispatch(register(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
