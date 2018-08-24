import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.less';

export default class UserStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSub: false,
    };
  }

  onMenuHoverIn = () => {
    this.setState(() => ({ showSub: true }));
  };

  onMenuHoverOut = () => {
    this.setState(() => ({ showSub: false }));
  };

  render() {
    const {
      props: { user, login, logout },
    } = this;
    let { name } = user;
    const {
      state: { showSub },
    } = this;
    name ? '' : (name = 'Guest');
    const isVip = name !== 'Guest';
    const guestMenu = (
      <ul style={{ display: showSub ? 'block' : 'none' }}>
        <li>
          <Link to="/login">Sign In</Link>
        </li>
        <li>
          <Link to="/register">Not a VIP? Sign Up</Link>
        </li>
      </ul>
    );
    const vipMenu = (
      <ul style={{ display: showSub ? 'block' : 'none' }}>
        <li>
          <Link to="/user">Profile</Link>
        </li>
        <li>
          <Link to="/login" onClick={logout}>Sign Out</Link>
        </li>
      </ul>
    );

    return (
      <div className="status">
        <div
          className="userName"
          onMouseEnter={this.onMenuHoverIn}
          onMouseLeave={this.onMenuHoverOut}
        >
          <div>{name}</div>
          {isVip ? vipMenu : guestMenu}
        </div>
      </div>
    );
  }
}
