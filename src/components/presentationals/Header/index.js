/**
 * put user status here
 */

import React from 'react';
import { Link } from 'react-router-dom';
import UserStatus from 'presentationals/UserStatus';
import './style.less';

export default function Header(props) {
  const {
    logout,
    login,
    user,
    location: { pathname },
  } = props;
  return (
    <div className="header">
      <Link className="logo" to="/dashboard" />
      <div
        className="menu-item-box"
        style={pathname === '/dashboard' ? { borderBottom: '2px solid goldenrod' } : {}}
      >
        <Link to="/dashboard" className="menu-item">
          Dashboard
        </Link>
      </div>
      <div
        className="menu-item-box"
        style={pathname === '/assets' ? { borderBottom: '2px solid goldenrod' } : {}}
      >
        <Link to="/assets" className="menu-item">
          Assets
        </Link>
      </div>
      <div
        className="menu-item-box"
        style={pathname === '/cashflow' ? { borderBottom: '2px solid goldenrod' } : {}}
      >
        <Link to="/cashflow" className="menu-item">
          Cashflow
        </Link>
      </div>
      <div
        className="menu-item-box"
        style={pathname === '/investments' ? { borderBottom: '2px solid goldenrod' } : {}}
      >
        <Link to="/investments" className="menu-item">
          Investments
        </Link>
      </div>

      <div className="user">
        <UserStatus logout={logout} login={login} user={user} />
      </div>
    </div>
  );
}
