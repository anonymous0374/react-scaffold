/**
 * put user status here
 */

import React from 'react';
import { Link } from 'react-router-dom';
import UserStatus from 'presentationals/UserStatus';
import './style.less';

export default function Header(props) {
  const { logout, login, user } = props;
  return (
    <div className="header">
      <div className="menu-item-box">
        <Link to="/assets" className="menu-item">
          My Assets
        </Link>
      </div>
      <div className="menu-item-box">
        <Link to="/cashflow" className="menu-item">
          My Cashflow
        </Link>
      </div>

      <div className="user">
        <UserStatus logout={logout} login={login} user={user} />
      </div>
    </div>
  );
}
