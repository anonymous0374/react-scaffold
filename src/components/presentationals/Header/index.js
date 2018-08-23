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
      <div className="content">
        <Link to="/assets">My Assets</Link>
        <Link to="/cashflow">My Cashflow</Link>
        <UserStatus logout={logout} login={login} user={user} />
      </div>
    </div>
  );
}
