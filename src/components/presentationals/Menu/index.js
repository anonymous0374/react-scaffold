import React, {Fragment}  from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export default function Menu(props) {
  const { menus } = props;
  return <Fragment>menus.map((item) => {
    let subMenus = null;
    if (Array.isArray(item.subMenus)) {
      subMenus = item.subMenus.map(sub => (
        <SubMenu>
          <div>{sub.name}</div>
        </SubMenu>
      ))
    }
    const menu = (
      <Menu>
        <div>{item.name}</div>
      </Menu>
    );

  })
  </Fragment>
}
