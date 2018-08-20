/**
 * put user status here
 */

import React, { Component } from "React";
import { Link } from "react-router-dom";
import { UserStatus } from "components/UserStatus";
import { connect } from "react-redux";
import "./style.less";

function Header(props) {
  const { logout } = props;
  return (
    <div className="header">
      <div className="content">
        <Link to="/assets">My Assets</Link>
        <Link to="/cashflow">My Cashflow</Link>
        <UserStatus logout={logout} />
      </div>
    </div>
  );
}

export default connect(state => ({ user: state.user }), dispatch => {logout: })(Header);
