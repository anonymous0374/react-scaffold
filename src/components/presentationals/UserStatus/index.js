import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const { Fragment } = React;
const { SubMenu } = Menu;
const {
  ItemGroup: { MenuItemGroup },
} = Menu;

export default function UserStatus(props) {
  const { user, login, logout } = props;
  const { name } = user;

  return (
    <div className="status">
      <Menu mode="horizontal">
        <SubMenu title={name || 'Guest'}>
          {name === 'Guest' ? (
            <MenuItemGroup>
              <Menu.Item>
                <Link to="/login">Sign In</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/register">Not a VIP? Sign Up</Link>
              </Menu.Item>
            </MenuItemGroup>
          ) : (
            <MenuItemGroup>
              <Menu.Item onClick={logout}>
                <Link to="/login">Log Out</Link>
              </Menu.Item>
            </MenuItemGroup>
          )}
        </SubMenu>
      </Menu>
    </div>
  );
}
