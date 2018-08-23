import React from 'react';
import Header from 'containers/Header';
import './style.less';

export default function Dashboard(props) {
  const {
    user: { name },
  } = props;
  const elemGuest = <span>Guest</span>;
  const elemVip = <span>VIP</span>;
  const isVip = name && name !== 'Guest';

  return (
    <div className="dashboard">
      <Header />
      {isVip ? elemVip : elemGuest}
    </div>
  );

  /* return <span>hello world!</span>; */
}
