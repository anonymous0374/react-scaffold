import React from 'react';
import Header from 'containers/Header';
import './style.less';

export default function Dashboard(props) {
  const {
    user: { name },
  } = props;
  const elemGuest = (
    <div className="guest">
      <article>
        <h1>Welcome to the Assets Management System</h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;AMS is a private finance assistant program. It helps you to
          oversee your <b>assets, cashflow, and investment situations</b> by creating{' '}
          <b>visualized, interactive reports</b> for you.
        </p>
      </article>
    </div>
  );
  const elemVip = <div className="vip" />;
  const isVip = name && name !== 'Guest';

  return (
    <div className="dashboard">
      <Header />
      {isVip ? elemVip : elemGuest}
    </div>
  );

  /* return <span>hello world!</span>; */
}
