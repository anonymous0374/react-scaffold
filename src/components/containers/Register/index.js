import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import RegisterForm from 'presentationals/Register';
import { register } from 'actions/register';
import { Redirect } from 'react-router-dom';

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
