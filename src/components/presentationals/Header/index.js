/**
 * put user status here
 */

import React from 'react';
import { Link } from 'react-router-dom';
import UserStatus from 'presentationals/UserStatus';
import { Menu } from 'antd';
import './style.less';

export default function Header(props) {
  const { logout, login, user } = props;
  return (
    <div className="header">
      <Menu mode="horizontal" className="menu">
        <Menu.Item>
          <Link to="/assets" className="menu-item">
            My Assets
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/cashflow" className="menu-item">
            My Cashflow
          </Link>
        </Menu.Item>
      </Menu>
      <div className="user">
        <UserStatus logout={logout} login={login} user={user} />
      </div>
    </div>
  );
}
