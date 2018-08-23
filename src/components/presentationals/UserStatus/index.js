import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const { Fragment } = Component;

export default function UserStatus(props) {
  let { name } = props;
  name = name || 'Guest';
  return (
    <div className="status">
      <div>{name}</div>
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
          <li onClick={props.logout}>Logout</li>
        )}
      </ul>
    </div>
  );
}
