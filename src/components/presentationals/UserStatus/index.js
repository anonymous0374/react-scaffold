import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const { Fragment } = React;

export default function UserStatus(props) {
  const { user, login, logout } = props;
  const { name } = user;

  return (
    <div className="status">
      <div>{name || 'Guest'}</div>
      <ul>
        {name === 'Guest' ? (
          <Fragment>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
            <li>
              <Link to="/register">Not a VIP? Sign Up</Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li onClick={logout}>Logout</li>
          </Fragment>
        )}
      </ul>
    </div>
  );
}
